/**
 * 判断当前时间是否在指定时间之前
 *
 * @param {string} date 参照的时间
 * @returns {bool} true: 当前时间小于参照时间；false: 当前时间大于等于参照时间
 *
 * isBrforeTime('2050/07/10 10:21:12')
 * => true
 *
 * isBrforeTime('2008-08-10 10:21:12')
 * => false
 *
 */

import getTimeStamp from "./getTimeStamp";

function isBrforeTime(date) {
  return getTimeStamp() < getTimeStamp(date);
}
export default isBrforeTime;
