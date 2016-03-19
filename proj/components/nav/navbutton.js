var NavButton = React.createClass({
  getInitialState: function() {
    return {data: [{
    		id:"li1",href : '#',text :'list1', children:[{id:"li1li",href : '#',text :'list1li',children:[{id:"li1lili",href : '#',text :'list1lili'}]}]
    	},{
    		id:"li2",href : '#',text :'list2'
    	},{
    		id:"li3",href : '#',text :'list3'
    	}]};
  },
  render: function() {
    function _traversal(data) {
      var nodes = data.map(function(list) {
        if (list.children) {
          return (
            <li key={list.id}>
              <a href={list.href}>{list.text}</a>
              <ul>
                {_traversal(list.children)}
              </ul>
            </li>
          )
        } else {
          return (
            <li key={list.id}>
              <a href={list.href}>{list.text}</a>
            </li>
          );
        }
        
      });
      return nodes;
    }
  	var liNodes = _traversal(this.state.data);
    return (
      <ul className="menu-navbox">
        {liNodes}
      </ul>
    );
  }
});
module.exports = NavButton;