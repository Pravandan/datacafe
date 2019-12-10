const express = require('express')
var compression = require('compression')
const path = require('path')
const app = express()

const publicPath = path.join(__dirname,'..','public')

app.use(compression())
app.use(express.static(publicPath))

app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath,'index.html'))
})

app.listen(3000,() => {console.log("Express Server is up and serving the production build")})