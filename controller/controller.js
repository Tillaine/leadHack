const mongo = require('../database-mongo/index.js');

const getLeads = (req, res) => {
  mongo.allLeads()
  .then(leads => {
    return leads.map(lead => {
      lead._id = lead.id.toString()
      return lead;
    })
  })
  .then(leads => {
    res.send(leads)
  })
  .catch(err => console.log('db err', err))
}

const getDetails = (req, res) => {
  mongo.details()
  .then(leads => {
    return leads.map(lead => {
      lead._id = lead.id.toString()
      return lead;
    })
  })
  .then(leads => {
    res.send(leads)
  })
  .catch(err => console.log('db err', err))
}

const addLead = (req, res) => {
  console.log(req.body)
  mongo.addOne(req.body)
  .then(dbRes => {
    console.log('dbRes from controller', dbRes)
  })
  .then(dbRes => {
    getLeads(req, res)
  })
  .catch(err => console.log('db err', err))
}

module.exports = { getLeads, addLead }

