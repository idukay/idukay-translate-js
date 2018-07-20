import dictionary from 'dictionary';

fdescribe('when ', () => {
  let dictionaryInstance;
  const dictionaries = [
    {
      id: 'es-ec',
      label: 'ES',
      values: [
        {key: 'key1', value: 'esTranslateKey1'},
        {key: 'key2', value: 'esTranslateKey2'}
      ]
    },
    {
      id: 'en-us',
      label: 'EN',
      values: [
        {key: 'key1', value: 'enTranslateKey1'},
        {key: 'key2', value: 'enTranslateKey2'}
      ]
    }
  ];
  
  describe('es-ec', () => {
    beforeEach(() => {
      dictionaryInstance = dictionary({id: 'es-ec', dictionaries});
    });

    it('should instance dictionary.t and return correct translation', () => {
      expect(dictionaryInstance.t('key1', 'enOtherText1')).toBe('esTranslateKey1');
      expect(dictionaryInstance.t('key2', 'enOtherText2')).toBe('esTranslateKey2');
    });
  });
  
  describe('en-us', () => {
    beforeEach(() => {
      dictionaryInstance = dictionary({id: 'en-us', dictionaries: dictionaries});
    });

    it('should instance dictionary.t and return correct translation', () => {
      expect(dictionaryInstance.t('key1', 'esTranslateKey1')).toBe('enTranslateKey1');
      expect(dictionaryInstance.t('key2', 'esTranslateKey2')).toBe('enTranslateKey2');
    });
  });
  
  describe('when key not exist ', () => {
    beforeEach(() => {
      dictionaryInstance = dictionary({id: 'es-ec', dictionaries: dictionaries});
    });
    
    it('should instance dictionary.t and return text if translation not exists', () => {
      expect(dictionaryInstance.t('key3', 'esTranslateKey3')).toBe('esTranslateKey3');
    });
  });
});
