/**
 * 格式化时间戳
 *
 * @param {number} timeStamp 时间戳, 默认为当前日期对应的时间戳, 单位毫秒
 * @returns {object} 被格式化后的对象 { year: 2019, month: 5, day: 23, hour: 23, minute: 26, second: 11, millisecond: 753 }
 *
 * formatDate()
 * => { year: 2019, month: 5, day: 23, hour: 23, minute: 26, second: 11, millisecond: 753 }
 *
 * formatDate(1558622540000)
 * => { year: 2019, month: 5, day: 23, hour: 22, minute: 42, second: 20, millisecond: 0 }
 *
 * formatDate(-1378218728000) 参数可以是负整数，代表1970年元旦之前的时间
 * => { year: 1926, month: 4, day: 30, hour: 17, minute: 27, second: 52, millisecond: 0 }
 */

function formatdate(timeStamp = Date.now()) {
  const date = new Date(timeStamp);

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds(),
  };
}
export default formatdate;
