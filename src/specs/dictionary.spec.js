import LocalStorageMock from './localStorage';
global.localStorage = new LocalStorageMock;

import {dictionary, t} from 'dictionary';

describe('Dictionary', () => {
  let dictionaryInstance;
  const dictionaries = [
    require(`./locales/en-us.js`),
    require(`./locales/es-ec`)
  ];
  
  describe('when is node', () => {
    describe('es-ec', () => {
      beforeEach(() => {
        dictionary({id: 'es-ec', dictionaries});
      });

      it('should instance dictionary.t and return correct translation', () => {
        expect(t('key1', 'enOtherText1')).toBe('esTranslateKey1');
        expect(t('key2', 'enOtherText2')).toBe('esTranslateKey2');
      });
    });

    describe('en-us', () => {
      beforeEach(() => {
        dictionary({id: 'en-us', dictionaries});
      });

      it('should instance dictionary.t and return correct translation', () => {
        expect(t('key1', 'esTranslateKey1')).toBe('enTranslateKey1');
        expect(t('key2', 'esTranslateKey2')).toBe('enTranslateKey2');
      });
    });

    describe('when key not exist', () => {
      beforeEach(() => {
        dictionary({id: 'es-ec', dictionaries});
      });

      it('should instance dictionary.t and return text if translation not exists', () => {
        expect(t('key3', 'esTranslateKey3')).toBe('esTranslateKey3');
      });
    });

    describe('when dictionary not exist', () => {
      beforeEach(() => {
        dictionary({id: 'notExist', dictionaries});
      });

      it('should instance dictionary.t and return text if translation not exists', () => {
        expect(t('key3', 'esTranslateKey3')).toBe('esTranslateKey3');
      });
    });

    describe('when dictionary instance without id', () => {
      beforeEach(() => {
        const newDictionaries = [{
          id: 'en-us',
          label: 'EN',
          values: {newKey: 'newKeyValue'}
        }];

        localStorage.setItem('idukayTranslateJS', JSON.stringify({id: 'en-us'}));
        dictionary({dictionaries: newDictionaries});
      });

      it('should instance t and return new value', () => {
        expect(t('newKey', 'value')).toBe('newKeyValue');
      });
    });
  });
});
