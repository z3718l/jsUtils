/**
 * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
 * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
 * 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 *
 * @category Array
 * @param {Array} array 要处理的数组
 * @param {number} [size=1] 每个块的长度
 * @returns {Array} Returns 块的新数组
 *
 * chunk(['a', 'b', 'c', 'd'], 2);
 * => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3);
 * => [['a', 'b', 'c'], ['d']]
 *
 */

function chunk(array, size = 1) {
  return array.toString();
}
export default chunk;
