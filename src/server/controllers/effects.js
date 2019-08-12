/**
 * Effects routes module
 *
 * @request  {post} /protected
 * @request  {post} /
 */

import User from '../models/user';
import response from '../helpers/errorHandler';
import { NotFoundError, ClientError } from '../helpers/error';

const getEffectsList = async (req, res) => {
  const { title } = req.query;
  const { userId } = req;

  try {
    const { effects } = await User.findOne({ _id: userId }, 'effects');
    const findedEffect = effects.find(effect => effect.title === title);

    if (!findedEffect) {
      throw new NotFoundError('Preset with this title is not found');
    }

    return res.status(200).json(findedEffect);
  } catch (error) {
    return response(res, error.message, error.code);
  }
};

const saveEffect = async (req, res) => {
  const { title, presets } = req.body;
  const { userId, token } = req;

  try {
    const filterExpression = { _id: userId, 'effects.title': { $ne: title } };
    const updateExpression = { $addToSet: { effects: { title, presets } } };
    const config = { new: true, runValidators: true };

    const result = await User.findOneAndUpdate(filterExpression, updateExpression, config);
    if (!result) {
      throw new ClientError('Effect with this title already exists', 404);
    }

    return res.status(201).json({ success: 'The preset have been saved', token });
  } catch (error) {
    return response(res, error.message, error.code);
  }
};

const deleteEffect = async (req, res) => {
  const { title } = req.body;
  const { userId } = req;

  try {
    const filterExpression = { _id: userId, 'effects.title': { $in: title } };
    const updateExpression = { $pull: { effects: { title } } };
    const result = await User.findOneAndUpdate(filterExpression, updateExpression);

    if (!result) {
      throw new ClientError('Effect with this title is not found', 401);
    }

    return res.status(200).json('The preset have been deleted');
  } catch (error) {
    return response(res, error.message, error.code);
  }
};

const getUserTitles = async (req, res) => {
  try {
    const { userId } = req;
    const { effects } = await User.findOne({ _id: userId });

    if (!effects) {
      throw new NotFoundError('Effect not found');
    }

    return res.status(200).json({
      userPresets: effects.map(effect => effect.title),
    });
  } catch (error) {
    return response(res, error.message, error.code);
  }
};

export default {
  getEffectsList,
  saveEffect,
  deleteEffect,
  getUserTitles,
};
