
function getDeviceType() {
    const u = navigator.userAgent;
    let device;
    if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
        device = "Android";
    } else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        device = "IOS";
    } else {
        device = u;
    }
    return device;
};
export default getDeviceType;