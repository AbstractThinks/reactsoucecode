var RadioBox = React.createClass({
  handleClick: function (e) {
    e.stopPropagation();
    // e.preventDefault();
    alert("handleClick");
  },
  handleChange : function (e) {
    alert("handleChange");

  },
  getInitialState: function() {
    return {data: [{
    		key:"radio1",id:"radio1",name : 'radio',text :'list1',value:"list1",checked:"checked"
    	},{
    		key:"radio2",id:"radio2",name : 'radio',text :'list2',value:"list2",
    	},{
    		key:"radio3",id:"radio3",name : 'radio',text :'list3',value:"list3",
    	},{
        key:"radio4",id:"radio4",name : 'radio',text :'list4',value:"list4",disabled:"disabled"
      },{
        key:"radio5",id:"radio5",name : 'radio',text :'list5',value:"list5",disabled:"disabled",checked:"checked"
      }]};
  },
  render: function() {
  	var handleClick = this.handleClick;
    var handlechange = this.handleChange;
  	var nodes = this.state.data.map(function (list) {
  		return (
  			<div className="radio-box" key={list.key} onClick={handleClick}>
		    	<input type="radio" id={list.id} name={list.name} value={list.value} defaultChecked={list.checked} disabled={list.disabled} onChange={handlechange}/>
		    	<label htmlFor={list.id}>{list.text}</label>
		    </div>
  		);
  	});
    return (
    	<div>
    		{nodes}
    	</div>
 		        
    );
  }
});
module.exports = RadioBox;