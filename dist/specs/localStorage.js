"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalStorageMock = function () {
  function LocalStorageMock() {
    _classCallCheck(this, LocalStorageMock);

    this.store = {};
  }

  _createClass(LocalStorageMock, [{
    key: "clear",
    value: function clear() {
      this.store = {};
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      return this.store[key] || null;
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      this.store[key] = value.toString();
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      delete this.store[key];
    }
  }]);

  return LocalStorageMock;
}();

;

exports.default = LocalStorageMock;