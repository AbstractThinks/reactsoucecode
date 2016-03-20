var NavSearch = React.createClass({
  handleClick: function (e) {
  	e.stopPropagation();
  	alert(1);
  },
  render: function() {
    return (
 		<div className="search-navbox">
 			<input type='text' className="text-nav-search"/>
 			<button className="btn-nav-search" onClick={this.handleClick}>Search</button>
 		</div>           
    );
  }
});
module.exports = NavSearch;