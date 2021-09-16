import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import cx from 'classnames'
import store from '@/store/index';
import history from '@/routes/history';
import Home from '@/pages/Home'
import Detail from '@/pages/Detail'

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/log/:fileId'>
            <Detail />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}

render(<App />, document.querySelector('#app'))