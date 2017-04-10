import React from 'react';
import ReactDom, {render} from 'react-dom';
import {Router, Route} from 'react-router';
import { HashRouter } from 'react-router-dom';
import {Layout1} from '../../components/layout';
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

class Main extends React.Component {
  render() {
    return (
      <HashRouter history={history}>
        <div>
          <Route path="/" component={Layout1} />
          <Route path="/sample" component={require('react-proxy-loader!./Sample')} />
          <Route path="/sample2" component={require('react-proxy-loader!./Sample')} />
        </div>
      </HashRouter>
    )
  }
}
render(
  <Main/>,
  document.getElementById('application')
)
