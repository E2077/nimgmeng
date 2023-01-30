/*
微信打开：https://h5cloud.cqliving.com/act/2022xsm/index.html
先下载软件绑定 https://ningmeng6.lanzoue.com/idclk0kja9va
不然不到账
抓域名hdht.shakekeji.com/index/getOpenId
查看返回的obj: XXXXXXXXXXXX
变量
export cqdthd='XXXXXXX'
多号@或换行
corn 0 0 * * * cqdt.js
============================================
圈X
 重写
 [MITM]
 hostname = hdht.shakekeji.com

 [rewrite_local]
https://hdht.shakekeji.com/index/getOpenId url script-request-url http://nm6.xyz:20080/ningmeng/ningmeng/raw/branch/main/cqdt.js
[task_local]
0 0 * * * http://nm6.xyz:20080/ningmeng/ningmeng/raw/branch/main/cqdt.js, tag=重庆答题抽奖, enabled=true
*/
          
const $ = new Env('重庆答题抽奖');
const {log} = console;

let ans =JSON.parse('{"5":"no=5&da=1","42":"no=42&da=2","14":"no=14&da=4","37":"no=37&da=1","2":"no=2&da=1","64":"no=64&da=4","22":"no=22&da=2","27":"no=27&da=3","59":"no=59&da=2","39":"no=39&da=3","61":"no=61&da=5","50":"no=50&da=5","33":"no=33&da=1","4":"no=4&da=2","20":"no=20&da=2","19":"no=19&da=2","48":"no=48&da=2","45":"no=45&da=2","35":"no=35&da=1","55":"no=55&da=1","26":"no=26&da=1","53":"no=53&da=4","65":"no=65&da=4","8":"no=8&da=2","32":"no=32&da=3","7":"no=7&da=1","46":"no=46&da=2","17":"no=17&da=3","3":"no=3&da=2","18":"no=18&da=6","30":"no=30&da=1","49":"no=49&da=3","23":"no=23&da=4","63":"no=63&da=5","38":"no=38&da=4","15":"no=15&da=2","29":"no=29&da=4","57":"no=57&da=1","44":"no=44&da=1","47":"no=47&da=2","41":"no=41&da=1","28":"no=28&da=3","21":"no=21&da=1","54":"no=54&da=4","9":"no=9&da=1","52":"no=52&da=4","34":"no=34&da=2","40":"no=40&da=2","10":"no=10&da=2","25":"no=25&da=3","13":"no=13&da=4","24":"no=24&da=2","12":"no=12&da=2","56":"no=56&da=1","58":"no=58&da=3","11":"no=11&da=3","16":"no=16&da=2","43":"no=43&da=1","60":"no=60&da=1","51":"no=51&da=3","31":"no=31&da=4","36":"no=36&da=4","62":"no=62&da=5"}')
const Notify = 1; //0为关闭通知，1为打开通知,默认为1
const debug = 0; //0为关闭调试，1为打开调试,默认为0
//////////////////////

let cqdthd = ($.isNode() ? process.env.cqdthd : $.getdata("cqdthd")) || "";
let cqdthdArr = [];
let msg = '';
let accountTips = '';
var timestamp = Math.round(new Date().getTime()/1000).toString();
!(async () => {
    if (typeof $request !== "undefined") {
        await GetRewrite();
    } else {
        if (!(await Envs()))
            return;
        else {

            log(`\n\n=============================================    \n脚本执行 - 北京时间(UTC+8)：${new Date(
                new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 +
                8 * 60 * 60 * 1000).toLocaleString()} \n=============================================\n`);


            log(`\n============ 微信公众号：柠檬玩机交流 ============`)
            log(`\n=================== 共找到 ${cqdthdArr.length} 个账号 ===================`)
            if (debug) {
                log(`【debug】 这是你的全部账号数组:\n ${cqdthdArr}`);
            }

            for (let index = 0; index < cqdthdArr.length; index++) {
                let num = index + 1
                log(`\n========= 开始【第 ${num} 个账号】=========\n`)
                accountTips = `账号【${num}】`;
                var temp = cqdthdArr[index];
                //判断下格式
                if (temp.indexOf('&') >= 0) {
                    var info = temp.split('&');
                    var theRequest = new Object();
                    for (var i = 0; i < info.length; i++) {
                        theRequest[info[i].split("=")[0]] = unescape(info[i].split("=")[1]);
                    }
                    cqdthd = theRequest.data;
                } else {
                    cqdthd = cqdthdArr[index];
                }
await getKey()
if(csnum >= 0 && csnum !== -1){
await doStar(47)

await doStar(48)

await doStar(49)

}else 
log('没有游戏次数了')
await getKey()
if(csnum >= 0 && csnum !== -1){
await doStar(47)

await doStar(48)

await doStar(49)

}else 
log('没有游戏次数了')
await getKey()
if(csnum >= 0 && csnum !== -1){
await doStar(47)

await doStar(48)

await doStar(49)

}else 
log('没有游戏次数了')



            }
            await SendMsg(msg);
        }
    }
})()
    .catch((e) => log(e))
    .finally(() => $.done())


