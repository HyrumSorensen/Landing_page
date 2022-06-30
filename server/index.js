const express = require('express')
const path = require('path')
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '67f9782632344b44ae19e3802f4bb89e',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!")


const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})
app.get('/', (req, res) => {
    functionThatDontExist();
    rollbar.critical("Sending a critical error")
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
})

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})