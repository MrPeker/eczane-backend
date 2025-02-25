require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())

const { router } = require('./routes')

app.use(cors())

app.use('/api', router)

app.listen(process.env.PORT, () => console.log('App started'))
