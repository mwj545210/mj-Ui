/*
 * 常用功能
 */
var oftenFunc = {
  //获取对象指定key的值
  get: function (obj, path) {
    var res;
    var reg1 = /\d+/;
    var reg2 = /([^.\[\]]+)|(?=\[)(\d+)(?=\])/g;
    path = path || '';
    path.split('.').every(function (item) {
      while (res = reg2.exec(item)) {
        if (obj === null || obj === undefined) {
          return obj = undefined, false;
        } else {
          obj = obj[res[1]];
        }
      }
      return true;
    });
    return obj;
  },
  //设置对象指定key的值(对象,属性名or属性路径,值)
  set: function (obj, path, value) {
    var res, prev, temp;
    var reg1 = /\d+/;
    var reg2 = /([^.\[\]]+)|(?=\[)(\d+)(?=\])/g;
    path = path || '';
    path.split('.').forEach(function (item) {
      while (res = reg2.exec(item)) {
        if (temp) {
          //匹配到的值为数字则是数组，否则为对象
          if (reg1.test(res[1]) && oftenFunc.isType(temp[prev]) !== 'array') {
            temp[prev] = [];
          } else if (oftenFunc.isType(temp[prev]) !== 'object') {
            temp[prev] = {};
          }
          temp = temp[prev];
        } else {
          temp = obj;
        }
        prev = res[1];
      }
    });
    temp[prev] = value;
    return obj;
  },
  //循环指定次数
  loop: function (count, callback) {
    for (var index = 0; index < count; index++) {
      callback && callback(index);
    }
  },
  //对象克隆(克隆者,是否使用深克隆模式)
  clone: function (obj, hasDepth) {
    var newobj;
    switch (oftenFunc.isType(obj)) {
      case 'array':
        newobj = []; break;
      case 'object':
        newobj = {};
        break;
      default:
        return obj;
    }
    Object.keys(obj).forEach(function (name) {
      if (hasDepth) {
        newobj[name] = oftenFunc.clone(obj[name], hasDepth);
      } else {
        newobj[name] = obj[name];
      }
    });
    return newobj;
  },
  //判断指定对象的数据类型
  isType: function (obj, name) {
    var toString = Object.prototype.toString.call(obj).toLowerCase();
    if (name) {
      return toString === '[object ' + name.toLowerCase() + ']';
    } else {
      return /^\[object\s(\w+)\]$/.exec(toString)[1];
    }
  },
  //数组去重(数组对象,比对指定路径的值)
  unique: function (list, path) {
    var value;
    var newList = [];
    var tempList = [];
    list.forEach(function (item, index) {
      value = oftenFunc.get(item, path);
      if (tempList.indexOf(value) === -1) {
        newList.push(item);
      }
      tempList.push(value);
    });
    return newList;
  },
  //对象继承(继承者,被继承者,是否继承所有属性,是否使用深继承模式)
  extend: function (heres, byheres, hasAll, hasDepth) {
    Object.keys(byheres).forEach(function (name) {
      if (!hasAll && heres[name] !== undefined) {
        return;
      }
      if (hasDepth) {
        switch (oftenFunc.isType(byheres[name])) {
          case 'array':
            if (oftenFunc.isType(heres[name]) !== 'array') {
              heres[name] = [];
            }
            oftenFunc.extend(heres[name], byheres[name], hasAll, hasDepth);
            break;
          case 'object':
            if (oftenFunc.isType(heres[name]) !== 'object') {
              heres[name] = {};
            }
            oftenFunc.extend(heres[name], byheres[name], hasAll, hasDepth);
            break;
          default:
            heres[name] = byheres[name];
            break;
        }
      } else {
        heres[name] = byheres[name];
      }
    });
    return heres;
  },
  //数组检索(数组对象,比对的值,比对指定路径的值)
  indexOf: function (list, value, path) {
    var index = -1;
    list.forEach(function (item, i) {
      if (value === oftenFunc.get(item, path)) {
        index = i;
      }
    });
    return index;
  },
  //获取url参数
  getParams: function (name) {
    var res, reg = new RegExp('[?&]' + name + '=([^&=]+)', 'i');
    if (res = reg.exec(location.search)) {
      return RegExp.$1;
    }
    return '';
  },
  //json对象转url参数
  toUrlParams: function (obj) {
    var search = '';
    Object.keys(obj).forEach(function (name, index) {
      if (obj[name] !== undefined) {
        search += index ? '&' : '';
        search += name + '=' + obj[name];
      }
    });
    return search;
  },
  //获取url参数对象
  getParamsToJson: function () {
    var url = arguments[0] || location.href;
    var index = url.indexOf('?');
    var jsons = {};
    if (index > -1) {
      var search = url.substr(index + 1, url.length).split('&');
      search.forEach(function (item) {
        var strs = item.split('=');
        jsons[strs[0] || ''] = decodeURI(strs[1] || '');
      });
    }
    return jsons;
  },
  //操作cookie
  cookie: {
    //获取cookie
    get: function (key) {
      var arr, reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
      if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
      }
    },
    //设置cookie，exp以小时为单位
    set: function (key, value, exp) {
      var date = new Date();
      exp = (exp || 24) * 60 * 60 * 1000;
      date.setTime(date.getTime() + exp);
      document.cookie = key + '=' + escape(value) + ';expires=' + date.toGMTString();
    },
    //删除cookie
    del: function (key) {
      var exp = new Date();
      var cval = this.getCookie(key);
      exp.setTime(exp.getTime() - 1);
      if (cval != null) {
        document.cookie = key + '=' + cval + ';expires=' + exp.toGMTString();
      }
    },
  },
  //操作localStorage
  localStorage: {
    //获取localStorage值，exp以小时为单位
    getItem: function (key, exp) {
      var data = JSON.parse(localStorage.getItem(key));
      if (data && data.startdate) {
        exp = (exp && exp * 60 * 60 * 1000) || Infinity;
        if (Date.now() - data.startdate <= exp) {
          return data.context;
        }
      }
      return null;
    },
    //设置localStorage值
    setItem: function (key, value) {
      localStorage.setItem(key, JSON.stringify({ context: value, startdate: Date.now() }));
    },
  },
};
/*
 * 事件推送
 */
