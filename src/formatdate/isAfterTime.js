/**
 * 判断当前时间是否在指定时间之前
 *
 * @param {string} date 参照的时间
 * @returns {bool} true: 当前时间大于参照时间；false: 当前时间小于等于参照时间
 *
 * isAfterTime('1949/10/01 10:21:12')
 * => true
 *
 * isAfterTime('2050-07-10 10:21:12')
 * => false
 *
 */

import getTimeStamp from "./getTimeStamp";

function isAfterTime(date) {
  return getTimeStamp() < getTimeStamp(date);
}
export default isAfterTime;
