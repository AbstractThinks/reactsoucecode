var NavButton = React.createClass({
  handleClick : function () {
    if ($('#menu-icon.active').length > 0) {
      $('#menu-icon.active').removeClass('active');
    }
  },
  handleMouseOver: function() {
    
  },
  handleMouseOut: function() {

  }, 
  getInitialState: function() {
    return {data: [{
    		id:"li1",href : '#',text :'list1', children:[{id:"li1li1",href : '#',text :'list1li1'},{id:"li1li12",href : '#',text :'list1li12'}]
    	},{
    		id:"li2",href : '#',text :'list2',children:[{id:"lili2",href : '#',text :'list1li2'}]
    	},{
    		id:"li3",href : '#',text :'list3'
    	}]};
  },
  render: function() {
    function _traversal(data, callback) {
      var nodes = data.map(function(list) {
        if (list.children) {
          return (
            <li key={list.id}>
              <a href={list.href} onClick={callback}>{list.text}</a>
              <ul>
                {_traversal(list.children, callback)}
              </ul>
            </li>
          )
        } else {
          return (
            <li key={list.id}>
              <a href={list.href} onClick={callback}>{list.text}</a>
            </li>
          );
        }
        
      });
      return nodes;
    }
  	var liNodes = _traversal(this.state.data, this.handleClick);
    return (
      <ul className="menu-navbox">
        {liNodes}
      </ul>
    );
  }
});
module.exports = NavButton;