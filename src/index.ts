#!/usr/bin/env node
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('hi therE!')
})

app.listen(3005, () => console.log('listening at port 3005'))