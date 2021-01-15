/**
 * 判断对象是否为空
 *
 * @param {Object} data 需要判断的对象
 * @returns {Boolean}
 *
 * isEmptyObject({a: 1})
 * => false
 * isEmptyObject({age: '', name: ""})
 * => false
 * isEmptyObject({})
 * => true
 */

function isEmptyObject(data) {
    let key;
    for (key in data) return false;
    return true;
};
export default isEmptyObject;
