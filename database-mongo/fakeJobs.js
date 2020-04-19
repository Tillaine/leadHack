const faker = require('faker');
const { addMany } = require('./index.js')

let id = 1;
let fakeJob = () => {
  let job = {
  notes: 'Hack Reactor Alumni work here',
  phone: '555-555-5555',
  email: 'Jean.peopleTeam@google.com',
  website: 'https://careers.google.com/teams/people/',
  Position: 'Full-Stack Web Developer',
  currentStep: 'Create Cover Letter',
  nextStep: "Send in Application",
  rating: Math.floor(Math.random() * 6) + 2,
  company: faker.company.companyName(),
  contact: faker.name.findName(),
  dueDate: 2020-06-09
  }
return job;


}
//  console.log('fakeJob', fakeJob())

async function createJobs (num) {
      const Jobs = jobBatch(num)
      await addMany(Jobs)
      .then(results => console.log(results))
      .catch(err => console.log(err))
}

const jobBatch = (num) => {
const jobs = []
  for(let i = 0; i< num; i++){
  let newJob = fakeJob();
  newJob.jobId = id;
  jobs.push(newJob)
  id++;
  }
return jobs;

}


  createJobs(20)

