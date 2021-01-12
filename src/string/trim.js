/**
 * 去除字符串中的所有空格
 *
 * @param {String} str 有空格的字符串
 *
 * trim(' yu yu ')
 * => 'yuyu'
 */

function trim(str) {
  return str.replace(/\s+/g, "");
}
export default trim;
