/**
 * 按照区间生成随机数
 *
 * @param {number} min 最小值 默认0
 * @param {number} max 最大值 默认1
 * @param {number} number 要生成几个随机数
 * @returns {number|array}  生成的随机数 [min, max] 左闭右闭区间
 *
 * getRoundNumber(5, 15, 3)
 * => [9, 6, 13]
 *
 * getRoundNumber(6, 20, 1)
 * => 10
 */

function getRoundNumber(min = 0, max = 1, number = 1) {
    const tempMin = Math.ceil(min);
    const tempMax = Math.floor(max);
    const result = [];

    for (let i = 0; i < number; i++) {
      result.push(
        Math.floor(Math.random() * (tempMax - tempMin + 1)) + tempMin
      );
    }

    return number === 1 ? result[0] : result;
}
export default getRoundNumber;
