import LocalStorageMock from './localStorage';
global.localStorage = new LocalStorageMock;

import {translateJs, t} from 'dictionary';

describe('Dictionary', () => {
  let dictionaryInstance;
  const dictionaries = [
    require(`./locales/en-us.js`),
    require(`./locales/es-ec`)
  ];
  
  describe('when is node', () => {
    describe('es-ec', () => {
      beforeEach(() => {
        translateJs({id: 'es-ec', dictionaries});
      });

      it('should instance dictionary.t and return correct translation', () => {
        expect(t('key1', 'enOtherText1')).toBe('esTranslateKey1');
        expect(t('KeY2', 'enOtherText2')).toBe('EsTranslateKey2');
      });
    });

    describe('en-us', () => {
      beforeEach(() => {
        translateJs({id: 'en-us', dictionaries});
      });

      it('should instance dictionary.t and return correct translation', () => {
        expect(t('key1', 'esTranslateKey1')).toBe('enTranslateKey1');
        expect(t('key2', 'esTranslateKey2')).toBe('enTranslateKey2');
      });
    });

    describe('when key not exist', () => {
      beforeEach(() => {
        translateJs({id: 'es-ec', dictionaries});
      });

      it('should instance dictionary.t and return text if translation not exists', () => {
        expect(t('key3', 'esTranslateKey3')).toBe('esTranslateKey3');
      });
    });

    describe('when dictionary not exist', () => {
      beforeEach(() => {
        translateJs({id: 'notExist', dictionaries});
      });

      it('should instance dictionary.t and return text if translation not exists', () => {
        expect(t('key3', 'esTranslateKey3')).toBe('esTranslateKey3');
        expect(t('Key3', 'esTranslateKey3')).toBe('EsTranslateKey3');
      });
    });

    describe('when dictionary instance without id', () => {
      beforeEach(() => {
        const newDictionaries = [{
          id: 'en-us',
          label: 'EN',
          values: {newkey: 'newKeyValue'}
        }];

        localStorage.setItem('idukayTranslateJS', JSON.stringify({id: 'en-us'}));
        translateJs({dictionaries: newDictionaries});
      });

      it('should instance t and return new value', () => {
        expect(t('newKey', 'value')).toBe('newKeyValue');
      });
    });
    
    describe('when not has localStorage', () => {
      beforeEach(() => {
        const newDictionaries = [{
          id: undefined
        }];

        translateJs({dictionaries: newDictionaries});
      });

      it('should instance t and return value', () => {
        expect(t('key', 'value')).toBe('value');
      });
    });
  });
});
