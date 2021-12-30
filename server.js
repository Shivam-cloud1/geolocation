 const cors = require('cors')
 const path = require('path')
 const express = require('express')
 const dotenv = require('dotenv')
 var bodyParser = require('body-parser')
 const mongoose = require('mongoose')
 //  const user = require('./model/user')
 const app = express()


   dotenv.config({path:"./config/config.env"})

   app.use(cors())

    

     const DB = 'mongodb+srv://shivam-dwivedi1:shivamdwivedi@cluster0.gbo7d.mongodb.net/project1?retryWrites=true&w=majority'

    mongoose.connect(DB ,{
    useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true,
    useFindAndModify:false
    }).then(()=>{
    console.log(`connection successful`)
    }).catch((err) => console.log(`no connection`))

    app.get('/admin', async (req, res) => {
      const admin = await admin.find()
      res.send({ admin: admin })
    })
    app.get('/admin:user', async (req, res) => {
      const user = await user.find()
      res.send({ user: user })
    })
    
    app.post('/admin', async (req, res) => {
      await admin.create({ admin: req.body.admin })
    
      res.redirect('/')
    })

    app.post('/user', async (req, res) => {
       const userName = req.body.name;
        const   userRole = req.body.role;
          const userLocation = req.body.location;
          const  userMobile = req.body.mobile
      await user.create({ user: req.body.user , user:req.body.name, user: req.body.role, user:req.body.mobile})
    
      res.redirect('/')
    })
    
    app.get('/:admin', async (req, res) => {
      const admin = await admin.findOne({ admin: req.params.admin })
      if (admin == null) return res.sendStatus(404)
    })
    
    app.get('/:user', async (req, res) => {
      const user = await user.findOne({ user: req.params.user })
      if (user == null) return res.sendStatus(404)
    })

   const PORT = process.env.PORT || 3000;
   app.listen(PORT,() =>console.log(`server running on ${PORT}`)) 