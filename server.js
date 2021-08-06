// library imports
const express = require('express');
const app = express();

// internal imports
const { client } = require('./mongoClient')
const config = require('./config');

// Declarations
const PORT = config.port;

app.use(express.static(__dirname + '/static'));
app.use(express.json());

// connect to mongo and listen to the server.
client.connect(async () => {
    app.listen(PORT, (port=PORT) => {
        console.log(`your server is running at http://localhost:${port}`)
    });
})

// Exports
module.exports.app = app;