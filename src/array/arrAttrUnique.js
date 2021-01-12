/**
 *
 * @param {Array, String}
 * @param {arrList = [], key = 'id'}
 * arrAttrUnique([{id: 1, name: 'zhangsan'}, {id: 2, name: 'lisi'}, {id: 1, name: 'wangwu'}])
 * => [{id: 1, name: 'zhangsan}, {id: 2, name: 'lisi'}]
 * arrList：需要去重的数组
 * key：需要根据哪个属性进行去重
 */

function arrAttrUnique(arrList = [], key = "id") {
  const res = new Map();
  return arrList.filter((iten) => !res.has(iten[key]) && res.set(iten[key], 1));
}
export default arrAttrUnique;
