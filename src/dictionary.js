var Path = require('path');

const _dictionary = (data) => {
  const {id, locales, isPath} = data;

  let dictionaries = locales.map(path => {
    return require(`${path}.js`);
  });
  
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
  
  const dictionary = dictionaries.find(dictionary => {
    return dictionary.id === data.id
  });
  
  return {
    t: (key, value) => {
      return dictionary.values[key] || value;
    }
  }
};

export default _dictionary
