(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.JSUtil = factory());
}(this, (function () { 'use strict';

  /**
   * 将数组转换成字符串
   *
   * @param {Array} arrList 要转换的数据
   * @returns {String} 转换后的字符串格式
   *
   * tostringFun([1, 2, 3])
   * => 1, 2, 3
   *
   */
  function tostringFun(arrList) {
    return arrList.toString();
  }

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
  function arrAttrUnique() {
    var arrList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "id";
    var res = new Map();
    return arrList.filter(function (iten) {
      return !res.has(iten[key]) && res.set(iten[key], 1);
    });
  }

  /**
   * 按照区间生成随机数
   *
   * @param {number} min 最小值 默认0
   * @param {number} max 最大值 默认1
   * @param {number} number 要生成几个随机数
   * @returns {number|array}  生成的随机数 [min, max] 左闭右闭区间
   *
   * getRoundNumber(5, 15, 3)
   * => [9, 6, 13]
   *
   * getRoundNumber(6, 20, 1)
   * => 10
   */
  function getRoundNumber() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var tempMin = Math.ceil(min);
    var tempMax = Math.floor(max);
    var result = [];

    for (var i = 0; i < number; i++) {
      result.push(Math.floor(Math.random() * (tempMax - tempMin + 1)) + tempMin);
    }

    return number === 1 ? result[0] : result;
  }

  /**
   * 格式化价格(每隔3位一个逗号)
   *
   * @param {number} price 价格
   * @param {number} decimal 是否需要小点两位; 如果价格已是小数，则此参数无效
   * @return {string} 被格式化后的价格,例如 '123,456,789.00'
   *
   * formatPrice(123456789)
   * => '123,456,789'
   *
   * formatPrice(123456789, true)
   * => '123,456,789.00'
   *
   * formatPrice(123456789.00, true)
   * => '123,456,789.00'
   *
   * formatPrice(123456789.00)
   * => '123,456,789.00'
   *
   * formatPrice(123456789.8)
   * => '123,456,789.80'
   *
   */
  function formatPrice(price) {
    var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var regExp = /\B(?=(\d{3})+(?!\d))/g;

    if (decimal || price.toString().includes(".")) {
      return price.toFixed(2).toString().replace(regExp, ",");
    }

    return price.toString().replace(regExp, ",");
  }

  /**
   * 获取当前时间戳
   *
   * @returns {number} 当前时间戳
   *
   * getNowTime()
   * => 1610431852976
   */
  function getNowTime() {
    return Date.now();
  }

  /**
   * 获取某个日期对应的时间戳
   *
   * @param {string} date 要获取的日期, 默认为当前日期
   * @returns {number} 该日期对应的时间戳 单位毫秒
   *
   * getTimeStamp('2014/07/10 10:21:12')
   * => 1558598298166
   *
   * getTimeStamp()
   * => 1558598298166
   *
   * getTimeStamp('2014-07-10 10:21:12')
   * => 1558598298166
   *
   */
  function getTimeStamp(date) {
    var dateString = new Date(date ? date.replace(/-/g, "/") : new Date());
    return dateString;
  }

  // array
  var JSUtil = {
    tostringFun: tostringFun,
    arrAttrUnique: arrAttrUnique,
    getRoundNumber: getRoundNumber,
    formatPrice: formatPrice,
    getNowTime: getNowTime,
    getTimeStamp: getTimeStamp
  };

  return JSUtil;

})));
//# sourceMappingURL=index.js.map
