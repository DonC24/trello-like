const express = require('express');

const pool = new pg.Pool(configs);


pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */
const app = express();


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('public'))

/**
 * ===================================
 * Routes
 * ===================================
 */





/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

let onClose = function(){

  console.log("closing");

  server.close(() => {

    console.log('Process terminated');

    pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);