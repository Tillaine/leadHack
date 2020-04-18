var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var leadSchema = mongoose.Schema({
  jobId: Number,
  notes: String,
  phone: String,
  email: String,
  website: String,
  currentStep: String,
  nextStep: String,
  rating: Number,
  company: String,
  contact: String,

});

var lead = mongoose.model('lead', leadSchema);

var selectAll = function() {
  new Promise(resolve, reject) {
    lead.find({}, function(err, leads) {
      if(err) {
        reject(err);
      } else {
        resolve(leads);
      }
    });

  }
};

var getById = function(jobId) {
  new Promise(resolve, reject) {
    lead.find({jobId}, function(err, leads) {
      if(err) {
        reject(err);
      } else {
        resolve(leads);
      }
    });

  }
};

var update = function(jobId, update) {
  new Promise(resolve, reject) {
    resolve(lead.findOneAndUpdate({jobId}, update, {new: true}});
};

var delete = function(jobId, update) {
  new Promise(resolve, reject) {
    lead.deleteOne({jobId}, (err) => {
      if(err) { reject(err)}
      else{ resolve (console.log(`job#:${jobId} was deleted`))}
    });
};




module.exports.selectAll = {selectAll, getById, update};