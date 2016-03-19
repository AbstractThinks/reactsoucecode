var NavButton = React.createClass({
  getInitialState: function() {
    return {data: [{
    		id:"li1",href : '#',text :'list1', children:[{id:"li1li",href : '#',text :'list1li'}]
    	},{
    		id:"li2",href : '#',text :'list2'
    	},{
    		id:"li3",href : '#',text :'list3'
    	}]};
  },
  render: function() {
  	var liNodes = this.state.data.map(function(list) {
      if (list.children) {
        var children = list.children.map(function(listChildren) {
          return (
            <li key={listChildren.id}>
              <a href={listChildren.href}>{listChildren.text}</a>
            </li>
          )
        });
        return (
          <li key={list.id}>
            <a href={list.href}>{list.text}</a>
            <ul>
              {children}
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
    return (
      <ul className="menu-navbox">
        {liNodes}
      </ul>
    );
  }
});
module.exports = NavButton;