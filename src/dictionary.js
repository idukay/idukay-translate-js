(function() {
  const dictionary = ({id = JSON.parse(localStorage.getItem('idukayTranslateJS')).id, dictionaries}) => {
    const isArray = Array.isArray(dictionaries[0].values);

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
      return dictionary.id === id;
    });

    dictionary = dictionary || {values: []};
    localStorage.setItem('idukayTranslateJS', JSON.stringify(dictionary));
  };

  const t = (key, value) => {
    return JSON.parse(localStorage.getItem('idukayTranslateJS')).values[key] || value;
  };

  var root = typeof self == 'object' && self.self === self && self || typeof global == 'object' && global.global === global && global || this || {};

  if (typeof exports !== 'undefined' && !exports.nodeType) {
    exports.dictionary = dictionary;
    exports.t = t;
  } else {
    root.translateJs = instance;
    root.t = t;
  }
}());