async function getKey() {

var options = {

  url: `https://hdht.shakekeji.com/index/getKey`,
  headers: {
'Connection': 'Keep-Alive',
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
'Accept': 'application/json, text/javascript, */*; q=0.01',
'Accept-Language': 'zh-CN,en-US;q=0.8',
'Host': 'hdht.shakekeji.com',
'User-Agent': 'Mozilla/5.0 (Linux; Android 5.1.1; SM-N9760 Build/LYZ28N; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.100 Mobile Safari/537.36 MMWEBID/3873 MicroMessenger/8.0.2.1860(0x28000234) Process/tools WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm32',
'Origin': 'https://h5cloud.cqliving.com',
'X-Requested-With': 'com.tencent.mm',

  },
body:'userkey='+cqdthd
};
    if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
            return new Promise((resolve) => {
        $.post(options, async (error, response, data) =>{
            
            try {
                 let result= JSON.parse(data);
                if (debug) {
                    log(`\n\n【debug】===============这是 返回result==============`);
                    log(data)
                }
                if (result.success == true) {
                    log(result.message)
                    csnum = result.num
                    log('次数: '+csnum)
                    obj = result.obj
                    log('obj: '+obj)

                
                } else 
                    log(result.message)
                    
            } catch (e) {
                log(`异常，原因：${e}，返回：${data}`)
            } finally {
                resolve();
            }
        })
    })
}
async function doStar(no) {

var options = {

  url: `https://hdht.shakekeji.com/index/doStar`,
  headers: {
'Connection': 'Keep-Alive',
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
'Accept': 'application/json, text/javascript, */*; q=0.01',
'Accept-Language': 'zh-CN,en-US;q=0.8',
'Host': 'hdht.shakekeji.com',
'User-Agent': 'Mozilla/5.0 (Linux; Android 5.1.1; SM-N9760 Build/LYZ28N; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.100 Mobile Safari/537.36 MMWEBID/3873 MicroMessenger/8.0.2.1860(0x28000234) Process/tools WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm32',
'Origin': 'https://h5cloud.cqliving.com',
'X-Requested-With': 'com.tencent.mm',

  },
body:'userkey='+cqdthd+'&pagekey='+obj+'&no='+no
};
    if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
            return new Promise((resolve) => {
        $.post(options, async (error, response, data) =>{

            try {
                 let result= JSON.parse(data);
                if (debug) {
                    log(`\n\n【debug】===============这是 返回result==============`);
                    log(data)
                }
                if (result.success == true) {
                    log(result.message)

                    log('topic: '+result.obj.topic)
                    orderIdx = result.obj.orderIdx
                    log('orderIdx: '+orderIdx)
                    if (ans.hasOwnProperty(orderIdx)) {
                     answerType = ans[orderIdx]
                     console.log('answerType: '+answerType)
                     await subDT()
 }

                
                } else 
                    log(result.message)
                    
            } catch (e) {
                log(`异常，原因：${e}，返回：${data}`)
            } finally {
                resolve();
            }
        })
    })
}
async function subDT() {

var options = {

  url: `https://hdht.shakekeji.com/index/subDT`,
  headers: {
'Connection': 'Keep-Alive',
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
'Accept': 'application/json, text/javascript, */*; q=0.01',
'Accept-Language': 'zh-CN,en-US;q=0.8',
'Host': 'hdht.shakekeji.com',
'User-Agent': 'Mozilla/5.0 (Linux; Android 5.1.1; SM-N9760 Build/LYZ28N; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.100 Mobile Safari/537.36 MMWEBID/3873 MicroMessenger/8.0.2.1860(0x28000234) Process/tools WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm32',
'Origin': 'https://h5cloud.cqliving.com',
'X-Requested-With': 'com.tencent.mm',

  },
body:'userkey='+cqdthd+'&pagekey='+obj+'&'+answerType
};
    if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
            return new Promise((resolve) => {
        $.post(options, async (error, response, data) =>{
            try {
                 let result= JSON.parse(data);
                if (debug) {
                    log(`\n\n【debug】===============这是 返回result==============`);
                    log(data)
                }
                if (result.success == true) {
                    log(result.message)
                    cjNum = result.cjNum
                    log(cjNum)
                    if(cjNum > 0){
                     await getCode()
}
                } else 
                    log(result.message)
                    
            } catch (e) {
                log(`异常，原因：${e}，返回：${data}`)
            } finally {
                resolve();
            }
        })
    })
}
async function getCode() {

var options = {

  url: `http://nm6.xyz/pic.php?userkey=`+cqdthd,
  headers: {

  },

};
    if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
            return new Promise((resolve) => {
        $.get(options, async (error, response, data) =>{
            try {
                // let result= JSON.parse(data);
                if (debug) {
                    log(`\n\n【debug】===============这是 返回result==============`);
                    log(data)
                }
              rescode = data
log(data)
await doCj(rescode)
            } catch (e) {
                log(`异常，原因：${e}，返回：${data}`)
            } finally {
                resolve();
            }
        })
    })
}

