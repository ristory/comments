const React = require("react")
const Home = props => (
<html lang='en'>
<head>
  <meta charSet="UTF-8"/>
  <title>NewYork Title</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
  <link rel="stylesheet" href="/style.css"/>
  <script src="https://code.jquery.com/jquery.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</head>

<body>
<nav className="collapse navbar-collapse navbar navbar-expand-lg navbar-dark bg-primary">
    <a id = "gotoHome" className="navbar-brand" href="/">Mongo Scraper</a>
    <a id = "gotoHome"className="navbar-brand" href="/">Home</a>
    <a id = "gotoSaved" className="navbar-brand" href="#">SaveTitle</a>
      <a href="#"><button id = "scrapeData" className="btn btn-danger btn-lg"><span className="fa fa-plus"></span>Scrap New Title</button></a>
      <a href="#"><button id = "deleteallBTN" className="btn btn-danger btn-lg"><span className="fa fa-times"></span>Clear Aticle</button></a>
</nav>
<div className="jumbotron text-center">
  <div className="overlay">
  </div>
  <div className="background-image">
  </div>
  <div className="caption">
    <h1>Mongo Scraper</h1>
    <p>New York Times Edition</p>
  </div>
</div>
<div className="container-fluid article-container card">
 
  <div className='alert alert-warning text-center'>
    {
      props.stacks.map(stack => <div>
        <a id = 'link' data-url={`https://www.nytimes.com${stack.url}`} href ='#'>{stack.title}</a>
        <p> {stack.summary} </p>
        <div className="form-group">
        <label>Note:</label>
        <textarea className="form-control" id="note" data-id ={stack._id} rows="2"></textarea>
        </div>
        <button id = 'saveBTN' data-id ={stack._id}>Save</button>
        <button id = 'noteBTN' data-id ={stack._id} >Add Note</button>
        <hr/>
        {/* <button id = "deleteBTN" data-id ={stack._id}>Delete</button> */}
        </div>)
    }
  </div>
</div>

<footer className="footer">
  <div className="container">
    <p>New York Times Mongo Scraper</p> 
  </div>
</footer>   
    <div className="row"/>
    <script src='/app.js'/>
</body>

</html>
)
module.exports = Home