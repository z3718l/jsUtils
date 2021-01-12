/**
 * 格式化倒计时时间
 *
 * @param {number} timeStamp 时间戳 (两个时间戳的差值) 单位毫秒
 * @returns {object} 被格式化后的对象
 *
 * formatCountDown(642567521)
 * => { day: 7, hour: 10, minute: 29, second: 27, millisecond: 521 }
 *
 * formatCountDown(-123)
 * => { day: 0, hour: 0, minute: 0, second: 0, millisecond: 0 }
 * 在业务中可以判断展示时分秒，也可以判断为0不展示等业务操作
 */

function formatCountDown(timeStamp) {
  if (timeStamp <= 0) {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    };
  }

  const dayStamp = 24 * 60 * 60 * 1000;
  const hourStamp = 60 * 60 * 1000;
  const minuteStamp = 60 * 1000;
  const secondStamp = 1000;
  const millisecondStamp = 1000;

  const day = (timeStamp / dayStamp) | 0;
  const hour = ((timeStamp % dayStamp) / hourStamp) | 0;
  const minute = (((timeStamp % dayStamp) % hourStamp) / minuteStamp) | 0;
  const second =
    ((((timeStamp % dayStamp) % hourStamp) % minuteStamp) / secondStamp) | 0;
  const millisecond =
    (((timeStamp % dayStamp) % hourStamp) % minuteStamp) % millisecondStamp;

  return { day, hour, minute, second, millisecond };
}
export default formatCountDown;
