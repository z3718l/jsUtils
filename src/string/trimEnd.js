/**
 * 去除字符串后面的空格
 *
 * @param {String} str 有空格的字符串
 * trim(' yu yu ')
 * => ' yu yu'
 */

function trimEnd(str) {
  return str.replace(/(\s*$)/g, "");
}
export default trimEnd;
