var Ractive = require('ractive');
var Intent = require('../intent');
var Model = require('../model');

var Root = Ractive.extend({
  template: '<div> <h1>Hello</h1>  <p>counter: {{state.counter}}</p>  <button on-click="increment">increment</button></div>',
  data: function(){
    return {
      state:{
        counter: 0
      }
    }
  },
  oninit() {
    this.on('increment', function () {
      Intent.incrementCounter();
    });
    console.log(Intent);

    Model.subject.subscribe((state) => {
      this.set('state', state)
    });
  }
});

module.exports = Root;
