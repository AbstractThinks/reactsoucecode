import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, Redirect, createHashHistory, createBrowserHistory, createMemoryHistory} from 'react-router';
import App from '../component/App';
import About from '../component/About';
import Inbox from '../component/Inbox';
import Message from '../component/Message';


function onAboutEnter(nextState, replaceState){
	console.log("onAboutEnter");
	console.log(nextState);
	console.log(replaceState);
}

function onAboutLeave(...args){
	console.log("onAboutLeave");
	console.log(args);
}


ReactDOM.render((
  <Router history={createHashHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About} onEnter={onAboutEnter} onLeave={onAboutLeave}/>
      <Route path="inbox" component={Inbox}>
        <Route path="/messages/:id" component={Message} />
        <Redirect from="messages/:id" to="/messages/:id" />
      </Route>
    </Route>
  </Router>
), document.getElementById('example'));

