require('../sass/main.scss');
var SearchBox = require('./component/searchbox.js')
var CommentBox = require('./commentbox/CommentBox.js');
var NavBox = require('./nav/navbox.js');

ReactDOM.render(<SearchBox/>,document.getElementById('searchbox'));
ReactDOM.render(<CommentBox url='http://127.0.0.1:8889'/>,document.getElementById('commentbox'));
ReactDOM.render(<NavBox url='http://127.0.0.1:8889'/>,document.getElementById('navbox'));