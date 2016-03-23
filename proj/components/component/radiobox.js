var RadioBox = React.createClass({
  handleClick: function (e) {
  	var $this = $(e.currentTarget);
  	if (!$this.attr("checked")) {
  		$this.parent().find("[checked='checked']").removeAttr("checked");
  		$this.attr("checked","checked");
  	}
  },
  getInitialState: function() {
    return {data: [{
    		id:"radio1",name : 'radio',text :'list1',value:"list1"
    	},{
    		id:"radio2",name : 'radio',text :'list2',value:"list2"
    	},{
    		id:"radio3",name : 'radio',text :'list3',value:"list3"
    	}]};
  },
  render: function() {
  	var handleClick = this.handleClick;
  	var nodes = this.state.data.map(function (list) {
  		return (
  			<div className="radio-box" key={list.id} onClick={handleClick}>
		    	<input type="radio" name={list.name} value={list.value}/>
		    	<span className="outer">
		    		<span className="inner">
		    		</span>
		    	</span>
		    	<label>{list.text}</label>
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