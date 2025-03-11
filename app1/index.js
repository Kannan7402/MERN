const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const cookoieparser = require('cookie-parser')

app.use(cors())
app.use(helmet)
app.use(cookoieparser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>
{
    res.json({message:"Hello from server"})
})

app.listen(process.env.PORT,()=>
{
    console.log('http:localhost')
})