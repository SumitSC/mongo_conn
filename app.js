// import
const { app } = require('./server')
const { getAsync, postAsync } = require('./models/users')

// define routes
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/static/homepage/index.html');
})

app.get("/aboutus", (req, res) => {
    res.sendFile(__dirname + '/static/aboutus/index.html');
})

app.get("/users", async (req, res) => {
    try {
        let results = []
        await getAsync().then(res => { if(res) results = res});
        res.send(results);
    } catch (error) {
        console.log(e);
        return e;
    }
})

app.get('/users/:name', async function (req, res) {
    try {
        let results = []
        await getAsync(req.params.name).then(res => { if(res) results = res} );
        res.send(results);
    } catch (e) {
        console.log(e);
        return e;
    }

})

app.post("/users", async (req, res) => {
    try {
        let results = []
        results =await postAsync(req.body)
        res.send(results)
    } catch (error) {
        console.log(e);
        return e;
    }
})
