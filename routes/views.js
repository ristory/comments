const {Stack} = require ('../models')
const cheerio = require('cheerio')
const axios = require('axios')

module.exports = app =>{

    app.get('/',(req,res)=>{
        Stack.find({isSaved:false})
        .then(r=>res.render('Home',{stacks: r}))
        .catch(e=>console.error(e))
        
    })

    app.get('/saved',(req,res)=> {
        Stack.find({isSaved:true})
        .then(r=>res.render('Saved',{stacks: r}))
        .catch(e=>console.error(e)) 
    })
    
    app.get('/stacks',(req,res)=>{
        Stack.find({isSaved:false})
        .then(r=>res.json(r))
        .catch(e=>console.error(e))
    })

}