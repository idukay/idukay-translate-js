(function() {
  let dictionary;

  const translate = ({id, dictionaries}) => {
    const storage = dictionary || {}; 
    const isArray = Array.isArray(dictionaries[0].values);
    const dictionaryId = id || storage.id;

    if(isArray) {
      dictionaries.forEach(dictionary => {
        let values = {};
        dictionary.values = dictionary.values || {};

        dictionary.values.forEach((value) => {
          values[value.key] = value.value;
        });

        dictionary.values = values;
        return dictionary;
      });
    }

    dictionary = dictionaries.find(dictionary => {
      return dictionary.id === dictionaryId;
    });
    
    dictionary = Object.assign({values: {}}, dictionary);
  };

  const t = (key, value) => {
    if (key) {
      const isLowerCase = key[0].toUpperCase() === key.charAt(0);
      const localDictionary = dictionary || {values: {}};
      const translate = localDictionary.values[key.toLowerCase()] || value
      return isLowerCase ? `${translate.charAt(0).toUpperCase()}${translate.slice(1)}` : translate;
    }
  };

  var root = typeof self == 'object' && self.self === self && self || typeof global == 'object' && global.global === global && global || this || {};

  if (typeof exports !== 'undefined' && !exports.nodeType) {
    exports.translateJs = translate;
    exports.t = t;
  } else {
    root.translateJs = translate;
    root.t = t;
  }
}());