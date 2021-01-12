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

  var JSUtil = {
    tostringFun: tostringFun
  };

  return JSUtil;

})));
//# sourceMappingURL=index.js.map
