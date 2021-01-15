/**
 * 获取url上的查询参数（如果参数值是数字类型，会自动转换成number类型，将不再是字符串）
 *
 * @param {string} url 不传递则表示获取当前url
 * @returns {object} url 参数对象集合
 *
 * getQueryParams('https://www.baidu.com/?age=3&name=zhangsan')
 * => {age: 3, name: 'zhangsan'}
 *
 * getQueryParams('https://www.baidu.com')
 * => {}
 */

function getQueryParams(url = location.search) {
  const [key, value] = item.split("=");
  params[key] =
    Number(value).toString() === "NaN" ? decodeURI(value) : Number(value);
}
export default getQueryParams;
