// var React = require('react');
var Ractive = require('ractive');
var Rx = require('rx');

var Root = require('./views/root');
var Model = require('../model');

var app = new Root({
  el:'body'
});
Model.subject.subscribe((state) => {
  app.set('state', state)
});
