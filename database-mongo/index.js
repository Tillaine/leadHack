const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const leadSchema = mongoose.Schema({
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

const lead = mongoose.model('lead', leadSchema);

const addOne = (job) => {
  const newJob = job;
  return new Promise(resolve, reject) => {
    newJob.save((err) => {
      if (err) {reject(err)}
      else { resolve (console.log('added', job))}
    })
  }
}

const addMany = (jobsArr) => {
  return nwe Promise(resolve, reject) => {
    lead.insertMany(jobsArr, (err) => {
      if (err) {reject (err)}
      else {resolve (console.log(`added ${jobsArr.length} jobs`))}
    });

  }
}

const selectAll = function() {
  new Promise(resolve, reject) {
    lead.find({}, function(err, leads) {
      if (err) {
        reject(err);
      } else {
        resolve(leads);
      }
    });

  }
};

const getById = function(jobId) {
  new Promise(resolve, reject) {
    lead.find({jobId}, function(err, leads) {
      if (err) {
        reject(err);
      } else {
        resolve(leads);
      }
    });

  }
};

const update = function(jobId, update) {
  new Promise(resolve, reject) {
    resolve(lead.findOneAndUpdate({jobId}, update, {new: true}});
};

const delete = function(jobId, update) {
  new Promise(resolve, reject) {
    lead.deleteOne({jobId}, (err) => {
      if (err) { reject(err)}
      else{ resolve (console.log(`job#:${jobId} was deleted`))}
    });
};






module.exports.selectAll = {selectAll, getById, update};