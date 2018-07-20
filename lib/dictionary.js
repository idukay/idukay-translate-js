'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dictionary = function dictionary(data) {
  var id = data.id,
      locales = data.locales;


  var dictionaries = _glob2.default.sync(locales + '/*').map(function (file) {
    return require(_path2.default.resolve(file));
  });

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

    data.instance = true;
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

exports.default = dictionary;