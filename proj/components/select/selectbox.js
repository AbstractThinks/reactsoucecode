var NavSearch = React.createClass({
  handleClick: function (e) {
  	
  },
  render: function() {
    return (
 		<div className="search-navbox">
 			<input type='text' className="text-nav-search"/>
 			<button className="btn-nav-search btn btn-primary btn-search" onClick={this.handleClick}><i className="icon-search"></i></button>
 			
 		</div>           
    );
  }
});
module.exports = NavSearch;