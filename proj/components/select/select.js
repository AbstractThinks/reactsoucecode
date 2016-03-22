var NavSearch = React.createClass({
  getInitialState: function() {
    return {data: [{
    		id:"li1",href : '#',text :'list1'
    	},{
    		id:"li2",href : '#',text :'list2'
    	},{
    		id:"li3",href : '#',text :'list3'
    	}]};
  },
  render: function() {
  	var nodes = data.map(function(this.state.data) {
  		<li key={this.state.data.id}>
          <a href={this.state.data.href}><div>{this.state.data.text}</div></a>
        </li>
  	}
    return (
 		<div className="search-navbox">
 			<input type="text"/>
 			<ul>
 				{nodes}
 			</ul>	
 		</div>           
    );
  }
});
module.exports = NavSearch;