const rp = require('request-promise');

module.exports = async function(city = '') {
  if (!city) {
    throw new Error('Поле не должно быть пустым')
    return
  }

  console.log('City:', city)
}