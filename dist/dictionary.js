'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  var dictionary = function dictionary(_ref) {
    var _ref$id = _ref.id,
        id = _ref$id === undefined ? JSON.parse(localStorage.getItem('idukayTranslateJS')).id : _ref$id,
        dictionaries = _ref.dictionaries;

    var isArray = Array.isArray(dictionaries[0].values);

    if (isArray) {
      dictionaries.forEach(function (dictionary) {
        var values = {};
        dictionary.values = dictionary.values || [];

        dictionary.values.forEach(function (value) {
          values[value.key] = value.value;
        });

        dictionary.values = values;
        return dictionary;
      });
    }

    var dictionary = dictionaries.find(function (dictionary) {
      return dictionary.id === id;
    });

    dictionary = dictionary || { values: [] };
    localStorage.setItem('idukayTranslateJS', JSON.stringify(dictionary));
  };

  var t = function t(key, value) {
    return JSON.parse(localStorage.getItem('idukayTranslateJS')).values[key] || value;
  };

  var root = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self.self === self && self || (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global.global === global && global || this || {};

  if (typeof exports !== 'undefined' && !exports.nodeType) {
    exports.dictionary = dictionary;
    exports.t = t;
  } else {
    root.translateJs = instance;
    root.t = t;
  }
})();