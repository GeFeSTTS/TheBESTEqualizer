import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import dotenv from 'dotenv';
import response from './errorHandler';

dotenv.config();

const { SECRET } = process.env;
const tokenLife = process.env.TOKEN_LIFE || '1h';

export const verify = token => jwt.verify(token, SECRET);

export const decode = token => jwt.decode(token);

/**
 *
 * @param {object} payload { userId }
 * @param {string} [life]
 * @return {object}
 */
export const generateTokensPair = (payload, life = tokenLife) => {
  const refresh = crypto.randomBytes(24).toString('hex');
  const access = jwt.sign({
    ...payload,
    _refresh: refresh,
  }, SECRET, { expiresIn: life });

  return { refresh, access };
};

/**
 *
 * @param {object} req { userId }
 * @param {object} res
 * @param {function} next
 */
export const middleware = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return response(res, {
      success: false,
      message: 'No token provided.',
    }, 403);
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return response(res, {
        success: false,
        message: 'Failed to authenticate token.',
      }, 403);
    }

    req.userId = decoded.userId;
    req.refresToken = decoded._refresh;
    return next();
  });
  return null;
};
