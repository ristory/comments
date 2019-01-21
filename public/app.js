const fetch = window.fetch
const scrapeData = () =>{
    fetch('/srape',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({})
    })
    .then(_=>window.location.reload())
    .catch(e => console.error(e))
}

const saveStack = id => {
    fetch(`/stack/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    }).then( r=>{
        window.location.reload()
    })
}

const deleteStack = id => {
    fetch(`/stack/${id}`,{
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    }).then(_=>{
        window.location.reload()
    })
}

document.addEventListener('click',event =>{
    event.preventDefault()
    console.log (event.target.id)
    if(event.target.id){
    switch (event.target.id){
        case 'scrapeData':
        scrapeData()
        break
        case 'link':
        window.location = event.target.dataset.url
        break
        case 'saveBTN':
        saveStack(event.target.dataset.id)
        break
        case 'deleteBTN':
        deleteStack(event.target.dataset.id)
        break
        case 'gotoSaved':
        window.location = './saved'
        break
        case 'gotoHome':
        window.location = './'
        break
}
    }})
