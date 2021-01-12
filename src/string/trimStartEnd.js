/**
 * 去除字符串前后的空格
 *
 * @param {String} str 有空格的字符串
 * trim(' yu yu ')
 * => 'yu yu'
 */

function trimStartEnd(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
export default trimStartEnd;
