const mongoose = require("mongoose");

const log = require("./log.model");

const gCrud = require("../utils/gCrud");

const format = data => {
  let {_id,action, collection, date} = data;
  return {id: _id, action, collection, date};
};

const arrayFormat = data => data.reduce((accum, current) => [...accum, format(current)], []);

module.exports = gCrud(log, {
  format,
  arrayFormat
});