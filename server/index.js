const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const routes = require('./router.js')
const cors = require('cors');


const app = express();

// *********************************
// Middleware
// *********************************
app.use(morgan('dev'));
app.use(express.json())



app.use(express.static('./client/dist'));

app.use('/api/leads', routes);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

