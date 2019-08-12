/**
 * Redis module
 *
 * this module created for easy work with tokens (store in redis && refresh)
 */

import redis from 'redis';
import dotenv from 'dotenv';
import { ClientError } from './error';

dotenv.config();

const DAY = 3600 * 24;

const redisClient = redis.createClient({
  url: process.env.REDIS_URL,
  expire: DAY,
});

redisClient.on('error', err => console.log(`Redis error -> ${err}`));
redisClient.on('connect', () => process.env.DEV_MODE && console.log('redis connected ', process.env.REDIS_URL));

function injectMethod(method, methodArgs) {
  return new Promise((resolve, reject) => {
    redisClient[method].apply(redisClient, [...methodArgs, (err, replay) => {
      if (err) {
        return reject(new ClientError(err));
      }
      return resolve(replay);
    }]);
  });
}
/**
 * return value (user id in this case) from redis storage finded by token (key)
 * @param {string} key
 * @return {Promise} with data (userId)
 * @throws {ClientError}
 */
export const getToken = async token => injectMethod('get', [token], 'eror message');
/**
 * put token in redis storage key = refresh-token, value = userId
 * this methodology can work with multiple sessions (multi device)
 * @param {string} key
 * @param {string} value
 * @return {Promise} (boolean) true/false
 * @throws {ClientError}
 */
export const putToken = async (token, value) => injectMethod('set', [token, value, 'EX', DAY]);
/**
 * delete token (record) from redis storage
 * @param {string} key
 * @return {Promise} (boolean) true/false
 * @throws {ClientError}
 */
export const deleteToken = async token => injectMethod('del', [token]);
/**
 * default redis export - to work with redis directly if it need
 */
export default redisClient;
