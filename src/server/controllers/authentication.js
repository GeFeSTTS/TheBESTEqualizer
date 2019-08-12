/**
 * Autentication routes module
 *
 * @request  {post} /login
 * @request  {post} /registration
 * @request  {post} /token/refresh
 * @request  {post} /logout
 */

import User from '../models/user';
import response from '../helpers/errorHandler';
import { generateTokensPair } from '../helpers/token';
import { ClientError, TeapotError } from '../helpers/error';
import * as redis from '../helpers/redis';

// internal helpers

const generateTokens = async (user) => {
  const tokens = generateTokensPair(user);
  const result = await redis.putToken(tokens.refresh, user.userId);

  if (!result) {
    throw new TeapotError();
  }

  return tokens;
};

// actions

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });

  try {
    const emailTaken = await User.findOne({ email });

    if (emailTaken) {
      throw new ClientError('User with this email already exists!');
    }

    const savedUser = await user.save();
    let tokens = {};

    if (savedUser) {
      tokens = await generateTokens({ userId: user._id });
    }

    return res.status(201).json({ username: savedUser.username, token: tokens });
  } catch (error) {
    return response(res, error.message, 404);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new ClientError('User not exist');
    }

    const verifiedPassword = await user.verifyPassword(password);

    if (!verifiedPassword) {
      throw new ClientError('Wrong password', 404);
    }

    const tokens = await generateTokens({ userId: user._id });

    return res.status(200).json({ username: user.username, token: tokens });
  } catch (error) {
    return response(res, error.message, 404);
  }
};

/**
 *
 * @param {string} refresh
 * @param {string} userId
 */
const refreshToken = async (req, res) => {
  const { refresh } = req.body;
  const { userId } = req;

  try {
    const storedUserId = await redis.getToken(refresh.toString());

    if (storedUserId !== userId) {
      throw new ClientError('Tokens not matched', 401);
    }

    const newTokensPair = await generateTokens({ userId });
    if (newTokensPair) {
      await redis.deleteToken(refresh);
    }

    return res.status(200).json({ token: newTokensPair });
  } catch (error) {
    return response(res, error.message, error.code);
  }
};

const logOut = async (req, res) => {
  const { refresToken } = req;

  try {
    await redis.deleteToken(refresToken);

    return res.status(200).json({ success: true });
  } catch (error) {
    return response(res, error.message, error.code);
  }
};

export default {
  registerUser,
  loginUser,
  refreshToken,
  logOut,
};
