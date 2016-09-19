var token = "EAAC2ujdxC7UBAE7tfIwm1DJJW2vNwkanQUeOGBiw1RudH1xVw9HQ5ABC69XFZBbZC5ibxs1QKoA1d7iuC3ZCmFf2WF8TS5jZAZBQ9LZCw29SE1BOvvnOKDsTP50VJJAHHZBQZANNDrfSYDUjCe3W3EvNHnXjxVfadSc7o6a4vHWQSwZDZD"
var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {
    res.send('Hello world, I am a chat bot')
})

// for Facebook verification
app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})