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
    console.log('leads from controller', leads)
    res.send(leads)
  })
  .catch(err => console.log('db err', err))
}

module.exports = { getLeads }

