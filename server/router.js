const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.get('/', controller.getLeads);

router.get('/details', controller.getLeads);

router.post('/', controller.addLead);

router.put('/', controller.updateLead);

// router.delete('/', controller.deleteLead);

module.exports = router;


// UPDATE venicle SET cost = '86000', color = 'lavender' WHERE id='11'
// UPDATE venicle SET cost = "13000" feature_six = "convertable sleeping area" WHERE id='11'