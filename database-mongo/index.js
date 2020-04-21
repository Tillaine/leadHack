const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/jobs', {useNewUrlParser: true});

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
  position: String,
  dueDate: Date

});

const lead = mongoose.model('lead', leadSchema);

const addOne = (job) => {
  const newJob = new lead(job);
  return new Promise((resolve, reject) => {
    newJob.save((err, lead) => {
      if (err) {reject(err)}
      else { resolve (console.log('added', lead))}
    })
  })
}

const addMany = (jobsArr) => {
  return new Promise((resolve, reject) => {
    lead.insertMany(jobsArr, (err) => {
      if (err) {reject(console.log('mongo err', err))}
      else {resolve(console.log(`added ${jobsArr.length} jobs`))}
    });

  })

}
const allLeads = function() {
  return new Promise((resolve, reject) => {
    lead.find({}, function(err, leads) {
      if (err) {
        reject(err);
      } else {
        resolve(leads);
      }
    });

  })
};

const details = function() {
  return new Promise((resolve, reject) => {
    lead.find({}, function(err, leads) {
      if (err) {
        reject(err);
      } else {
        resolve(leads);
      }
    });

  })
};


const getById = function(jobId) {
  new Promise((resolve, reject) => {
    lead.find({jobId}, function(err, leads) {
      if (err) {
        reject(err);
      } else {
        resolve(leads);
      }
    });

  })
};

const update = function(id, update) {
  return new Promise((resolve, reject) => {
    lead.findByIdAndUpdate({_id: id._id}, update, {new:true}, (err, lead) => {
      if (err) {reject(err)}
      else {
        resolve(lead)
        console.log("updated")
      }
    });
  })
};

const deleteOne = (jobId) => {
 return new Promise((resolve, reject) => {
    lead.deleteOne({_id: jobId}, (err) => {
      if (err) { reject(err)}
      else{ resolve (console.log(`job#:${jobId} was deleted`))}
    });
  })
};






module.exports = { details, allLeads, getById, update, addOne, addMany, deleteOne};