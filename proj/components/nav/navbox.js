var NavButton = require('./navbutton.js');
var NavSearch = require('./navsearch.js');

var NavBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      <div className="navbox">
        <div className="brand-navbox">NAV BOX</div>
        <NavButton className="menu-navbox" data={this.state.data} />
        <NavSearch className="search-navbox" onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});
module.exports = NavBox;