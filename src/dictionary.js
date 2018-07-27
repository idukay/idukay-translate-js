(function() {
  const dictionary = ({id, dictionaries}) => {
    const storage = JSON.parse(localStorage.getItem('idukayTranslateJS')) || {};
    const isArray = Array.isArray(dictionaries[0].values);
    const dictionaryId = id || storage.id;

    if(isArray) {
      dictionaries.forEach(dictionary => {
        let values = {};
        dictionary.values = dictionary.values || [];

        dictionary.values.forEach((value) => {
          values[value.key] = value.value;
        });

        dictionary.values = values;
        return dictionary;
      });
    }

    let dictionary = dictionaries.find(dictionary => {
      return dictionary.id === dictionaryId;
    });

    dictionary = Object.assign({values: []}, dictionary);
    localStorage.setItem('idukayTranslateJS', JSON.stringify(dictionary));
  };

  const t = (key, value) => {
    return JSON.parse(localStorage.getItem('idukayTranslateJS')).values[key.toLowerCase()] || value;
  };

  var root = typeof self == 'object' && self.self === self && self || typeof global == 'object' && global.global === global && global || this || {};

  if (typeof exports !== 'undefined' && !exports.nodeType) {
    exports.translateJs = dictionary;
    exports.t = t;
  } else {
    root.translateJs = dictionary;
    root.t = t;
  }
}());