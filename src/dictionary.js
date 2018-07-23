const _dictionary = (data) => {
  const {id, dictionaries} = data;
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
    return dictionary.id === data.id
  });
  
  dictionary = dictionary || {values: []};
  
  return {
    t: (key, value) => {
      return dictionary.values[key] || value;
    }
  }
};

export default _dictionary
