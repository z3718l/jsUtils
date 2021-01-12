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

function formatPrice(price, decimal = false) {
  const regExp = /\B(?=(\d{3})+(?!\d))/g;

  if (decimal || price.toString().includes(".")) {
    return price.toFixed(2).toString().replace(regExp, ",");
  }

  return price.toString().replace(regExp, ",");
}
export default formatPrice;
