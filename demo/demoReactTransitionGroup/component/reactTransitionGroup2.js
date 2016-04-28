import React from 'react';
import { render, findDOMNode } from 'react-dom'; 
import ReactTransitionGroup from 'react-addons-transition-group';

class Box extends React.Component {
  componentDidMount(){
    console.log("componentDidMount")
  }
  // componentWillAppear(callback) {
  //   console.log("componentWillAppear")
  // }
  // componentDidAppear() {
  //   console.log("componentDidAppear")
  // }
  componentWillEnter (callback) {
    console.log("componentWillEnter")
    const el = findDOMNode(this);
    console.log(el)
    TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }
  componentWillUnmount () {
    console.log("componentWillUnmount")
  }
  componentWillLeave (callback) {
    console.log("componentWillLeave")
    const el = findDOMNode(this);
    console.log(el)
 
    TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});

  }

   componentDidLeave () {
    console.log("componentDidLeave")
  }

  render () {
    return <div className="box">its a test</div>
  }
}

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.displayName = '';
    this.state = {shouldShowBox: true}
  }

  toggleBox(){
    this.setState({
      shouldShowBox: !this.state.shouldShowBox
    });
  };

  render () {

    let {shouldShowBox} = this.state
    return <div className="page">
      {
        <ReactTransitionGroup>
        { shouldShowBox?<Box/>:null}
        </ReactTransitionGroup>
      }
      

      <button
        className="toggle-btn"
        onClick={this.toggleBox.bind(this)}
      >
        toggle
      </button>
    </div>;
  }
}

render(<Page/>, document.querySelector('#container'));