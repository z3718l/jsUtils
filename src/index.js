// array
import tostringFun from "./array/tostring";
import arrAttrUnique from "./array/arrAttrUnique";

// number
import getRoundNumber from "./number/getRoundNumber";
import formatPrice from "./number/formatPrice";

// formatdate
import getNowTime from "./formatdate/getNowTime";
import getTimeStamp from "./formatdate/getTimeStamp";
import formatdate from "./formatdate/formatdate";
import formatCountDown from "./formatdate/formatCountDown";
import isBrforeTime from "./formatdate/isBrforeTime";
import isAfterTime from "./formatdate/isAfterTime";
import isBetween from "./formatdate/isBetween";
import whichDay from "./formatdate/whichDay";

// String
import trim from "./string/trim";
import trimStart from "./string/trimStart";
import trimEnd from "./string/trimEnd";
import trimStartEnd from "./string/trimStartEnd";

// url
import getQueryParams from "./url/getQueryParams";

// Object
import delEmptyAttr from "./object/delEmptyAttr";

const JSUtil = {
  tostringFun,
  arrAttrUnique,
  getRoundNumber,
  formatPrice,
  getNowTime,
  getTimeStamp,
  formatdate,
  formatCountDown,
  isBrforeTime,
  isAfterTime,
  isBetween,
  whichDay,
  trim,
  trimStart,
  trimEnd,
  trimStartEnd,
  getQueryParams,
  delEmptyAttr,
};
export default JSUtil;
