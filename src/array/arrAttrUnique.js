/**
 * 根据数组对象中某个属性进行去重
 *
 * @param {Array} arrList 需要去重的数组
 * @param {String} key 需要根据哪个属性进行去重
 * @returns {Array} 去重之后返回的新数组
 *
 * arrAttrUnique([{id: 1, name: 'zhangsan'}, {id: 2, name: 'lisi'}, {id: 1, name: 'wangwu'}])
 * => [{id: 1, name: 'zhangsan}, {id: 2, name: 'lisi'}]
 */

function arrAttrUnique(arrList = [], key = "id") {
  const res = new Map();
  return arrList.filter((iten) => !res.has(iten[key]) && res.set(iten[key], 1));
}
export default arrAttrUnique;
