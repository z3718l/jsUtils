/**
 * 去除字符串前面的空格
 *
 * @param {String} str 有空格的字符串
 * trim(' yu yu ')
 * => 'yu yu '
 */

function trimStart(str) {
  return str.replace(/(^\s*)/g, "");
}
export default trimStart;
