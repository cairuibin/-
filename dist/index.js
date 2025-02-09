'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;

  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function() {}),
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var IconFrame = function IconFrame(props) {
  var w = props.w,
    h = props.h;
  return /*#__PURE__*/ React__default['default'].createElement(
    'svg',
    {
      width: w,
      height: h,
      viewBox: '0 0 19 19',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React__default['default'].createElement('path', {
      d:
        'M17.1336 9.31304C16.5549 7.76829 15.5326 6.4487 14.1815 5.49616C12.7966 4.52111 11.1685 4.00317 9.46834 4.00317C7.76819 4.00317 6.14011 4.51885 4.7552 5.49616C3.40183 6.45095 2.38174 7.77052 1.80302 9.31304L1.73096 9.50219L1.80302 9.69134C2.38174 11.2361 3.40409 12.5557 4.7552 13.5082C6.14009 14.4833 7.76819 15.0012 9.46834 15.0012C11.1685 15.0012 12.7966 14.4855 14.1815 13.5082C15.5348 12.5534 16.5549 11.2339 17.1336 9.69134L17.2057 9.50219L17.1336 9.31304ZM9.46834 13.9226C6.59047 13.9226 3.97381 12.1549 2.88842 9.50444C3.97155 6.85176 6.59047 5.0863 9.46834 5.0863C12.3462 5.0863 14.9629 6.85399 16.0483 9.50444C14.9629 12.1549 12.3439 13.9226 9.46834 13.9226Z',
      fill: '#333333',
    }),
    /*#__PURE__*/ React__default['default'].createElement('path', {
      d:
        'M9.46825 6.64233C7.89194 6.64233 6.6084 7.92589 6.6084 9.50219C6.6084 11.0785 7.89195 12.362 9.46825 12.362C11.0445 12.362 12.3281 11.0785 12.3281 9.50219C12.3281 7.92589 11.0445 6.64233 9.46825 6.64233ZM9.46825 11.2812C8.48645 11.2812 7.68928 10.484 7.68928 9.50219C7.68928 8.52036 8.48643 7.72322 9.46825 7.72322C10.4501 7.72322 11.2472 8.52036 11.2472 9.50219C11.2472 10.484 10.4478 11.2812 9.46825 11.2812Z',
      fill: '#F04E1B',
    }),
  );
};
var Icondesw1121 = function Icondesw1121(props) {
  var w = props.w,
    h = props.h;
  return /*#__PURE__*/ React__default['default'].createElement(
    'svg',
    {
      width: w,
      height: h,
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React__default['default'].createElement('path', {
      d:
        'M13.8264 7.11172H13.8471L13.8621 7.11048L13.8709 7.11026C13.8826 7.11016 13.9024 7.11049 13.9274 7.11275C13.9803 7.11752 14.0406 7.12948 14.0933 7.15251C14.1429 7.17416 14.1768 7.20124 14.2006 7.23628C14.2231 7.2695 14.26 7.34435 14.2604 7.50226L14.2603 7.50695C14.2601 7.51361 14.2596 7.52638 14.2585 7.54573C14.2563 7.58447 14.2516 7.64938 14.2416 7.74426C14.2216 7.93414 14.1804 8.24287 14.096 8.70056C13.9273 9.61577 13.5867 11.1212 12.9004 13.4556L12.898 13.4631C12.8953 13.4713 12.8911 13.484 12.8855 13.5007C12.8743 13.534 12.8573 13.5827 12.8352 13.6416C12.7907 13.7607 12.7277 13.9154 12.6519 14.0667C12.5737 14.2227 12.4936 14.3513 12.4208 14.4337C12.401 14.4562 12.3857 14.4708 12.3752 14.4799H6.83978C6.72364 14.4799 6.45866 14.4329 6.23624 14.3155C6.01274 14.1976 5.95801 14.0841 5.95801 13.9894V6.85331C6.03097 6.79312 6.12089 6.71667 6.22315 6.62518C6.49589 6.38117 6.85983 6.02713 7.22486 5.58599C7.93177 4.7317 8.69413 3.48866 8.72058 2.04862C8.72075 2.04785 8.72092 2.04709 8.72109 2.04634C8.72996 2.00616 8.73453 1.96908 8.73723 1.94281C8.74053 1.91072 8.74351 1.8654 8.74569 1.8324C8.74649 1.82028 8.74717 1.80982 8.74773 1.80228C8.75402 1.71686 8.76315 1.66343 8.77802 1.62491C8.78887 1.59678 8.79885 1.58552 8.81697 1.57424C8.83979 1.56003 8.90996 1.52618 9.0729 1.52095C9.07618 1.52179 9.07979 1.52276 9.08369 1.52385C9.11775 1.53337 9.17337 1.55236 9.24073 1.58795C9.37199 1.65728 9.55872 1.79502 9.7213 2.0733C10.0501 2.63607 10.3326 3.87321 9.62647 6.48104L9.45571 7.11172H10.1091H13.8264ZM12.3571 14.4935C12.3571 14.4934 12.3579 14.493 12.3593 14.4922C12.3579 14.4931 12.3571 14.4935 12.3571 14.4935Z',
      stroke: '#333333',
    }),
    /*#__PURE__*/ React__default['default'].createElement('path', {
      d:
        'M3.92818 7.11402C3.9309 7.11421 3.93648 7.11472 3.94393 7.11587C3.96339 7.1189 3.98155 7.12421 3.99379 7.13011C3.99581 7.13867 3.99815 7.15394 3.99815 7.17826V14.4798H2.19876L2.19848 14.4754L1.7437 7.11402H3.92818ZM3.99088 7.12121C3.99092 7.12117 3.99127 7.12181 3.99179 7.12323C3.9911 7.12196 3.99084 7.12125 3.99088 7.12121Z',
      stroke: '#F04E1B',
    }),
  );
};
var Iconqwdwdq = function Iconqwdwdq(props) {
  var w = props.w,
    h = props.h;
  return /*#__PURE__*/ React__default['default'].createElement(
    'svg',
    {
      width: w,
      height: h,
      viewBox: '0 0 29 29',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React__default['default'].createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M0.00606156 8.85597L0 20.6397L0.833465 21.4731V8.02554L0.00606156 8.85597ZM20.2729 12.6808L7.91337 0.942604L7.3648 1.51239L7.37086 28.0196L8.20432 28.8531V17.0088L20.3759 28.8015L21.1124 28.0408L8.20432 15.5388V14.1386L21.8792 27.3043L22.5823 26.577L8.20432 12.6778V11.2351L23.3552 25.8283L24.0644 25.0949L8.20432 9.76824V8.37105L24.8069 24.3705L25.5525 23.6492L8.20432 6.90718V5.4221L26.3314 22.8491L27.0346 22.1217L8.20432 3.98248V2.38223L27.8711 21.3276L28.4287 20.7669L28.4227 8.96205L27.6528 8.21042L27.6983 19.8001L26.9255 19.1061V7.49515L26.189 6.75564L26.2193 18.4151L25.4919 17.6665L25.507 6.07069L24.7494 5.32208L24.7403 16.9876L24.0129 16.239L24.025 4.58257L23.2764 3.84306L23.2643 15.5601L22.5369 14.8569L22.549 3.12477L21.7155 2.2913L21.7216 14.1023L21.0579 13.4264L21.0609 1.61847L20.2638 0.833496L20.2729 12.6808ZM5.84335 3.01869L5.84031 26.4891L6.67378 27.3225V2.22159L5.84335 3.01869ZM4.36735 4.49771L4.36432 25.01L5.19779 25.8435L5.19476 3.68243L4.36735 4.49771ZM2.88227 5.9737V23.525L3.71574 24.3584L3.70664 5.16145L2.88227 5.9737ZM1.40022 7.44666L1.40628 22.0429L2.23672 22.8764V6.62835L1.40022 7.44666Z',
      fill: '#E71B18',
    }),
  );
};
var Iconweeeeeee = function Iconweeeeeee(props) {
  var w = props.w,
    h = props.h;
  return /*#__PURE__*/ React__default['default'].createElement(
    'svg',
    {
      width: w,
      height: h,
      viewBox: '0 0 16 15',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React__default['default'].createElement('path', {
      d:
        'M13.2743 0.967742H10.9305V0.483871C10.9305 0.355541 10.8812 0.232466 10.7932 0.141722C10.7053 0.0509791 10.5861 0 10.4618 0C10.3375 0 10.2182 0.0509791 10.1303 0.141722C10.0424 0.232466 9.99304 0.355541 9.99304 0.483871V0.967742H5.30554V0.483871C5.30554 0.355541 5.25616 0.232466 5.16825 0.141722C5.08034 0.0509791 4.96111 0 4.83679 0C4.71247 0 4.59324 0.0509791 4.50534 0.141722C4.41743 0.232466 4.36804 0.355541 4.36804 0.483871V0.967742H2.02429C1.77806 0.967742 1.53425 1.0178 1.30676 1.11507C1.07927 1.21234 0.872576 1.35491 0.698467 1.53463C0.524357 1.71436 0.386245 1.92772 0.292018 2.16255C0.19779 2.39737 0.149292 2.64905 0.149292 2.90323V13.0645C0.149292 13.5778 0.346836 14.0701 0.698467 14.4331C1.0501 14.7961 1.52701 15 2.02429 15H13.2743C13.7716 15 14.2485 14.7961 14.6001 14.4331C14.9517 14.0701 15.1493 13.5778 15.1493 13.0645V2.90323C15.1493 2.64905 15.1008 2.39737 15.0066 2.16255C14.9123 1.92772 14.7742 1.71436 14.6001 1.53463C14.426 1.35491 14.2193 1.21234 13.9918 1.11507C13.7643 1.0178 13.5205 0.967742 13.2743 0.967742ZM1.08679 2.90323C1.08679 2.64656 1.18556 2.40042 1.36138 2.21893C1.53719 2.03744 1.77565 1.93548 2.02429 1.93548H4.36804V2.41935C4.36804 2.54769 4.41743 2.67076 4.50534 2.7615C4.59324 2.85225 4.71247 2.90323 4.83679 2.90323C4.96111 2.90323 5.08034 2.85225 5.16825 2.7615C5.25616 2.67076 5.30554 2.54769 5.30554 2.41935V1.93548H9.99304V2.41935C9.99304 2.54769 10.0424 2.67076 10.1303 2.7615C10.2182 2.85225 10.3375 2.90323 10.4618 2.90323C10.5861 2.90323 10.7053 2.85225 10.7932 2.7615C10.8812 2.67076 10.9305 2.54769 10.9305 2.41935V1.93548H13.2743C13.5229 1.93548 13.7614 2.03744 13.9372 2.21893C14.113 2.40042 14.2118 2.64656 14.2118 2.90323V4.35484H1.08679V2.90323ZM14.2118 13.0645C14.2118 13.3212 14.113 13.5673 13.9372 13.7488C13.7614 13.9303 13.5229 14.0323 13.2743 14.0323H2.02429C1.77565 14.0323 1.53719 13.9303 1.36138 13.7488C1.18556 13.5673 1.08679 13.3212 1.08679 13.0645V5.32258H14.2118V13.0645Z',
      fill: '#BEBEBE',
    }),
    /*#__PURE__*/ React__default['default'].createElement('path', {
      d:
        'M3.4303 8.22556H6.2428C6.36712 8.22556 6.48635 8.17458 6.57426 8.08383C6.66217 7.99309 6.71155 7.87001 6.71155 7.74168C6.71155 7.61335 6.66217 7.49028 6.57426 7.39953C6.48635 7.30879 6.36712 7.25781 6.2428 7.25781H3.4303C3.30598 7.25781 3.18675 7.30879 3.09884 7.39953C3.01093 7.49028 2.96155 7.61335 2.96155 7.74168C2.96155 7.87001 3.01093 7.99309 3.09884 8.08383C3.18675 8.17458 3.30598 8.22556 3.4303 8.22556ZM3.4303 11.1288H6.2428C6.36712 11.1288 6.48635 11.0778 6.57426 10.9871C6.66217 10.8963 6.71155 10.7732 6.71155 10.6449C6.71155 10.5166 6.66217 10.3935 6.57426 10.3028C6.48635 10.212 6.36712 10.161 6.2428 10.161H3.4303C3.30598 10.161 3.18675 10.212 3.09884 10.3028C3.01093 10.3935 2.96155 10.5166 2.96155 10.6449C2.96155 10.7732 3.01093 10.8963 3.09884 10.9871C3.18675 11.0778 3.30598 11.1288 3.4303 11.1288ZM9.0553 8.22556H11.8678C11.9921 8.22556 12.1114 8.17458 12.1993 8.08383C12.2872 7.99309 12.3366 7.87001 12.3366 7.74168C12.3366 7.61335 12.2872 7.49028 12.1993 7.39953C12.1114 7.30879 11.9921 7.25781 11.8678 7.25781H9.0553C8.93098 7.25781 8.81175 7.30879 8.72385 7.39953C8.63594 7.49028 8.58655 7.61335 8.58655 7.74168C8.58655 7.87001 8.63594 7.99309 8.72385 8.08383C8.81175 8.17458 8.93098 8.22556 9.0553 8.22556ZM9.0553 11.1288H11.8678C11.9921 11.1288 12.1114 11.0778 12.1993 10.9871C12.2872 10.8963 12.3366 10.7732 12.3366 10.6449C12.3366 10.5166 12.2872 10.3935 12.1993 10.3028C12.1114 10.212 11.9921 10.161 11.8678 10.161H9.0553C8.93098 10.161 8.81175 10.212 8.72385 10.3028C8.63594 10.3935 8.58655 10.5166 8.58655 10.6449C8.58655 10.7732 8.63594 10.8963 8.72385 10.9871C8.81175 11.0778 8.93098 11.1288 9.0553 11.1288Z',
      fill: '#BEBEBE',
    }),
  );
};
var Iconwq = function Iconwq(props) {
  var w = props.w,
    h = props.h;
  return /*#__PURE__*/ React__default['default'].createElement(
    'svg',
    {
      width: w,
      height: h,
      viewBox: '0 0 27 26',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React__default['default'].createElement('path', {
      d:
        'M14.4679 0.740625L17.5429 6.97188C17.7366 7.3625 18.1085 7.63438 18.5429 7.69688L25.4179 8.69688C26.5054 8.85625 26.9397 10.1938 26.1522 10.9594L21.1772 15.8094C20.8647 16.1156 20.721 16.5531 20.796 16.9844L21.971 23.8313C22.1554 24.9156 21.0179 25.7406 20.046 25.2313L13.896 21.9969C13.5085 21.7938 13.046 21.7938 12.6616 21.9969L6.50847 25.2313C5.53347 25.7438 4.39597 24.9156 4.58347 23.8313L5.75847 16.9844C5.83347 16.5531 5.68972 16.1156 5.37722 15.8094L0.402224 10.9594C-0.385276 10.1906 0.0490986 8.85313 1.1366 8.69688L8.0116 7.69688C8.44285 7.63438 8.81785 7.3625 9.0116 6.97188L12.0866 0.740625C12.5741 -0.246875 13.9804 -0.246875 14.4679 0.740625Z',
      fill: '#EEEEEE',
    }),
  );
};
var IconQWW = function IconQWW(props) {
  var w = props.w,
    h = props.h;
  return /*#__PURE__*/ React__default['default'].createElement(
    'svg',
    {
      width: w,
      height: h,
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React__default['default'].createElement('circle', {
      cx: '8',
      cy: '8',
      r: '7.5',
      fill: '#BEBEBE',
      stroke: '#BEBEBE',
    }),
    /*#__PURE__*/ React__default['default'].createElement('path', {
      d: 'M5 5L11 11',
      stroke: 'white',
      strokeLinecap: 'round',
    }),
    /*#__PURE__*/ React__default['default'].createElement('path', {
      d: 'M11 5L5 11',
      stroke: 'white',
      strokeLinecap: 'round',
    }),
  );
};
var Icondown_2_ = function Icondown_2_(props) {
  var w = props.w,
    h = props.h;
  return /*#__PURE__*/ React__default['default'].createElement(
    'svg',
    {
      width: w,
      height: h,
      viewBox: '0 0 7 10',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React__default['default'].createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M0.440584 9.84705C0.609006 10.0353 0.90622 10.0551 1.09446 9.87677L6.10748 5.35913C6.21646 5.26006 6.26599 5.13127 6.25609 4.99257C6.26599 4.86378 6.21646 4.73499 6.10748 4.63591L1.09446 0.118275C0.90622 -0.050146 0.609006 -0.0402389 0.440584 0.157903C0.262256 0.346138 0.28207 0.633444 0.470305 0.811772L5.12667 5.00248L0.480213 9.19318C0.28207 9.3616 0.262256 9.64891 0.440584 9.84705Z',
      fill: '#333333',
    }),
  );
};
var IconDF = function IconDF(props) {
  var w = props.w,
    h = props.h;
  return /*#__PURE__*/ React__default['default'].createElement(
    'svg',
    {
      width: w,
      height: h,
      viewBox: '0 0 20 20',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React__default['default'].createElement('path', {
      d:
        'M10 0C4.47716 0 0 4.47716 0 10C0 15.5229 4.47716 20 10 20C15.5229 20 20 15.5229 20 10C20 4.47714 15.5229 0 10 0ZM13.9711 12.9798C14.2448 13.2536 14.2448 13.6975 13.9711 13.971C13.6971 14.2448 13.2534 14.2448 12.9793 13.971L10.0049 10.9965L7.03024 13.971C6.75639 14.2448 6.31267 14.2448 6.03862 13.971C5.76496 13.6975 5.76496 13.2536 6.03862 12.9798L9.01345 10.0045L6.03862 7.03004C5.76496 6.75659 5.76496 6.31229 6.03862 6.03845C6.31265 5.765 6.75637 5.765 7.03024 6.03845L10.0049 9.01329L12.9793 6.03845C13.2534 5.765 13.6971 5.765 13.9711 6.03845C14.2448 6.31229 14.2448 6.75664 13.9711 7.03004L10.9963 10.0045L13.9711 12.9798H13.9711Z',
      fill: '#E34949',
    }),
  );
};
var IconDSDS = function IconDSDS(props) {
  var w = props.w,
    h = props.h;
  return /*#__PURE__*/ React__default['default'].createElement(
    'svg',
    {
      width: w,
      height: h,
      viewBox: '0 0 20 20',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React__default['default'].createElement('path', {
      d:
        'M9.99998 20.0002C4.47707 20.0002 0 15.5229 0 10C0 4.4773 4.47709 0 9.99998 0C15.5229 0 20 4.4773 20 10C20 15.5229 15.5229 20.0002 9.99998 20.0002ZM16.1101 6.48392L15.7887 6.16255C15.6112 5.98499 15.3235 5.98499 15.146 6.16255L8.48008 12.6902L6.03295 10.1291C5.95258 10.0488 5.7435 10.1278 5.56593 10.3054L5.24455 10.6268C5.06699 10.8043 4.98846 11.0134 5.06878 11.0935L8.33406 14.5104C8.41395 14.5907 8.62303 14.5115 8.80061 14.3342L9.12155 14.0128C9.17835 13.9564 9.22008 13.898 9.25469 13.8405L16.1101 7.12692C16.2877 6.94957 16.2877 6.66148 16.1101 6.48392Z',
      fill: '#27CDA2',
    }),
  );
};
var IconTYRE = function IconTYRE(props) {
  var w = props.w,
    h = props.h;
  return /*#__PURE__*/ React__default['default'].createElement(
    'svg',
    {
      width: w,
      height: h,
      viewBox: '0 0 20 20',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React__default['default'].createElement('path', {
      d:
        'M10 0C4.47715 0 0 4.47715 0 10C0 15.5229 4.47715 20 10 20C15.5229 20 20 15.5229 20 10C20 4.47715 15.5229 0 10 0ZM10.8594 5V11.6307C10.8594 12.1053 10.4746 12.4901 10 12.4901C9.52539 12.4901 9.14062 12.1053 9.14062 11.6307V5C9.14062 4.52539 9.52539 4.14062 10 4.14062C10.4746 4.14062 10.8594 4.52539 10.8594 5ZM10 13.3594C10.6904 13.3594 11.25 13.919 11.25 14.6094C11.25 15.2997 10.6904 15.8594 10 15.8594C9.30965 15.8594 8.75 15.2997 8.75 14.6094C8.75 13.919 9.30965 13.3594 10 13.3594Z',
      fill: '#FFA325',
    }),
  );
};
var IconQWDQ = function IconQWDQ(props) {
  var w = props.w,
    h = props.h;
  return /*#__PURE__*/ React__default['default'].createElement(
    'svg',
    {
      width: w,
      height: h,
      viewBox: '0 0 20 20',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React__default['default'].createElement('path', {
      d:
        'M10 0C4.47716 0 0 4.47716 0 10C0 15.5229 4.47716 20 10 20C15.5229 20 20 15.5229 20 10C20 4.47714 15.5229 0 10 0ZM13.9711 12.9798C14.2448 13.2536 14.2448 13.6975 13.9711 13.971C13.6971 14.2448 13.2534 14.2448 12.9793 13.971L10.0049 10.9965L7.03024 13.971C6.75639 14.2448 6.31267 14.2448 6.03862 13.971C5.76496 13.6975 5.76496 13.2536 6.03862 12.9798L9.01345 10.0045L6.03862 7.03004C5.76496 6.75659 5.76496 6.31229 6.03862 6.03845C6.31265 5.765 6.75637 5.765 7.03024 6.03845L10.0049 9.01329L12.9793 6.03845C13.2534 5.765 13.6971 5.765 13.9711 6.03845C14.2448 6.31229 14.2448 6.75664 13.9711 7.03004L10.9963 10.0045L13.9711 12.9798H13.9711Z',
      fill: '#E34949',
    }),
  );
};
var Icon121 = function Icon121(props) {
  var w = props.w,
    h = props.h;
  return /*#__PURE__*/ React__default['default'].createElement(
    'svg',
    {
      width: w,
      height: h,
      viewBox: '0 0 20 20',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React__default['default'].createElement('path', {
      d:
        'M10 0C4.47716 0 0 4.47716 0 10C0 15.5229 4.47716 20 10 20C15.5229 20 20 15.5229 20 10C20 4.47714 15.5229 0 10 0ZM13.9711 12.9798C14.2448 13.2536 14.2448 13.6975 13.9711 13.971C13.6971 14.2448 13.2534 14.2448 12.9793 13.971L10.0049 10.9965L7.03024 13.971C6.75639 14.2448 6.31267 14.2448 6.03862 13.971C5.76496 13.6975 5.76496 13.2536 6.03862 12.9798L9.01345 10.0045L6.03862 7.03004C5.76496 6.75659 5.76496 6.31229 6.03862 6.03845C6.31265 5.765 6.75637 5.765 7.03024 6.03845L10.0049 9.01329L12.9793 6.03845C13.2534 5.765 13.6971 5.765 13.9711 6.03845C14.2448 6.31229 14.2448 6.75664 13.9711 7.03004L10.9963 10.0045L13.9711 12.9798H13.9711Z',
      fill: '#E34949',
    }),
  );
};
var Icondasd = function Icondasd(props) {
  var w = props.w,
    h = props.h;
  return /*#__PURE__*/ React__default['default'].createElement(
    'svg',
    {
      width: w,
      height: h,
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React__default['default'].createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M8.39697 15.6973C4.25771 15.6973 0.896973 12.3365 0.896973 8.19727C0.896973 4.05801 4.25771 0.697266 8.39697 0.697266C12.5362 0.697266 15.897 4.05801 15.897 8.19727C15.897 12.3365 12.5362 15.6973 8.39697 15.6973ZM8.39774 1.63751C4.77493 1.63751 1.83813 4.57431 1.83813 8.19712C1.83813 11.8199 4.77493 14.7567 8.39774 14.7567C12.0206 14.7567 14.9574 11.8199 14.9574 8.19712C14.9574 4.57431 12.0206 1.63751 8.39774 1.63751ZM8.86591 8.66735H11.2092C11.4636 8.66735 11.6794 8.45923 11.6794 8.19716C11.6794 7.93508 11.4636 7.72696 11.2092 7.72696H8.86591V5.38369C8.86591 5.12162 8.65009 4.9135 8.39572 4.9135C8.13364 4.9135 7.92552 5.12933 7.92552 5.38369V7.72696H5.58226C5.32018 7.72696 5.11206 7.93508 5.11206 8.19716C5.11206 8.45923 5.32789 8.66735 5.58226 8.66735H7.92552V11.0106C7.92552 11.2727 8.13364 11.4808 8.39572 11.4808C8.6578 11.4808 8.86591 11.265 8.86591 11.0106V8.66735Z',
      fill: '#3E78ED',
    }),
  );
};
var Iconrtye = function Iconrtye(props) {
  var w = props.w,
    h = props.h;
  return /*#__PURE__*/ React__default['default'].createElement(
    'svg',
    {
      width: w,
      height: h,
      viewBox: '0 0 15 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React__default['default'].createElement('path', {
      d:
        'M14.0529 9.83069L13.251 9.36776C13.2991 9.06204 13.3232 8.75303 13.3232 8.44355C13.3232 8.1499 13.3013 7.85602 13.258 7.56574L14.0529 7.10681C14.2996 6.96435 14.4761 6.73434 14.5499 6.45914C14.6236 6.18393 14.5857 5.89648 14.4433 5.64976L13.3683 3.78773C13.1783 3.45873 12.8241 3.25434 12.4441 3.25434C12.257 3.25449 12.0732 3.3038 11.9112 3.39734L11.1275 3.84981C10.6529 3.46688 10.1183 3.1571 9.55226 2.93696V2.03538C9.55226 1.44724 9.07378 0.96875 8.48563 0.96875H6.33558C5.74744 0.96875 5.26895 1.44724 5.26895 2.03538V2.94368C4.70642 3.16444 4.17507 3.47393 3.70352 3.85549L2.90998 3.39734C2.74798 3.3038 2.56424 3.25449 2.37717 3.25434C1.99705 3.25434 1.64291 3.45873 1.45295 3.78774L0.377924 5.64974C0.0838537 6.15907 0.258983 6.8127 0.768327 7.10679L1.57871 7.57466C1.53617 7.86234 1.5148 8.15275 1.51477 8.44355C1.51477 8.75015 1.53855 9.05664 1.58563 9.35882L0.768327 9.83071C0.258983 10.1248 0.0838537 10.7784 0.377924 11.2877L1.45295 13.1498C1.64291 13.4788 1.99707 13.6832 2.37719 13.6832C2.56426 13.683 2.748 13.6337 2.91 13.5402L3.73979 13.0611C4.20195 13.4289 4.72075 13.7283 5.26897 13.9434V14.9021C5.26897 15.4903 5.74745 15.9687 6.3356 15.9687H8.48565C9.07379 15.9687 9.55228 15.4903 9.55228 14.9021V13.9501C10.104 13.7356 10.6262 13.4362 11.0913 13.067L11.9112 13.5407C12.0733 13.6342 12.2575 13.6843 12.444 13.6843H12.4441C12.8242 13.6843 13.1783 13.4793 13.3683 13.1503L14.4433 11.2877C14.5858 11.041 14.6236 10.7536 14.5499 10.4783C14.4761 10.2032 14.2996 9.97315 14.0529 9.83069ZM13.5268 10.7586L12.4518 12.6206C12.4512 12.6217 12.4493 12.6249 12.4441 12.6249C12.4431 12.6249 12.4423 12.6248 12.4403 12.6237L11.2978 11.9641C11.2006 11.908 11.0882 11.8842 10.9766 11.8962C10.8651 11.9082 10.7603 11.9553 10.6773 12.0307C10.158 12.5027 9.53147 12.8621 8.86541 13.0701C8.75776 13.1038 8.66367 13.1709 8.59686 13.2617C8.53005 13.3526 8.49402 13.4624 8.49402 13.5752V14.9021C8.49402 14.9067 8.49024 14.9105 8.48562 14.9105H6.33556C6.33333 14.9105 6.3312 14.9096 6.32962 14.9081C6.32805 14.9065 6.32716 14.9043 6.32716 14.9021V13.5697C6.32716 13.4572 6.29132 13.3477 6.22484 13.257C6.15835 13.1662 6.06469 13.0991 5.95744 13.0652C5.29457 12.8558 4.67125 12.4962 4.15487 12.0253C4.05739 11.9364 3.93018 11.8871 3.79823 11.8872C3.70539 11.8871 3.61418 11.9116 3.5338 11.9581L2.38085 12.6237C2.37875 12.6249 2.37796 12.6249 2.37714 12.6249C2.37183 12.6249 2.36997 12.6217 2.36936 12.6206L1.29434 10.7586C1.29323 10.7567 1.29293 10.7544 1.2935 10.7522C1.29408 10.7501 1.29548 10.7483 1.29741 10.7471L2.43991 10.0875C2.53762 10.0311 2.61474 9.94494 2.66 9.84159C2.70527 9.73825 2.71632 9.62314 2.69154 9.51307C2.53644 8.82241 2.53345 8.10628 2.68277 7.41435C2.70644 7.30483 2.69473 7.19062 2.64934 7.08818C2.60394 6.98574 2.52719 6.90036 2.43015 6.84433L1.29739 6.19033C1.29546 6.18921 1.29405 6.18737 1.29348 6.18522C1.2929 6.18307 1.2932 6.18077 1.29432 6.17884L2.36935 4.31684C2.36997 4.31578 2.37182 4.31256 2.37712 4.31256C2.37805 4.31256 2.37887 4.31264 2.38082 4.31377L3.50038 4.96014C3.5983 5.01668 3.71176 5.04036 3.82412 5.02772C3.93649 5.01507 4.04185 4.96676 4.12475 4.88986C4.64782 4.40472 5.28155 4.03544 5.95742 3.82191C6.06467 3.78803 6.15834 3.72085 6.22482 3.63012C6.2913 3.5394 6.32715 3.42984 6.32715 3.31737V2.03538C6.32715 2.03315 6.32803 2.03102 6.32961 2.02944C6.33118 2.02787 6.33332 2.02698 6.33555 2.02698H8.4856C8.48783 2.02698 8.48996 2.02787 8.49154 2.02944C8.49311 2.03102 8.494 2.03315 8.494 2.03538V3.31194C8.494 3.42472 8.53003 3.53454 8.59684 3.6254C8.66365 3.71625 8.75774 3.78339 8.86539 3.817C9.54437 4.02902 10.1813 4.39816 10.7074 4.88447C10.7903 4.96113 10.8956 5.00925 11.0078 5.02179C11.12 5.03433 11.2333 5.01063 11.3311 4.95416L12.4403 4.31378C12.4424 4.31256 12.4432 4.31256 12.444 4.31256C12.4493 4.31256 12.4512 4.3158 12.4518 4.31684L13.5268 6.17887C13.5278 6.18049 13.5286 6.18188 13.5277 6.18522C13.5268 6.1886 13.5253 6.1894 13.5238 6.19033L12.4059 6.83571C12.3087 6.89182 12.2319 6.97735 12.1865 7.07997C12.1412 7.18259 12.1296 7.29698 12.1535 7.40661C12.2276 7.74727 12.265 8.0949 12.265 8.44354C12.265 8.80664 12.2245 9.1691 12.1447 9.52082C12.1197 9.63099 12.1307 9.74628 12.1759 9.8498C12.2211 9.95333 12.2983 10.0397 12.3962 10.0961L13.5238 10.7472C13.5254 10.7481 13.5268 10.7489 13.5277 10.7522C13.5286 10.7556 13.5278 10.757 13.5268 10.7586Z',
      fill: '#3E78ED',
    }),
    /*#__PURE__*/ React__default['default'].createElement('path', {
      d:
        'M7.41904 5.76416C5.94173 5.76416 4.73987 6.96602 4.73987 8.44333C4.73987 9.92062 5.94173 11.1225 7.41904 11.1225C8.89633 11.1225 10.0982 9.92062 10.0982 8.44333C10.0982 6.96602 8.89633 5.76416 7.41904 5.76416ZM7.41904 10.0643C6.52525 10.0643 5.7981 9.33712 5.7981 8.44333C5.7981 7.54955 6.52525 6.82239 7.41904 6.82239C8.31282 6.82239 9.03998 7.54955 9.03998 8.44333C9.03998 9.33712 8.31282 10.0643 7.41904 10.0643Z',
      fill: '#3E78ED',
    }),
  );
};
var Iconxcccccc = function Iconxcccccc(props) {
  var w = props.w,
    h = props.h;
  return /*#__PURE__*/ React__default['default'].createElement(
    'svg',
    {
      width: w,
      height: h,
      viewBox: '0 0 15 14',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React__default['default'].createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M7.66945 2.54425L9.2507 4.46059C9.43838 4.64971 9.74312 4.64971 9.93086 4.46059C10.119 4.27194 10.119 3.96582 9.93086 3.77719L7.56224 0.905496C7.46159 0.804842 7.32862 0.761783 7.19756 0.768802C7.06651 0.761783 6.93357 0.80486 6.8334 0.905496L4.4643 3.77721C4.27613 3.96586 4.27613 4.27198 4.4643 4.46061C4.65202 4.64973 4.95676 4.64973 5.14446 4.46061L6.71074 2.56253V9.39656C6.71074 9.66198 6.92512 9.87683 7.19008 9.87683C7.45503 9.87683 7.66945 9.66198 7.66945 9.39656V2.54425ZM0.479353 13.2321H13.9008C14.1658 13.2321 14.3802 13.0177 14.3802 12.7527V8.91819C14.3802 8.6537 14.1658 8.43886 13.9009 8.43886C13.6359 8.43886 13.4215 8.65372 13.4215 8.91819V12.2734H0.958688V8.91819C0.958688 8.6537 0.744309 8.43886 0.479353 8.43886C0.214396 8.43886 0 8.65372 0 8.91819V12.7527C0 13.0177 0.214379 13.2321 0.479353 13.2321Z',
      fill: '#333333',
    }),
  );
};
var Iconewewew = function Iconewewew(props) {
  var w = props.w,
    h = props.h;
  return /*#__PURE__*/ React__default['default'].createElement(
    'svg',
    {
      width: w,
      height: h,
      viewBox: '0 0 15 15',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React__default['default'].createElement(
      'g',
      {
        clipPath: 'url(#clip0)',
      },
      /*#__PURE__*/ React__default['default'].createElement('path', {
        d:
          'M6.96642 8.21766C7.06816 8.31941 7.12928 8.45479 7.13831 8.59839C7.14734 8.742 7.10366 8.88397 7.01547 8.99766L6.96642 9.0532L3.24842 12.7718L5.94415 12.7724C6.08888 12.7724 6.22858 12.8255 6.33673 12.9217C6.44489 13.0179 6.51399 13.1504 6.53092 13.2942L6.53506 13.3633C6.53502 13.5081 6.4818 13.6479 6.38551 13.7561C6.28921 13.8642 6.15654 13.9333 6.0127 13.9501L5.94415 13.9542H1.82138L1.77706 13.9524L1.7026 13.9424L1.63701 13.9247L1.57142 13.8987L1.51351 13.8679L1.45679 13.8283L1.40361 13.7811C1.3829 13.7604 1.36375 13.7383 1.34629 13.7149L1.30433 13.6499L1.27242 13.5825L1.25174 13.5205L1.23401 13.4318L1.23047 13.3627V9.22398C1.23078 9.07342 1.28856 8.92865 1.392 8.81925C1.49544 8.70985 1.63673 8.64405 1.78704 8.6353C1.93735 8.62656 2.08533 8.67551 2.20076 8.77218C2.31619 8.86884 2.39037 9.00592 2.40815 9.15543L2.41229 9.22398L2.4117 11.9357L6.13088 8.21766C6.24169 8.10688 6.39196 8.04465 6.54865 8.04465C6.70534 8.04465 6.85561 8.10688 6.96642 8.21766ZM9.51679 0.953613H13.6396L13.6839 0.955386L13.7583 0.965431L13.8239 0.983159L13.8895 1.00916L13.9474 1.03989L14.0042 1.07948L14.0573 1.12675C14.0786 1.14743 14.0975 1.16989 14.1147 1.19293L14.1566 1.25793L14.1885 1.3253L14.2092 1.38734L14.2269 1.47598L14.2305 1.54452V5.68325C14.2302 5.83381 14.1724 5.97857 14.0689 6.08798C13.9655 6.19738 13.8242 6.26317 13.6739 6.27192C13.5236 6.28067 13.3756 6.23171 13.2602 6.13505C13.1447 6.03838 13.0706 5.9013 13.0528 5.75179L13.0486 5.68325V2.97098L9.33006 6.68957C9.22372 6.79555 9.08103 6.85707 8.93097 6.86166C8.78091 6.86624 8.63473 6.81353 8.52212 6.71424C8.40952 6.61495 8.33893 6.47651 8.32469 6.32706C8.31045 6.17761 8.35363 6.02834 8.44547 5.90957L8.49451 5.85402L12.2119 2.13543H9.51738C9.37254 2.13556 9.23271 2.08249 9.12442 1.9863C9.01614 1.89011 8.94696 1.7575 8.93001 1.61366L8.92588 1.54452C8.92591 1.3997 8.97913 1.25993 9.07543 1.15176C9.17173 1.04359 9.30439 0.974549 9.44824 0.95775L9.51679 0.953613Z',
        fill: '#3E78ED',
      }),
    ),
    /*#__PURE__*/ React__default['default'].createElement(
      'defs',
      null,
      /*#__PURE__*/ React__default['default'].createElement(
        'clipPath',
        {
          id: 'clip0',
        },
        /*#__PURE__*/ React__default['default'].createElement('rect', {
          width: '14',
          height: '14',
          fill: 'white',
          transform: 'translate(0.94873 0.487305)',
        }),
      ),
    ),
  );
};

var RuiBinIcon = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  IconFrame: IconFrame,
  Icondesw1121: Icondesw1121,
  Iconqwdwdq: Iconqwdwdq,
  Iconweeeeeee: Iconweeeeeee,
  Iconwq: Iconwq,
  IconQWW: IconQWW,
  Icondown_2_: Icondown_2_,
  IconDF: IconDF,
  IconDSDS: IconDSDS,
  IconTYRE: IconTYRE,
  IconQWDQ: IconQWDQ,
  Icon121: Icon121,
  Icondasd: Icondasd,
  Iconrtye: Iconrtye,
  Iconxcccccc: Iconxcccccc,
  Iconewewew: Iconewewew,
});

var RuiBin = /*#__PURE__*/ (function(_Component) {
  _inherits(RuiBin, _Component);

  var _super = _createSuper(RuiBin);

  function RuiBin() {
    _classCallCheck(this, RuiBin);

    return _super.apply(this, arguments);
  }

  _createClass(RuiBin, [
    {
      key: 'render',
      value: function render() {
        return /*#__PURE__*/ React__default['default'].createElement(
          'div',
          null,
          'RuiBinRuiBinRuiBinRuiBinRuiBinRuiBinRuiBinRuiBin',
        );
      },
    },
  ]);

  return RuiBin;
})(React.Component);

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z =
  '.RuibinButton {\n  display: inline-block;\n  padding: 4px 20px;\n  font-size: 14px;\n  height: 32px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n\n.RuibinButton_default {\n  background-color: #f5f5f5;\n  color: rgba(0,0,0,.85);\n\n}\n.RuibinButton_default:hover {\n  background-color: #f5f5f5;\n  border-color: #457bf0;\n  color: #457bf0;\n\n}\n\n.RuibinButton_default:active {\n  border: 1px solid #fff;\n  background-color: #f4f4f5;\n  border-color: #1456e6;\n}\n\n\n.RuibinButton_primary {\n  color: #fff;\n  background-color: #306be8;\n}\n\n.RuibinButton_primary:hover {\n  background-color: #457bf0;\n}\n\n.RuibinButton_primary:active {\n  border: 1px solid #fff;\n  background-color: #306be8;\n  border-color: #457bf0;\n}\n\n.RuibinButton_danger {\n  background-color: #f80606;\n  color: #fff;\n\n\n}\n.RuibinButton_danger:hover {\n  background-color: #fc3639;\n  border-color: #c90b0b;\n  color: #fff;\n\n}\n\n.RuibinButton_danger:active {\n  border: 1px solid #fff;\n  background-color: #ff1d1d;\n  border-color: #ff4d4f;\n}\n';
styleInject(css_248z);

var RuibinButton = /*#__PURE__*/ (function(_Component) {
  _inherits(RuibinButton, _Component);

  var _super = _createSuper(RuibinButton);

  function RuibinButton(props) {
    var _this;

    _classCallCheck(this, RuibinButton);

    _this = _super.call(this, props);
    _this.state = {
      types: {
        default: 'default',
        primary: 'primary',
        danger: 'danger',
      },
    };

    _this.fn = function() {};

    return _this;
  }

  _createClass(RuibinButton, [
    {
      key: 'render',
      value: function render() {
        var types = this.state.types;
        var _this$props = this.props,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? 'default' : _this$props$type,
          onClick = _this$props.onClick,
          _this$props$children = _this$props.children,
          children =
            _this$props$children === void 0
              ? type === 'default'
                ? '取消'
                : '确定'
              : _this$props$children;
        console.log(this.props);
        return /*#__PURE__*/ React__default['default'].createElement(
          'button',
          {
            onClick: onClick,
            className: 'RuibinButton RuibinButton_'.concat(types[type]),
          },
          children,
        );
      },
    },
  ]);

  return RuibinButton;
})(React.Component);

var Home = /*#__PURE__*/ (function(_Component) {
  _inherits(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    _classCallCheck(this, Home);

    return _super.apply(this, arguments);
  }

  _createClass(Home, [
    {
      key: 'render',
      value: function render() {
        return /*#__PURE__*/ React__default['default'].createElement(
          'div',
          null,
          'home',
        );
      },
    },
  ]);

  return Home;
})(React.Component);

var index = _objectSpread2({}, RuiBinIcon);

exports.Button = RuibinButton;
exports.Home = Home;
exports.RuiBin = RuiBin;
exports.default = index;
