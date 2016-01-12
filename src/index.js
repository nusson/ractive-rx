// var React = require('react');
var Ractive = require('ractive');
var Rx = require('rx');

var Model = require('./model');
var Root = require('./views/root');

var app = new Root({
  el:'body'
});

Model.subject.subscribe((state) => {
  app.set('state', state)
});