async function doCj(a) {

var options = {

  url: `https://hdht.shakekeji.com/index/doCj`,
  headers: {
'Connection': 'Keep-Alive',
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
'Accept': 'application/json, text/javascript, */*; q=0.01',
'Accept-Language': 'zh-CN,en-US;q=0.8',
'Host': 'hdht.shakekeji.com',
'User-Agent': 'Mozilla/5.0 (Linux; Android 5.1.1; SM-N9760 Build/LYZ28N; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.100 Mobile Safari/537.36 MMWEBID/3873 MicroMessenger/8.0.2.1860(0x28000234) Process/tools WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm32',
'Origin': 'https://h5cloud.cqliving.com',
'X-Requested-With': 'com.tencent.mm',

  },
body:'userkey='+cqdthd+'&pagekey='+obj+'&code='+a
};
    if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
            return new Promise((resolve) => {
        $.post(options, async (error, response, data) =>{

            try {
                 let result= JSON.parse(data);
                if (debug) {
                    log(`\n\n【debug】===============这是 返回result==============`);
                    log(data)
                }
                if (result.success == true) {
                    log(result.message)
                    if(result.obj !== 0){
                    log('获得红包：'+result.obj)
                    msg += '获得红包：'+result.obj
                    }else
                    log('未中奖：'+result.obj)

                } else 
                    log(result.message)
                    
            } catch (e) {
                log(`异常，原因：${e}，返回：${data}`)
            } finally {
                resolve();
            }
        })
    })
}



