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

const $ = new Env("biliCookie")

config.headers = $request.headers
config.cookie = cookie2object(config.headers.Cookie)
var bili_headers = {}
bili_headers.Cookie = `DedeUserID=${config.cookie.DedeUserID}; DedeUserID__ckMd5=${config.cookie.DedeUserID__ckMd5}; SESSDATA=${config.cookie.SESSDATA}; bili_jct=${config.cookie.bili_jct}; sid=${config.cookie.sid}`
bili_headers.Authorization = config.headers.Authorization
bili_headers['User-Agent'] = config['headers']['User-Agent']
bili_headers['x-bili-locale-bin'] = config['headers']['x-bili-locale-bin']
bili_headers['x-bili-device-bin'] = config['headers']['x-bili-device-bin']
bili_headers['x-bili-metadata-bin'] = config['headers']['x-bili-metadata-bin']
bili_headers['x-bili-fawkes-req-bin'] = config['headers']['x-bili-fawkes-req-bin']
$.log($.toStr(bili_headers))
$.msg("BiliBili-cookie获取", "获取成功", $.toStr(bili_headers))
$.done()



function Env(t,e){class n{constructor(t){this.env=t}}return new class{constructor(t,e){this.name=t,this.http=new n(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}msg(e=t,n="",s="",r){const a=t=>{switch(typeof t){case void 0:return t;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:t};case"Loon":case"Shadowrocket":return t;case"Quantumult X":return{"open-url":t}}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:{let e=t.url||t.openUrl||t["open-url"];return{url:e}}case"Loon":{let e=t.openUrl||t.url||t["open-url"],n=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:n}}case"Quantumult X":{let e=t["open-url"]||t.url||t.openUrl,n=t["media-url"]||t.mediaUrl,s=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":n,"update-pasteboard":s}}}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(e,n,s,a(r));break;case"Quantumult X":$notify(e,n,s,a(r))}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}done(t={}){const e=(new Date).getTime(),n=(e-this.startTime)/1e3;switch(this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${n} \u79d2`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t)}}}(t,e)}
