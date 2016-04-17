var Redux = require('redux');
var todoReducer = require('../reducer/reducer.js');

var store = Redux.createStore(todoReducer);

module.exports = store;