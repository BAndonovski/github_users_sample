import React from 'react';
import { Provider } from 'react-redux';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import List from '../containers/list';
import Details from '../containers/details';

export const history = createBrowserHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/:id" component={Details} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
