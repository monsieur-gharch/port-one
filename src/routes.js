import React from 'react';
import {IndexRoute , Route , Router , hashHistory} from 'react-router';

import Home from './containers/Home/Home';
import App from './containers/App/App';
import Project from './containers/Project/Project';
import About from './containers/About/About';

//hot-loader
Router.prototype.componentWillReceiveProps = function(nextProps) {
  let components = [];
  function grabComponents(element) {
    // This only works for JSX routes, adjust accordingly for plain JS config
    if (element.props && element.props.component) {
      components.push(element.props.component);
    }
    if (element.props && element.props.children) {
      React.Children.forEach(element.props.children, grabComponents);
    }
  }
  grabComponents(nextProps.routes || nextProps.children);
  components.forEach(React.createElement); // force patching
};


export default(
<Router history={hashHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/project" component={Project}/>
    <Route path="/about" component={About}/>
    </Route>
</Router>
);