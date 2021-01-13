/**
 * 判断一个时间戳和参照时间戳相比，是前天、昨天、今天、明天、后天
 *
 * @param {string} timeStamp 需要判断的时间戳, 单位毫秒
 * @param {string} flagTimeStamp 参照的时间戳，默认是今天, 单位毫秒
 * @returns {bool} 前天-2、昨天-1、今天0、明天1、后天2
 *
 * whichDay(1595751285439)
 * => 0 // 前天-2、昨天-1、今天0、明天1、后天2
 *
 */

function whichDay(timeStamp, flagTimeStamp = Date.now()) {
  const oneDay = 24 * 60 * 60 * 1000; // 一天有多少秒
  // 不采用 new Date().getTimezoneOffset() * 60 * 1000;
  // 下面根据字符串获取时间戳能保持大家参照的是同一个时间，更为的严谨些
  const correct = Date.parse("1970-01-01 00:00:00"); // 格林威治时间和本地时间之间的时差

  return (
    ~~((timeStamp - correct) / oneDay) - ~~((flagTimeStamp - correct) / oneDay)
  ); // ~~ 是直接丢弃小数取整 不进行4舍5入
}
export default whichDay;
