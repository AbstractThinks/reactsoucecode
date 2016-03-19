/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***************************!*\
  !*** ./components/app.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ../sass/main.scss */ 1);
	var CommentBox = __webpack_require__(/*! ./commentbox/CommentBox.js */ 3);
	var NavBox = __webpack_require__(/*! ./nav/navbox.js */ 7);
	
	ReactDOM.render(React.createElement(CommentBox, { url: 'http://127.0.0.1:8889' }), document.getElementById('commentbox'));
	ReactDOM.render(React.createElement(NavBox, { url: 'http://127.0.0.1:8889' }), document.getElementById('navbox'));

/***/ },
/* 1 */
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */
/*!*********************************************!*\
  !*** ./components/commentbox/CommentBox.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var CommentForm = __webpack_require__(/*! ./CommentForm.js */ 4);
	var CommentList = __webpack_require__(/*! ./CommentList.js */ 5);
	
	var CommentBox = React.createClass({
	  displayName: 'CommentBox',
	
	  loadCommentsFromServer: function loadCommentsFromServer() {
	    // $.ajax({
	    //   url: this.props.url,
	    //   type: "POST",
	    //   dataType: 'json',
	    //   data:{'test':'test'},
	    //   cache: false,
	    //   success: function(data) {
	    //     this.setState({data: data});
	    //   }.bind(this),
	    //   error: function(xhr, status, err) {
	    //     console.error(this.props.url, status, err.toString());
	    //   }.bind(this)
	    // });
	  },
	  handleCommentSubmit: function handleCommentSubmit(comment) {
	    var comments = this.state.data;
	    comment.id = Date.now();
	    var newComments = comments.concat([comment]);
	    this.setState({ data: newComments });
	    // $.ajax({
	    //   url: this.props.url,
	    //   dataType: 'json',
	    //   type: 'POST',
	    //   data: comment,
	    //   success: function(data) {
	    //     this.setState({data: data});
	    //   }.bind(this),
	    //   error: function(xhr, status, err) {
	    //     this.setState({data: comments});
	    //     console.error(this.props.url, status, err.toString());
	    //   }.bind(this)
	    // });
	  },
	  getInitialState: function getInitialState() {
	    this.loadCommentsFromServer();
	    return { data: [] };
	  },
	  componentDidMount: function componentDidMount() {
	    // this.loadCommentsFromServer();
	    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'commentBox' },
	      React.createElement(
	        'h1',
	        null,
	        'Comments'
	      ),
	      React.createElement(CommentList, { data: this.state.data }),
	      React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
	    );
	  }
	});
	module.exports = CommentBox;

/***/ },
/* 4 */
/*!**********************************************!*\
  !*** ./components/commentbox/CommentForm.js ***!
  \**********************************************/
/***/ function(module, exports) {

	'use strict';
	
	var CommentForm = React.createClass({
	  displayName: 'CommentForm',
	
	  getInitialState: function getInitialState() {
	    return { author: '', text: '' };
	  },
	  handleAuthorChange: function handleAuthorChange(e) {
	    this.setState({ author: e.target.value });
	  },
	  handleTextChange: function handleTextChange(e) {
	    this.setState({ text: e.target.value });
	  },
	  render: function render() {
	    return React.createElement(
	      'form',
	      { className: 'commentForm' },
	      React.createElement(
	        'div',
	        { className: 'row text-center' },
	        React.createElement('input', {
	          type: 'text',
	          placeholder: 'Your name',
	          value: this.state.author,
	          onChange: this.handleAuthorChange
	        })
	      ),
	      React.createElement(
	        'div',
	        { className: 'row text-center' },
	        React.createElement('input', {
	          type: 'text',
	          placeholder: 'Say something...',
	          value: this.state.text,
	          onChange: this.handleTextChange
	        })
	      ),
	      React.createElement(
	        'div',
	        { className: 'row text-center' },
	        React.createElement('textarea', null)
	      ),
	      React.createElement(
	        'div',
	        { className: 'row text-center' },
	        React.createElement('input', { type: 'submit', value: 'Post' })
	      )
	    );
	  }
	});
	module.exports = CommentForm;

/***/ },
/* 5 */
/*!**********************************************!*\
  !*** ./components/commentbox/CommentList.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Comment = __webpack_require__(/*! ./Comment.js */ 6);
	
	var CommentList = React.createClass({
	  displayName: "CommentList",
	
	  render: function render() {
	    var commentNodes = this.props.data.map(function (comment) {
	      return React.createElement(
	        Comment,
	        { author: comment.author, key: comment.id },
	        comment.text
	      );
	    });
	    return React.createElement(
	      "div",
	      { className: "commentList" },
	      commentNodes
	    );
	  }
	});
	module.exports = CommentList;

