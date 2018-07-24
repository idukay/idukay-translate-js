const instance = ({id = JSON.parse(localStorage.getItem('idukayTranslateJS')).id, dictionaries}) => {
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

var t = function t(key, value) {
  return JSON.parse(localStorage.getItem('idukayTranslateJS')).values[key] || value;
};

export default instance;

export {t};
