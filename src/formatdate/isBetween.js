/**
 * 判断当前时间是否在指定时间范围内
 *
 * @param {string} beforeDate 参照的起始时间
 * @param {string} afterDate 参照的结束时间
 * @returns {bool} true: 当前时间大于等于起始时间，并且当前时间小于等于结束时间；false: 当前时间小于起始时间，或者当前时间大于结束时间
 *
 * isBetween('1949/10/01 10:21:12', '2050/10/01 10:21:12')
 * => true
 *
 * isBetween('1949-10-01 10:21:12', '2008/10/01 10:21:12')
 * => false
 *
 */

import getTimeStamp from "./getTimeStamp";

function isBetween(beforeDate, afterDate) {
  return (
    getTimeStamp(beforeDate) <= getTimeStamp() &&
    getTimeStamp() <= getTimeStamp(afterDate)
  );
}
export default isBetween;
