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
                data.push({
                    title: $(elem).children('a').children('h2.css-1dq8tca.e1xfvim30').text(),
                    summary: $(elem).children('a').children('p.css-1echdzn.e1xfvim31').text(),
                    url: $(elem).children('a').attr('href'),
                    isSaved:false
                    })          
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

    app.get('./saves',(req,res) => {
        Stack.find({isSaved:true})
        .then(r=>res.json(r))
        .catch(e=>console.error(e))
    })

    app.put('./stacks/:id',(req,res) => {
        Stack.findByIdAndUpdate(res.params.id,{isSaved:false})
        .then(r=>res.sendStatus(200))
        .catch(r=>res.sendStatus(404))
    })
    // app.post('/stacks',(req,res) =>{
    //     require('../models').Stack.create({
    //         title: "Hotdog",
    //         summary: "Hotdog",
    //         url: "Hotdog"
    //     })
    //     .then( r => console.log('done')) 
    // })

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
}
