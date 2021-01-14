const rp = require('request-promise');

module.exports = async function(city = '') {
  if (!city) {
    throw new Error('Поле не должно быть пустым');
  };

  const KEY = '76bfb59c6b191b6ab3fdb43098e359c1';
  const uri = 'http://api.openweathermap.org/data/2.5/weather'; 

  const params = {
    uri,
    qs: {
      appid: KEY,
      q: city,
      units: 'imperial'
    },
    json: true
  };

  try {
    const data = await rp(params)
    const celsius = (data.main.temp - 32) * 5/9

    return {
      weather: `${data.name}: ${celsius.toFixed(0)}`,
      error: null
    }
  } catch (error) {
    return {
      weather: null,
      error: error.error.message
    }
  } 
}