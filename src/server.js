const express = require('express')
const path = require('path')
require('dotenv').config()
// import express from 'express'

//console.log(`${process.env.PORT} & ${process.env.HOST_NAME}`);


const app = express() //express app
const port = process.env.PORT || 6969
const host_name = process.env.HOST_NAME
//config template
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//routes
app.get('/', (req, res) => {
    res.render("sample.ejs")
})

app.get('/abc', (req, res) => {
    res.send('abc')
})

//run server on defined port
app.listen(port, () => {
    console.log(`Server running on http://${host_name}:${port}`);

})