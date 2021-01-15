/**
 * 去除对象中为空的属性
 *
 * @param {Object} data 要处理的对象
 * @returns {Object} 返回处理好的对象
 *
 * delEmptyAttr({age: 12, name: ""})
 * =>{age: 12}
 */

function delEmptyAttr(data={}) {
    for (let key in data) {
      if (data[key] === "" || data[key] === undefined) {
        delete data[key];
      }
    }
    return data;
    // for (var key in data) {
    //     if (data[key] === "" || data[key] === undefined) {
    //         delete data[key];
    //     }
    // }
    // return data;
};
export default delEmptyAttr;