// ============================================重写============================================ \\
async function GetRewrite() {
    if ($request.url.indexOf("/index/getOpenId") > -1) {
        const ck1 = $response.body;
        ck = $response.body.obj
        if (cqdthd) {
            if (cqdthd.indexOf(ck) == -1) {
                cqdthd = cqdthd + "@" + ck;
                $.setdata(cqdthd, "cqdthd");
                let List = cqdthd.split("@");
                $.msg(`【${$.name}】` + ` 获取第${List.length}个 ck 成功: ${ck} ,不用请自行关闭重写!`);
            }
        } else {
            $.setdata(ck, "cqdthd");
            $.msg(`【${$.name}】` + ` 获取第1个 ck 成功: ${ck} ,不用请自行关闭重写!`);
        }
    }
}
function md5(a){function b(a,b){return a<<b|a>>>32-b}function c(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f}function d(a,b,c){return a&b|~a&c}function e(a,b,c){return a&c|b&~c}function f(a,b,c){return a^b^c}function g(a,b,c){return b^(a|~c)}function h(a,e,f,g,h,i,j){return a=c(a,c(c(d(e,f,g),h),j)),c(b(a,i),e)}function i(a,d,f,g,h,i,j){return a=c(a,c(c(e(d,f,g),h),j)),c(b(a,i),d)}function j(a,d,e,g,h,i,j){return a=c(a,c(c(f(d,e,g),h),j)),c(b(a,i),d)}function k(a,d,e,f,h,i,j){return a=c(a,c(c(g(d,e,f),h),j)),c(b(a,i),d)}function l(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=new Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g}function m(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=a>>>8*c&255,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d}function n(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}var o,p,q,r,s,t,u,v,w,x=[],y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(a=n(a),x=l(a),t=1732584193,u=4023233417,v=2562383102,w=271733878,o=0;o<x.length;o+=16)p=t,q=u,r=v,s=w,t=h(t,u,v,w,x[o+0],y,3614090360),w=h(w,t,u,v,x[o+1],z,3905402710),v=h(v,w,t,u,x[o+2],A,606105819),u=h(u,v,w,t,x[o+3],B,3250441966),t=h(t,u,v,w,x[o+4],y,4118548399),w=h(w,t,u,v,x[o+5],z,1200080426),v=h(v,w,t,u,x[o+6],A,2821735955),u=h(u,v,w,t,x[o+7],B,4249261313),t=h(t,u,v,w,x[o+8],y,1770035416),w=h(w,t,u,v,x[o+9],z,2336552879),v=h(v,w,t,u,x[o+10],A,4294925233),u=h(u,v,w,t,x[o+11],B,2304563134),t=h(t,u,v,w,x[o+12],y,1804603682),w=h(w,t,u,v,x[o+13],z,4254626195),v=h(v,w,t,u,x[o+14],A,2792965006),u=h(u,v,w,t,x[o+15],B,1236535329),t=i(t,u,v,w,x[o+1],C,4129170786),w=i(w,t,u,v,x[o+6],D,3225465664),v=i(v,w,t,u,x[o+11],E,643717713),u=i(u,v,w,t,x[o+0],F,3921069994),t=i(t,u,v,w,x[o+5],C,3593408605),w=i(w,t,u,v,x[o+10],D,38016083),v=i(v,w,t,u,x[o+15],E,3634488961),u=i(u,v,w,t,x[o+4],F,3889429448),t=i(t,u,v,w,x[o+9],C,568446438),w=i(w,t,u,v,x[o+14],D,3275163606),v=i(v,w,t,u,x[o+3],E,4107603335),u=i(u,v,w,t,x[o+8],F,1163531501),t=i(t,u,v,w,x[o+13],C,2850285829),w=i(w,t,u,v,x[o+2],D,4243563512),v=i(v,w,t,u,x[o+7],E,1735328473),u=i(u,v,w,t,x[o+12],F,2368359562),t=j(t,u,v,w,x[o+5],G,4294588738),w=j(w,t,u,v,x[o+8],H,2272392833),v=j(v,w,t,u,x[o+11],I,1839030562),u=j(u,v,w,t,x[o+14],J,4259657740),t=j(t,u,v,w,x[o+1],G,2763975236),w=j(w,t,u,v,x[o+4],H,1272893353),v=j(v,w,t,u,x[o+7],I,4139469664),u=j(u,v,w,t,x[o+10],J,3200236656),t=j(t,u,v,w,x[o+13],G,681279174),w=j(w,t,u,v,x[o+0],H,3936430074),v=j(v,w,t,u,x[o+3],I,3572445317),u=j(u,v,w,t,x[o+6],J,76029189),t=j(t,u,v,w,x[o+9],G,3654602809),w=j(w,t,u,v,x[o+12],H,3873151461),v=j(v,w,t,u,x[o+15],I,530742520),u=j(u,v,w,t,x[o+2],J,3299628645),t=k(t,u,v,w,x[o+0],K,4096336452),w=k(w,t,u,v,x[o+7],L,1126891415),v=k(v,w,t,u,x[o+14],M,2878612391),u=k(u,v,w,t,x[o+5],N,4237533241),t=k(t,u,v,w,x[o+12],K,1700485571),w=k(w,t,u,v,x[o+3],L,2399980690),v=k(v,w,t,u,x[o+10],M,4293915773),u=k(u,v,w,t,x[o+1],N,2240044497),t=k(t,u,v,w,x[o+8],K,1873313359),w=k(w,t,u,v,x[o+15],L,4264355552),v=k(v,w,t,u,x[o+6],M,2734768916),u=k(u,v,w,t,x[o+13],N,1309151649),t=k(t,u,v,w,x[o+4],K,4149444226),w=k(w,t,u,v,x[o+11],L,3174756917),v=k(v,w,t,u,x[o+2],M,718787259),u=k(u,v,w,t,x[o+9],N,3951481745),t=c(t,p),u=c(u,q),v=c(v,r),w=c(w,s);var O=m(t)+m(u)+m(v)+m(w);return O.toLowerCase()}
/**
 *
 * 示例:$.time('yyyy-MM-dd qq HH:mm:ss.S')
 *    :$.time('yyyyMMddHHmmssS')
 *    y:年 M:月 d:日 q:季 H:时 m:分 s:秒 S:毫秒
 *    其中y可选0-4位占位符、S可选0-1位占位符，其余可选0-2位占位符
 * @param {string} fmt 格式化参数
 * @param {number} 可选: 根据指定时间戳返回格式化日期
 *
 */

