const express = require('express')
const app = express()
const apiRouter = require('./routes')

app.use('/api', apiRouter)

app.use(express.json())
app.listen('3000')