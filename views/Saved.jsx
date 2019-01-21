const React = require("React")
const Saved = props =>

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
      <a href="#"><button  className="btn btn-danger btn-lg"><span className="fa fa-times"></span>Clear Aticle</button></a>
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
<div className="container-fluid article-container">
 
  <div className='alert alert-warning text-center'>
    <h4>Uh Oh. Looks like we don't have any new articles.</h4>
    {
      props.stacks.map(stack => <div>
        <a id = 'link' href = {`https://www.nytimes.com${stack.url}`}>{stack.title} </a>
        <p> {stack.summary} </p>
        <button id = 'saveBTN' data-id ={stack._id}>Save</button>
        <button id = "deleteBTN" data-id ={stack._id}>Delete</button>
        </div>)
    }
  </div>
  <div className="card">
    <div className="card-header text-center">
      <h3>What Would You Like To Do?</h3>
    </div>
    <div className="card-body text-center">
      <h4>
        <a className="scrape-new">Try Scraping New Articles</a>
      </h4>
      <h4>
        <a href="/saved">Go to Saved Articles</a>
      </h4>
    </div>
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
module.exports = Saved