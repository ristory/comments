const {Stack} = require ('../models')
var axios = require("axios");
var cheerio = require("cheerio");

async function getStacks(){
    let stacks = await new Promise((resolve, reject) => {
        axios.get('http://www.nytimes.com/section/technology')
        .then( r => r.data)
        .then( r => {   
            let data = []
            const $ = cheerio.load(r)
            // console.log($('h2.css-1dq8tca.e1xfvim30').text())
            // console.log($('p.css-1echdzn.e1xfvim31').text())
            // console.log($('div.css-4jyr1y').children('a').attr('href'))
            $('div.css-4jyr1y').each((i, elem)=> {
                let stack = {}
                stack = {
                    title: $(elem).children('a').children('h2.css-1dq8tca.e1xfvim30').text(),
                    summary: $(elem).children('a').children('p.css-1echdzn.e1xfvim31').text(),
                    url: $(elem).children('a').attr('href'),
                    comment: "",
                    isSaved:false
                }  
                    data.push(stack)
            })
            resolve(data)
    })  
})
return stacks
}
module.exports = app =>{
    app.get('./stacks',(req,res) => {
        Stack.find({isSaved:false})
        .then(r=>res.json(r))
        .catch(e=>console.error(e))
    })

    app.put('/stack/:id',(req,res) => {
        Stack.findByIdAndUpdate(req.params.id,{isSaved:true})
        .then(r=>res.sendStatus(200))
        .catch(r=>res.sendStatus(404))
    })

    app.put('/note/:id',(req,res) => {
        Stack.findByIdAndUpdate(req.params.id,{comment: req.params.note})
        .then(r=>res.sendStatus(200))
        .catch(r=>res.sendStatus(404))
    })

      app.post('/srape',(req,res) =>{
        getStacks()
        .then(r=>{
            Stack.deleteMany({isSaved:false})
            .then(_ => {
            Stack.create(r)
            .then(_ =>res.json(r))
        })
        })
        .catch(e=>res.send(e))
        
    })
    

    app.delete('/stack/:id',(req, res)=>{
        Stack.findByIdAndDelete(req.params.id)
        .then(r=>res.sendStatus(200))
        .catch(r=>res.sendStatus(404))
    })

    app.delete('/alldelete',(req, res)=>{
        Stack.deleteMany()
        .then(r=>res.sendStatus(200))
        .catch(r=>res.sendStatus(404))
    })
}
