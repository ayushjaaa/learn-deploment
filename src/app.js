const express  = require('express')
const app = express()
const upload = require('./mullter/multer')

app.post('/',upload.single('file'),(req,res)=>{
    console.log('home')
    res.send('home')
})
module.exports = app