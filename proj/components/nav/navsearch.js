var NavSearch = React.createClass({
  render: function() {
    return (
 		<div className="search-navbox">
 			<input type='text' className="text-nav-search"/>
 			<button className="btn-nav-search">Search</button>
 		</div>           
    );
  }
});
module.exports = NavSearch;