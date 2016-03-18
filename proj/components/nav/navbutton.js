var NavButton = React.createClass({
  getInitialState: function() {
    return {data: [{
    		href : '#',text :'list1'
    	},{
    		href : '#',text :'list2'
    	},{
    		href : '#',text :'list3'
    	}]};
  },
  render: function() {
  	var liNodes = this.state.data.map(function(list) {
      return (
        <li>
          <a href={list.href}>{list.text}</a>
        </li>
      );
    });
    return (
      <ul className="menu-navbox">
        {liNodes}
      </ul>
    );
  }
});
module.exports = NavButton;