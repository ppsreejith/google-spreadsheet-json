const request = require('request');
const csv = require('csvtojson');
const _ = require('lodash');

module.exports = (url, callback) => {
  const json = {};
  csv()
    .fromStream(request.get(url))
    .on('csv',(row) => {
      const data = _.get(json, _.initial(row));
      const value = _.last(row);
      if (_.isEmpty(data)) {
        _.set(json, _.initial(row), _.castArray(value));
      } else {
        data.push(value);
      }
    })
    .on('done',(error) => callback(error, json))
}
