/**
 * 获取某个日期对应的时间戳
 *
 * @param {string} date 要获取的日期, 默认为当前日期
 * @returns {number} 该日期对应的时间戳 单位毫秒
 *
 * getTimeStamp('2014/07/10 10:21:12')
 * => 1558598298166
 *
 * getTimeStamp()
 * => 1558598298166
 *
 * getTimeStamp('2014-07-10 10:21:12')
 * => 1558598298166
 *
 */

function getTimeStamp(date) {
  const dateString = new Date(date ? date.replace(/-/g, "/") : new Date());
  return dateString;
}
export default getTimeStamp;
