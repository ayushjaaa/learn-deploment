const express  = require('express')
const app = express()
app.get('/',(req,res)=>{
    console.log('home')
    res.send('home')
})
module.exports = app