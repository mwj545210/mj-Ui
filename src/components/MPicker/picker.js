var draggable = (function () {
  var isDragging = false;
  var supportTouch = 'ontouchstart' in window;

  function draggable(element, options) {
    var moveFn = function (event) {
      if (options.drag) {
        options.drag(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
      }
    }

    var endFn = function (event) {
      if (!supportTouch) {
        document.removeEventListener('mousemove', moveFn);
        document.removeEventListener('mouseup', endFn);
      }
      document.onselectstart = null;
      document.ondragstart = null;

      isDragging = false;

      if (options.end) {
        options.end(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
      }
    }

    element.addEventListener(supportTouch ? 'touchstart' : 'mousedown', function (event) {
      if (isDragging) return;
      document.onselectstart = function () {
        return false;
      };
      document.ondragstart = function () {
        return false;
      };

      if (!supportTouch) {
        document.addEventListener('mousemove', moveFn);
        document.addEventListener('mouseup', endFn);
      }

      isDragging = true;

      if (options.start) {
        event.preventDefault();
        options.start(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
      }
    });

    if (supportTouch) {
      element.addEventListener('touchmove', moveFn);
      element.addEventListener('touchend', endFn);
      element.addEventListener('touchcancel', endFn);
    }
  }

  return draggable;
})();


var translateUtil = (function () {
  var docStyle = document.documentElement.style;
  var engine;
  var translate3d = false;

  if (window.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
    engine = 'presto';
  } else if ('MozAppearance' in docStyle) {
    engine = 'gecko';
  } else if ('WebkitAppearance' in docStyle) {
    engine = 'webkit';
  } else if (typeof navigator.cpuClass === 'string') {
    engine = 'trident';
  }

  var cssPrefix = {
    trident: '-ms-',
    gecko: '-moz-',
    webkit: '-webkit-',
    presto: '-o-'
  }[engine];

  var vendorPrefix = {
    trident: 'ms',
    gecko: 'Moz',
    webkit: 'Webkit',
    presto: 'O'
  }[engine];

  var helpElem = document.createElement('div');
  var perspectiveProperty = vendorPrefix + 'Perspective';
  var transformProperty = vendorPrefix + 'Transform';
  var transformStyleName = cssPrefix + 'transform';
  var transitionProperty = vendorPrefix + 'Transition';
  var transitionStyleName = cssPrefix + 'transition';
  var transitionEndProperty = vendorPrefix.toLowerCase() + 'TransitionEnd';

  if (helpElem.style[perspectiveProperty] !== undefined) {
    translate3d = true;
  }

  function getTranslate(element) {
    var result = {left: 0, top: 0};
    if (element === null || element.style === null) return false;

    var transform = element.style[transformProperty];
    var matches = /translate\(\s*(-?\d+(\.\d+?)?)px,\s*(-?\d+(\.\d+?)?)px\)\s*translateZ\(0px\)/ig.exec(transform);
    if (matches) {
      result.left = +matches[1];
      result.top = +matches[3];
    }

    return result;
  }


  function translateElement(element, x, y) {
    if (x === null && y === null) return;
    if (element === null || element === undefined || element.style === null) return;
    if (!element.style[transformProperty] && x === 0 && y === 0) return;

    if (x === null || y === null) {
      var translate = getTranslate(element);
      if (x === null) {
        x = translate.left;
      }

      if (y === null) {
        y = translate.top
      }
    }

    cancelTranslateElement(element);
    if (translate3d) {
      element.style[transformProperty] += ` translate(${x ? (x + 'px') : '0px'}, ${y ? (y + 'px') : '0px'}) translateZ(0px)`;
    } else {
      element.style[transformProperty] += ` translate(${x ? (x + 'px') : '0px'}, ${y ? (y + 'px') : '0px'})`;
    }
    if (!element.id) {
      element.style[transformProperty] = '';
    }
  }

  function cancelTranslateElement(element) {
    if (element === null || element.style === null) return;
    var transformValue = element.style[transformProperty];

    if (transformValue) {
      transformValue = transformValue.replace(/translate\(\s*(-?\d+(\.\d+?)?)px,\s*(-?\d+(\.\d+?)?)px\)\s*translateZ\(0px\)/g, '');
      element.style[transformProperty] = transformValue;
    }
  }

  return {
    transformProperty: transformProperty,
    transformStyleName: transformStyleName,
    transitionProperty: transitionProperty,
    transitionStyleName: transitionStyleName,
    transitionEndProperty: transitionEndProperty,
    getElementTranslate: getTranslate,
    translateElement: translateElement,
    cancelTranslateElement: cancelTranslateElement
  };
})();


module.exports = {
  draggable: draggable,
  tranUtil: translateUtil
}
