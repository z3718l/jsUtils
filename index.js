(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.JSUtil = factory());
}(this, (function () { 'use strict';

  /**
   *
   * @param {Array}
   * 将数组转换成字符串
   * tostringFun([1, 2, 3])
   * => 1, 2, 3
   *
   */
  function tostringFun(ops) {
    return ops.toString();
  }

  /**
   *
   * @param {Array, String}
   * @param {arrList = [], key = 'id'}
   * arrAttrUnique([{id: 1, name: 'zhangsan'}, {id: 2, name: 'lisi'}, {id: 1, name: 'wangwu'}])
   * => [{id: 1, name: 'zhangsan}, {id: 2, name: 'lisi'}]
   * arrList：需要去重的数组
   * key：需要根据哪个属性进行去重
   */
  function arrAttrUnique() {
    var arrList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "id";
    var res = new Map();
    return arrList.filter(function (iten) {
      return !res.has(iten[key]) && res.set(iten[key], 1);
    });
  }

  var JSUtil = {
    tostringFun: tostringFun,
    arrAttrUnique: arrAttrUnique
  };

  return JSUtil;

})));
//# sourceMappingURL=index.js.map