var EventPush = {
  //自定义数据key名
  keyName: '__custom_key_name_' + Date.now() + '__',
  //注册
  add: function (obj) {
    var path = EventPush.keyName + '.event';
    if (oftenFunc.get(obj, path) === undefined) {
      obj.on = EventPush.addEvent.bind(obj);
      obj.off = EventPush.removeEvent.bind(obj);
      obj.dispatch = EventPush.dispatchEvent.bind(obj);
      oftenFunc.set(obj, path, {});
    }
  },
  //添加事件
  addEvent: function (name, callback) {
    var that = this;
    var data = that[EventPush.keyName].event;
    if (oftenFunc.isType(name, 'string') &&
      oftenFunc.isType(callback, 'function')) {
      name = name.toLowerCase();
      data[name] = data[name] || [];
      data[name].push(callback);
      //通知注册目标用户进行了添加事件操作
      that.dispatch('$on', {
        name: name,
        callback: callback
      });
    }
    return that;
  },
  //删除事件
  removeEvent: function (name, callback) {
    var that = this;
    var data = that[EventPush.keyName].event;
    if (oftenFunc.isType(name, 'string')) {
      name = name.toLowerCase();
      //如果没有传入回调函数，则删除所有事件
      if (callback === undefined) {
        data[name] = [];
      } else {
        var index = data[name].indexOf(callback);
        if (index > -1) {
          data[name].splice(index, 1);
        }
      }
    }
    return that;
  },
  //派送事件
  dispatchEvent: function (name, letter, hasHump) {
    var that = this;
    var data = that[EventPush.keyName].event;
    if (oftenFunc.isType(name, 'string')) {
      name = name.toLowerCase();
      data[name] && data[name].forEach(function (item) {
        item.call(that, letter);
      });
      //派送驼峰写法的事件
      if (hasHump) {
        var humpName = 'on' + name[0].toUpperCase() + name.substring(1);
        if (oftenFunc.isType(that[humpName], 'function')) {
          that[humpName].call(that, letter);
        }
      }
    }
    return that;
  },
};
EventPush.add(EventPush);
/*
 * 缓动动画类
 */
