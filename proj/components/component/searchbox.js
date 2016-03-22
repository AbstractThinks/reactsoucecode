var SearchBox = React.createClass({
  handleClick: function (e) {
  	e.stopPropagation();
  	alert(1);
  },
  render: function() {
    return (
 		<div className="search-input">
 			<input type='text' placeholder="search..."/>
 			<i className="icon-search"></i>			
 		</div>           
    );
  }
});
module.exports = SearchBox;