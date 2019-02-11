'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  var dictionary = void 0;

  var translate = function translate(_ref) {
    var id = _ref.id,
        dictionaries = _ref.dictionaries;

    var storage = dictionary || {};
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

    dictionary = dictionaries.find(function (dictionary) {
      return dictionary.id === dictionaryId;
    });

    dictionary = Object.assign({ values: [] }, dictionary);
  };

  var t = function t(key, value) {
    var isLowerCase = key[0].toUpperCase() === key.charAt(0);
    var localDictionary = dictionary || { values: [] };
    var translate = localDictionary.values[key.toLowerCase()] || value;
    return isLowerCase ? '' + translate.charAt(0).toUpperCase() + translate.slice(1) : translate;
  };

  var root = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self.self === self && self || (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global.global === global && global || this || {};

  if (typeof exports !== 'undefined' && !exports.nodeType) {
    exports.translateJs = translate;
    exports.t = t;
  } else {
    root.translateJs = translate;
    root.t = t;
  }
})();