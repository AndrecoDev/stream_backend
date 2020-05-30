const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const stream = require('./api/routes/stream')
const auth = require('./api/routes/auth')
const path = require('path')
const app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "client/build")))

const db = config.get('mongoURI');
// connect MongoDB
mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('MongoDB connected successfully'))
.catch((e)=> console.log('Error Connected ' + e))
//Routes
app.use('/api/stream', stream)
app.use('/api/auth', auth)

const port = 8080
app.listen(port, ()=> console.log('Server listening on port ' + port))

module.exports = app