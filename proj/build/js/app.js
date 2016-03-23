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
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../sass/main.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var SearchBox = __webpack_require__(/*! ./component/searchbox.js */ 3);
	var RadioBox = __webpack_require__(/*! ./component/radiobox.js */ 11);
	var CommentBox = __webpack_require__(/*! ./commentbox/CommentBox.js */ 4);
	var NavBox = __webpack_require__(/*! ./nav/navbox.js */ 8);
	
	ReactDOM.render(React.createElement(SearchBox, null), document.getElementById('searchbox'));
	ReactDOM.render(React.createElement(RadioBox, null), document.getElementById('radiobox'));
	ReactDOM.render(React.createElement(CommentBox, { url: 'http://127.0.0.1:8889' }), document.getElementById('commentbox'));
	ReactDOM.render(React.createElement(NavBox, { url: 'http://127.0.0.1:8889' }), document.getElementById('navbox'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/*!*******************************************!*\
  !*** ./components/component/searchbox.js ***!
  \*******************************************/
/***/ function(module, exports) {

	"use strict";
	
	var SearchBox = React.createClass({
	  displayName: "SearchBox",
	
	  handleClick: function handleClick(e) {
	    e.stopPropagation();
	    alert(1);
	  },
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "search-input" },
	      React.createElement("input", { type: "text", placeholder: "search..." }),
	      React.createElement("i", { className: "icon-search" })
	    );
	  }
	});
	module.exports = SearchBox;

/***/ },
/* 4 */
/*!*********************************************!*\
  !*** ./components/commentbox/CommentBox.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var CommentForm = __webpack_require__(/*! ./CommentForm.js */ 5);
	var CommentList = __webpack_require__(/*! ./CommentList.js */ 6);
	
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
/* 5 */
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
	        React.createElement('input', { type: 'submit', className: 'btn btn-primary', value: 'Post' })
	      )
	    );
	  }
	});
	module.exports = CommentForm;

/***/ },
/* 6 */
/*!**********************************************!*\
  !*** ./components/commentbox/CommentList.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Comment = __webpack_require__(/*! ./Comment.js */ 7);
	
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
/* 7 */
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
/* 8 */
/*!**********************************!*\
  !*** ./components/nav/navbox.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NavButton = __webpack_require__(/*! ./navbutton.js */ 9);
	var NavSearch = __webpack_require__(/*! ./navsearch.js */ 10);
	
	var NavBox = React.createClass({
	  displayName: 'NavBox',
	
	  handleClick: function handleClick(e) {
	    var $this = $(e.target);
	    if (!$this.hasClass('menu-icon')) {
	      $this = $this.parent();
	    }
	    if ($this.hasClass("active")) {
	      $this.removeClass("active");
	    } else {
	      $this.addClass("active");
	    }
	  },
	  getInitialState: function getInitialState() {
	    return { data: [] };
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'navbox clear-float' },
	      React.createElement(
	        'div',
	        { id: 'menu-icon', className: 'menu-icon', onClick: this.handleClick },
	        React.createElement('span', { className: 'first' }),
	        React.createElement('span', { className: 'second' }),
	        React.createElement('span', { className: 'third' })
	      ),
	      React.createElement(NavButton, { className: 'menu-navbox', data: this.state.data }),
	      React.createElement(NavSearch, { className: 'search-navbox', onCommentSubmit: this.handleCommentSubmit })
	    );
	  }
	
	});
	module.exports = NavBox;

/***/ },
/* 9 */
/*!*************************************!*\
  !*** ./components/nav/navbutton.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	var NavButton = React.createClass({
	  displayName: 'NavButton',
	
	  handleClick: function handleClick() {
	    if ($('#menu-icon.active').length > 0) {
	      $('#menu-icon.active').removeClass('active');
	    }
	  },
	  handleMouseOver: function handleMouseOver() {},
	  handleMouseOut: function handleMouseOut() {},
	  getInitialState: function getInitialState() {
	    return { data: [{
	        id: "li1", href: '#', text: 'list1', children: [{ id: "li1li1", href: '#', text: 'list1li1' }, { id: "li1li12", href: '#', text: 'list1li12' }]
	      }, {
	        id: "li2", href: '#', text: 'list2', children: [{ id: "lili2", href: '#', text: 'list1li2' }]
	      }, {
	        id: "li3", href: '#', text: 'list3'
	      }] };
	  },
	  render: function render() {
	    function _traversal(data, callback) {
	      var nodes = data.map(function (list) {
	        if (list.children) {
	          return React.createElement(
	            'li',
	            { key: list.id },
	            React.createElement(
	              'a',
	              { href: list.href, onClick: callback },
	              list.text
	            ),
	            React.createElement(
	              'ul',
	              null,
	              _traversal(list.children, callback)
	            )
	          );
	        } else {
	          return React.createElement(
	            'li',
	            { key: list.id },
	            React.createElement(
	              'a',
	              { href: list.href, onClick: callback },
	              list.text
	            )
	          );
	        }
	      });
	      return nodes;
	    }
	    var liNodes = _traversal(this.state.data, this.handleClick);
	    return React.createElement(
	      'ul',
	      { className: 'menu-navbox' },
	      liNodes
	    );
	  }
	});
	module.exports = NavButton;

/***/ },
/* 10 */
/*!*************************************!*\
  !*** ./components/nav/navsearch.js ***!
  \*************************************/
/***/ function(module, exports) {

	"use strict";
	
	var NavSearch = React.createClass({
	  displayName: "NavSearch",
	
	  handleClick: function handleClick(e) {
	    e.stopPropagation();
	    alert(1);
	  },
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "search-navbox" },
	      React.createElement("input", { type: "text", className: "text-nav-search" }),
	      React.createElement(
	        "button",
	        { className: "btn-nav-search btn btn-primary btn-search", onClick: this.handleClick },
	        React.createElement("i", { className: "icon-search" })
	      )
	    );
	  }
	});
	module.exports = NavSearch;

/***/ },
/* 11 */
/*!******************************************!*\
  !*** ./components/component/radiobox.js ***!
  \******************************************/
/***/ function(module, exports) {

	"use strict";
	
	var RadioBox = React.createClass({
	  displayName: "RadioBox",
	
	  handleClick: function handleClick(e) {
	    var $this = $(e.currentTarget);
	    if (!$this.attr("checked")) {
	      $this.parent().find("[checked='checked']").removeAttr("checked");
	      $this.attr("checked", "checked");
	    }
	  },
	  getInitialState: function getInitialState() {
	    return { data: [{
	        id: "radio1", name: 'radio', text: 'list1', value: "list1"
	      }, {
	        id: "radio2", name: 'radio', text: 'list2', value: "list2"
	      }, {
	        id: "radio3", name: 'radio', text: 'list3', value: "list3"
	      }] };
	  },
	  render: function render() {
	    var handleClick = this.handleClick;
	    var nodes = this.state.data.map(function (list) {
	      return React.createElement(
	        "div",
	        { className: "radio-box", key: list.id, onClick: handleClick },
	        React.createElement("input", { type: "radio", name: list.name, value: list.value }),
	        React.createElement(
	          "span",
	          { className: "outer" },
	          React.createElement("span", { className: "inner" })
	        ),
	        React.createElement(
	          "label",
	          null,
	          list.text
	        )
	      );
	    });
	    return React.createElement(
	      "div",
	      null,
	      nodes
	    );
	  }
	});
	module.exports = RadioBox;

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map