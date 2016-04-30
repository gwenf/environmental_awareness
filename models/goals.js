var mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var goalSchema = new Schema({
  title: String
});

var model = mongoose.model('Goal',goalSchema);

module.exports = model;
