module.exports = app => {
    require('./databases')(app)
    require('./views')(app)
  }