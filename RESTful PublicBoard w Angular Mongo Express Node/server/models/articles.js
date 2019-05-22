var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  article: {
    type: String,
    required: true
  },

});

module.exports = mongoose.model("article", schema);
