// library imports
const { MongoClient } = require('mongodb');

// internal imports
const { mongoUri } = require('./config');

// Declrations
const client = new MongoClient(mongoUri)

// Exports
module.exports.client = client;