function time(fmt, ts = null) {
    const date = ts ? new Date(ts) : new Date();
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds(),
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        );
    for (let k in o)
        if (new RegExp('(' + k + ')').test(fmt))
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1
                    ? o[k]
                    : ('00' + o[k]).substr(('' + o[k]).length)
            );
    return fmt;
}


// ============================================变量检查============================================ \\
async function Envs() {
    if (cqdthd) {
        if (cqdthd.indexOf("@") != -1) {
            cqdthd.split("@").forEach((item) => {
                cqdthdArr.push(item);
            });
        } else if (cqdthd.indexOf("\n") != -1) {
            cqdthd.split("\n").forEach((item) => {
                cqdthdArr.push(item);
            });
        } else {
            cqdthdArr.push(cqdthd);
        }
    } else {
        log(`\n 【${$.name}】：未填写变量 cqdthd`)
        return;
    }
    return true;
}

// ============================================发送消息============================================ \\
/**
 * 添加消息
 * @param str
 * @param is_log
 */
function addNotifyStr(str, is_log = true) {
    if (is_log) {
        log(`${accountTips}${str}\n`)
    }
    msg += `${accountTips}${str}\n`
}

async function SendMsg(message) {
    if (!message)
        return;

    if (Notify > 0) {
        if ($.isNode()) {
            var notify = require('./sendNotify');
            await notify.sendNotify($.name, message);
        } else {
            $.msg(message);
        }
    } else {
        log(message);
    }
}




var Base64 = {
    base64: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (t) {
        if (!t) return !1;
        var a = "";
        var o, e, r;
        var f, u, s, i;
        var n = 0;
        do {
            o = t.charCodeAt(n++);
            e = t.charCodeAt(n++);
            r = t.charCodeAt(n++);
            f = o >> 2;
            u = (3 & o) << 4 | e >> 4;
            s = (15 & e) << 2 | r >> 6;
            i = 63 & r;
            if (isNaN(e)) s = i = 64;
            else if (isNaN(r)) i = 64;
            a += this.base64.charAt(f) + this.base64.charAt(u) + this.base64.charAt(s) + this.base64.charAt(i);
        } while (n < t.length);
        return a;
    }, decode: function (t) {
        if (!t) return !1;
        t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        var r = "";
        var s, n, i, o;
        var e = 0;
        do {
            s = this.base64.indexOf(t.charAt(e++));
            n = this.base64.indexOf(t.charAt(e++));
            i = this.base64.indexOf(t.charAt(e++));
            o = this.base64.indexOf(t.charAt(e++));
            r += String.fromCharCode(s << 2 | n >> 4);
            if (64 != i) r += String.fromCharCode((15 & n) << 4 | i >> 2);
            if (64 != o) r += String.fromCharCode((3 & i) << 6 | o);
        } while (e < t.length);
        return r;
    }
};

/**
 * 随机数生成
 */
function randomString(e) {
    e = e || 32;
    var t = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
        a = t.length,
        n = "";
    for (i = 0; i < e; i++)
        n += t.charAt(Math.floor(Math.random() * a));
    return n
}

/**
 * 随机整数生成
 */
function randomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

/**
 * 获取毫秒时间戳
 */
function timestampMs() {
    return new Date().getTime();
}

/**
 * 获取秒时间戳
 */
function timestampS() {
    return Date.parse(new Date()) / 1000;
}

/**
 * 获取随机诗词
 */


/**
 * 修改配置文件
 */
function modify() {

    fs.readFile('/ql/data/config/config.sh', 'utf8', function (err, dataStr) {
        if (err) {
            return log('读取文件失败！' + err)
        } else {
            var result = dataStr.replace(/regular/g, string);
            fs.writeFile('/ql/data/config/config.sh', result, 'utf8', function (err) {
                if (err) {
                    return log(err);
                }
            });
        }
    })
}


function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}