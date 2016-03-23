var CheckBox = React.createClass({
  handleClick: function (e) {
  	e.stopPropagation();
  	alert(1);
  },
  handleChange : function (e) {
  	alert(1);

  },
  getInitialState: function() {
    return {data: [
    	{
    		key:"CheckBox1",
    		id:"CheckBox1",
    		name : 'CheckBox1',
    		text :'CheckBox1',
    		value : "list1",
    		checked:"checked"
    	},{
    		key:"CheckBox2",
    		id:"CheckBox2",
    		name : 'CheckBox2',
    		text :'CheckBox2',
    		value:"list2"
    	},{
    		key:"CheckBox3",
    		id:"CheckBox3",
    		name : 'CheckBox3',
    		text :'CheckBox3',
    		value:"list3", 
    		disabled:"disabled",
    		checked:"checked"
    	},{
    		key:"CheckBox4",
    		id:"CheckBox4",
    		name : 'CheckBox4',
    		text :'CheckBox4',
    		value:"list4", 
    		disabled:"disabled"
    	}
    ]};
  },
  render: function() {
  	var handleChange = this.handleChange;
  	var nodes = this.state.data.map(function (list) {
  		return (
  			<div className="check-box" key={list.key}>
				<input type="checkbox" id={list.id} name={list.name} value={list.value} defaultChecked={list.checked} disabled={list.disabled} onChange={handleChange}/>
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
module.exports = CheckBox;
