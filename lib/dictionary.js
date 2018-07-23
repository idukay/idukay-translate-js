"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _dictionary = function _dictionary(data) {
  var id = data.id,
      dictionaries = data.dictionaries;


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
    return dictionary.id === data.id;
  });

  return {
    t: function t(key, value) {
      return dictionary.values[key] || value;
    }
  };
};

exports.default = _dictionary;