/***/ },
/* 6 */
/*!******************************************!*\
  !*** ./components/commentbox/Comment.js ***!
  \******************************************/
/***/ function(module, exports) {

	"use strict";
	
	var Comment = React.createClass({
	  displayName: "Comment",
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "comment" },
	      React.createElement(
	        "h2",
	        { className: "commentAuthor" },
	        this.props.author
	      )
	    );
	  }
	});
	module.exports = Comment;

/***/ },
/* 7 */
/*!**********************************!*\
  !*** ./components/nav/navbox.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NavButton = __webpack_require__(/*! ./navbutton.js */ 8);
	var NavSearch = __webpack_require__(/*! ./navsearch.js */ 9);
	
	var NavBox = React.createClass({
	  displayName: 'NavBox',
	
	  getInitialState: function getInitialState() {
	    return { data: [] };
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'navbox' },
	      React.createElement(
	        'div',
	        { className: 'brand-navbox' },
	        'NAV BOX'
	      ),
	      React.createElement(NavButton, { className: 'menu-navbox', data: this.state.data }),
	      React.createElement(NavSearch, { className: 'search-navbox', onCommentSubmit: this.handleCommentSubmit }),
	      React.createElement('span', null)
	    );
	  }
	
	});
	module.exports = NavBox;

/***/ },
/* 8 */
/*!*************************************!*\
  !*** ./components/nav/navbutton.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	var NavButton = React.createClass({
	  displayName: 'NavButton',
	
	  getInitialState: function getInitialState() {
	    return { data: [{
	        id: "li1", href: '#', text: 'list1', children: [{ id: "li1li", href: '#', text: 'list1li', children: [{ id: "li1lili", href: '#', text: 'list1lili' }] }]
	      }, {
	        id: "li2", href: '#', text: 'list2'
	      }, {
	        id: "li3", href: '#', text: 'list3'
	      }] };
	  },
	  render: function render() {
	    function _traversal(data) {
	      var nodes = data.map(function (list) {
	        if (list.children) {
	          return React.createElement(
	            'li',
	            { key: list.id },
	            React.createElement(
	              'a',
	              { href: list.href },
	              list.text
	            ),
	            React.createElement(
	              'ul',
	              null,
	              _traversal(list.children)
	            )
	          );
	        } else {
	          return React.createElement(
	            'li',
	            { key: list.id },
	            React.createElement(
	              'a',
	              { href: list.href },
	              list.text
	            )
	          );
	        }
	      });
	      return nodes;
	    }
	    var liNodes = _traversal(this.state.data);
	    return React.createElement(
	      'ul',
	      { className: 'menu-navbox' },
	      liNodes
	    );
	  }
	});
	module.exports = NavButton;

/***/ },
/* 9 */
/*!*************************************!*\
  !*** ./components/nav/navsearch.js ***!
  \*************************************/
/***/ function(module, exports) {

	"use strict";
	
	var NavSearch = React.createClass({
	  displayName: "NavSearch",
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "search-navbox" },
	      React.createElement("input", { type: "text", className: "text-nav-search" }),
	      React.createElement(
	        "button",
	        { className: "btn-nav-search" },
	        "Search"
	      )
	    );
	  }
	});
	module.exports = NavSearch;

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map