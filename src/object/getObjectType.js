/**
 * 此方法可以相对较全的判断js的数据类型。
 *
 * @param {*} data 需要判断类型的变量
 * @returns [object Object]  [object Number]...
 *
 * callObjectType({age: '', name: ""})
 * => [object Object]
 */
export const callObjectType = function (data) {
    return Object.prototype.toString.call(data);
};

/**
 * constructor：判断变量类型
 * null、undefined没有construstor方法，因此constructor不能判断undefined和null。
 *
 * @param {*} data 需要判断类型的变量
 * @param {*} type 传入判断的类型
 *
 * constructorObjectType({age: '', name: ""}, Object)
 * => true
 * constructorObjectType({age: '', name: ""}, Array)
 * => false
 */
export const constructorObjectType = function (data, type) {
  return data.constructor === type;
};

/**
 * instanceof不能识别出基本的数据类型 number、boolean、string、undefined、unll、symbol。
 * 但是可以检测出引用类型，如array、object、function，同时对于是使用new声明的类型，它还可以检测出多层继承关系。
 * 其实也很好理解，js的继承都是采用原型链来继承的。比如objA instanceof A ，其实就是看objA的原型链上是否有A的原型，而A的原型上保留A的constructor属性。
 * 所以instanceof一般用来检测对象类型，以及继承关系。
 *
 * @param {*} data
 * @param {*} type
 *
 */
export const instanceofObjectType = function (data, type) {
  return data instanceof type;
};

/**
 * typeof可以识别出基本类型boolean,number,undefined,string,symbol，但是不能识别null。
 * 能识别引用数据类型，会把null、array、object统一归为object类型,但是可以识别出function。
 *
 * 所以typeof可以用来识别一些基本类型。
 * @param {*} data
 *
 */
export const typeofObjectType = function (data) {
  return typeof data;
};


/**
 * 写在最后：
 * 至于在项目中使用哪个判断，还是要看使用场景，具体的选择，一般基本的类型可以选择typeof，引用类型可以使用instanceof。
 */