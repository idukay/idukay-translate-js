import dictionary from 'dictionary';

describe('Dictionary', () => {
  let dictionaryInstance;
  const locales = `${__dirname}/locales/`;
  
  describe('es-ec', () => {
    beforeEach(() => {
      dictionaryInstance = dictionary({id: 'es-ec', locales});
    });

    it('should instance dictionary.t and return correct translation', () => {
      expect(dictionaryInstance.t('key1', 'enOtherText1')).toBe('esTranslateKey1');
      expect(dictionaryInstance.t('key2', 'enOtherText2')).toBe('esTranslateKey2');
    });
  });
  
  describe('en-us', () => {
    beforeEach(() => {
      dictionaryInstance = dictionary({id: 'en-us', locales});
    });

    it('should instance dictionary.t and return correct translation', () => {
      expect(dictionaryInstance.t('key1', 'esTranslateKey1')).toBe('enTranslateKey1');
      expect(dictionaryInstance.t('key2', 'esTranslateKey2')).toBe('enTranslateKey2');
    });
  });
  
  describe('when key not exist ', () => {
    beforeEach(() => {
      dictionaryInstance = dictionary({id: 'es-ec', locales});
    });
    
    it('should instance dictionary.t and return text if translation not exists', () => {
      expect(dictionaryInstance.t('key3', 'esTranslateKey3')).toBe('esTranslateKey3');
    });
  });
});
