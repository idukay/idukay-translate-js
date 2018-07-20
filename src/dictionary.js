import glob from 'glob';
import path from 'path';

const dictionary = (data) => {
  const {id, locales} = data;
  
  const dictionaries = glob.sync(`${locales}/*`).map(file => {
    return require(path.resolve(file));
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

    data.instance = true;
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

export default dictionary
