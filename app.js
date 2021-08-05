const express = require("express")
const app = express()
var port = process.env.PORT  || 9999
app.get('/',(req,res)=>{
    res.send('My Express app deploed')
})

app.listen(port,()=>{
    console.log('server started on port', port)

})