import * as Token from '../helpers/token';
import * as Redis from '../helpers/redis';
import response from '../helpers/errorHandler';
import { ClientError, ForbiddenError } from '../helpers/error';

const refresTokens = async ({ userId, _refresh: refresh }) => {
  try {
    if (!refresh) {
      throw new ClientError('Refresh not provided');
    }

    const storedUserId = await Redis.getToken(refresh.toString());

    if (storedUserId !== userId) {
      throw new ForbiddenError('Refresh not valid, access denided');
    }

    const newTokens = await Token.generateTokensPair({ userId });

    if (newTokens) {
      await Redis.deleteToken(refresh.toString());
      await Redis.putToken(newTokens.refresh, userId);
    }

    return newTokens;
  } catch (error) {
    throw error;
  }
};

const authMiddleware = async (req, res, next) => {
  const token = req.headers['x-access-token'];

  try {
    if (!token) {
      throw new ForbiddenError('No Token provided');
    }

    const validTokens = Token.verify(token);
    req.token = token;
    req.userId = validTokens.userId;

    return next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      try {
        const decodedTokens = Token.decode(token);
        const newTokens = await refresTokens(decodedTokens);

        req.token = newTokens.access;
        req.userId = decodedTokens.userId;

        return next();
      } catch (err) {
        return response(res, err.message, err.code);
      }
    }

    return response(res, error.message, error.code);
  }
};

export default authMiddleware;
