const { client } = require('../mongoClient');
const {db_name}=require('../config')
const db = client.db(db_name);

// used to post(create) new user object in mongo collection.

async function postAsync(payload) {
    try {
        var myobj = { name:"sunny", age:21 };
        let cursor = await db.collection("movies").insertOne(payload)
        return cursor;
    } catch (e) {
       throw e;
    } 
}

// returns user details by name if name is passed or
// returns list of users.
async function getAsync(name) {
    try {
        if (!name) {
            return await db.collection("movies").find().toArray()
        }
        return await db.collection("movies").findOne({ name: name});
    } catch (e) {
        throw e;
    } 
}

module.exports.getAsync = getAsync;
module.exports.postAsync = postAsync;