function Animated(from, to) {
  var that = this;
  //注册监听器
  EventPush.add(that);
  //开始值列表
  that.fromList = {};
  //结束值列表
  that.toList = {};
  //开始时间
  that.startTime = 0;
  //持续时间
  that.duration = 1000;
  //状态(pause为暂停中,run为播放中,idle为闲置)
  that.state = 'idle';
  //记录暂停时间戳
  that.pauseTimes = null;
  //数据更新定时器
  that.updateTimer = null;
  //绑定上下文
  that.start = that.start.bind(that);
  //初始化
  that.init(from, to);
};
//初始化
Animated.prototype.init = function (from, to) {
  var that = this;
  that.state = 'idle';
  that.fromList = from || {};
  that.toList = to || {};
  that.startTime = Date.now();
};
//动画更新
Animated.prototype.start = function () {
  var that = this;
  var res = {};
  var currTime = Date.now() - that.startTime;
  if (that.state !== 'pause') {
    that.state = 'run';
    that.updateTimer = requestAnimationFrame(that.start);
    if (currTime < that.duration) {
      for (var name in that.fromList) {
        if (that.fromList.hasOwnProperty(name)) {
          res[name] = that.easing(currTime, that.fromList[name], that.toList[name] - that.fromList[name], that.duration);
        }
      }
      that.dispatch('update', res, true);
    } else {
      that.dispatch('update', that.toList, true);
      that.dispatch('complete', null, true);
      that.stopTimer();
    }
  }
};
//暂停/继续
Animated.prototype.pause = function () {
  var that = this;
  if (that.state === 'run') {
    that.stopTimer();
    that.state = 'pause';
    that.pauseTimes = Date.now();
  } else if (that.state === 'pause') {
    that.state = 'run';
    that.startTime += Date.now() - that.pauseTimes;
    that.start();
  }
};
//停止计时器
Animated.prototype.stopTimer = function () {
  var that = this;
  that.state = 'idle';
  that.dispatch('stop', null, true);
  cancelAnimationFrame(that.updateTimer);
};
//动画算法
Animated.prototype.easing = function (t, b, c, d) { return c * ((t = t / d - 1) * t * t + 1) + b; };
/*
 * 弹出层
 */
var popupLayxs = function (width, height, option) {
  var defaultOption = {
    area: {
      'width': width,
      'height': height,
      'minWidth': '',
      'minHeight': '',
      'maxWidth': '',
      'maxHeight': ''
    },
    isScroll: false,
    tapMaskClose: true,
    isReadyBeforeShow: false,
    boxback: 'transparent'
  };
  option = option || {};
  oftenFunc.extend(option, defaultOption, true, true);
  return layxs.open(option).show();
};
/*
 * 防呆确定弹框
 */
function foolProofConfirm(data) {
  var openbox;
  var wrapper = document.createElement('div');
  wrapper.innerHTML = '\
                <div class="confirm-layer-wrap">\
                    <div class="close-btn"><span class="icon icon-gm-delete"></span></div>\
                    <div class="body-wrap">'+ data.text + '</div>\
                    <div class="footer-wrap"></div>\
                </div>';
  var elementCache = {};
  elementCache['close-btn'] = wrapper.querySelector('.close-btn');
  elementCache['body-wrap'] = wrapper.querySelector('.body-wrap');
  elementCache['footer-wrap'] = wrapper.querySelector('.footer-wrap');

  var html = '';
  data.button.forEach(function (item, index) {
    html += '<div class="btn-box middle" data-index="' + index + '">' + item + '</div>';
  });
  elementCache['footer-wrap'].innerHTML = html;

  if (data.closebtn === undefined) {
    data.closebtn = 1;
  }
  if (!data.closebtn) {
    elementCache['close-btn'].parentNode.removeChild(elementCache['close-btn']);
  }

  var option = {
    area: {
      'width': 400
    },
    content: wrapper,
    isScroll: false,
    tapMaskClose: false
  };
  data.option = data.option || {};
  oftenFunc.extend(data.option, option);

  var btnEvent = data.btnEvent;
  elementCache['close-btn'].addEventListener('click', function () {
    data.closeEvent && data.closeEvent.call(openbox);
    openbox.close();
  });
  [].forEach.call(elementCache['footer-wrap'].querySelectorAll('.btn-box'), function (item) {
    item.addEventListener('click', function () {
      var that = this;
      var index = that.getAttribute('data-index');
      if (btnEvent && btnEvent[index]) {
        btnEvent[index].call(openbox);
      } else {
        openbox.close();
      }
    });
  });
  return openbox = layxs.open(data.option).show();
};
