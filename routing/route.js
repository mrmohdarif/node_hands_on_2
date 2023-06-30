

// Create a server using express and create route 
// /api/main and send the response explaining what is express

const routes=require('express').Router()
routes.get('/',(req,res)=>{
    res.send({
        Node:"express explanation enter /express"
    })
    })


routes.get('/express',(req,res)=>{
res.send({
    express:"Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. "
})
})
module.exports=routes