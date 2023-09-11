const cookie2object = (cookie) => {
  var obj = {};
  var arr = cookie.split("; ");
  arr.forEach(function (val) {
    var brr = val.split("=");
    obj[brr[0]] = brr[1];
  });
  return obj;
};
const config = {
  cookie: {},
  headers: {}
};

config.headers = $request.headers;
config.cookie = cookie2object(config.headers.Cookie);
var nessary_headers = {};
nessary_headers.Cookie = `DedeUserID=${config.cookie.DedeUserID}; DedeUserID__ckMd5=${config.cookie.DedeUserID__ckMd5}; SESSDATA=${config.cookie.SESSDATA}; bili_jct=${config.cookie.bili_jct}; sid=${config.cookie.sid}`;
nessary_headers.Authorization = config.headers.Authorization;
nessary_headers['User-Agent'] = config['headers']['User-Agent'];
nessary_headers['x-bili-locale-bin'] = config['headers']['x-bili-locale-bin'];
nessary_headers['x-bili-device-bin'] = config['headers']['x-bili-device-bin'];
nessary_headers['x-bili-metadata-bin'] = config['headers']['x-bili-metadata-bin'];
nessary_headers['x-bili-fawkes-req-bin'] = config['headers']['x-bili-fawkes-req-bin'];
console.log(JSON.stringify(nessary_headers));
$notify("BiliBili-cookie获取", "获取成功", JSON.stringify(nessary_headers));
$done({});
