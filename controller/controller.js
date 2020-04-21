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

const updateLead = (req, res) => {
  console.log(req.body)
  const updates = req.body;
  const filter = {_id: updates._id}
  delete updates._id;


  mongo.update(filter, updates)
  .then(dbRes => {
    console.log('dbRes from controller', dbRes)
  })
  .then(dbRes => {
    getLeads(req, res)
  })
  .catch(err => console.log('db err', err))
}


const deleteLead = (req, res) => {
  console.log(req.query)
  mongo.deleteOne(req.query.id)
  .then(dbRes => {
    console.log('dbRes from controller', dbRes)
  })
  .then(dbRes => {
    getLeads(req, res)
  })
  .catch(err => console.log('db err', err))

}

module.exports = { getLeads, addLead, updateLead, deleteLead }

