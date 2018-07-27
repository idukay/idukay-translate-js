'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  var dictionary = function dictionary(_ref) {
    var id = _ref.id,
        dictionaries = _ref.dictionaries;

    var storage = JSON.parse(localStorage.getItem('idukayTranslateJS')) || {};
    var isArray = Array.isArray(dictionaries[0].values);
    var dictionaryId = id || storage.id;

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
      return dictionary.id === dictionaryId;
    });

    dictionary = Object.assign({ values: [] }, dictionary);
    localStorage.setItem('idukayTranslateJS', JSON.stringify(dictionary));
  };

  var t = function t(key, value) {
    return JSON.parse(localStorage.getItem('idukayTranslateJS')).values[key.toLowerCase()] || value;
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