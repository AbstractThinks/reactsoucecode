var NavButton = require('./navbutton.js');
var NavSearch = require('./navsearch.js');

var NavBox = React.createClass({
  handleClick: function (e) {
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
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      <div className="navbox clear-float">
        <div id="menu-icon" className="menu-icon" onClick={this.handleClick}>
          <span className="first"></span>
          <span className="second"></span>
          <span className="third"></span>
        </div>
        <NavButton className="menu-navbox" data={this.state.data} />
        <NavSearch className="search-navbox" onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }

});
module.exports = NavBox;
