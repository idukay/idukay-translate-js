'use strict';

var _dictionary = require('../dictionary');

var _dictionary2 = _interopRequireDefault(_dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Dictionary', function () {
  var dictionaryInstance = void 0;

  var dictionaries = [require('./locales/en-us.js'), require('./locales/es-ec')];

  describe('es-ec', function () {
    beforeEach(function () {
      dictionaryInstance = (0, _dictionary2.default)({ id: 'es-ec', dictionaries: dictionaries });
    });

    it('should instance dictionary.t and return correct translation', function () {
      expect(dictionaryInstance.t('key1', 'enOtherText1')).toBe('esTranslateKey1');
      expect(dictionaryInstance.t('key2', 'enOtherText2')).toBe('esTranslateKey2');
    });
  });

  describe('en-us', function () {
    beforeEach(function () {
      dictionaryInstance = (0, _dictionary2.default)({ id: 'en-us', dictionaries: dictionaries });
    });

    it('should instance dictionary.t and return correct translation', function () {
      expect(dictionaryInstance.t('key1', 'esTranslateKey1')).toBe('enTranslateKey1');
      expect(dictionaryInstance.t('key2', 'esTranslateKey2')).toBe('enTranslateKey2');
    });
  });

  describe('when key not exist ', function () {
    beforeEach(function () {
      dictionaryInstance = (0, _dictionary2.default)({ id: 'es-ec', dictionaries: dictionaries });
    });

    it('should instance dictionary.t and return text if translation not exists', function () {
      expect(dictionaryInstance.t('key3', 'esTranslateKey3')).toBe('esTranslateKey3');
    });
  });
});