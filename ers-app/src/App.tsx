import * as React from 'react';
import './App.css';
import './include/bootstrap';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {SignInComponent} from './components/sign-in/sign-in.component';
import { Provider } from 'react-redux';
import { store } from './Store';

class App extends React.Component {
  public render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <div id="main-content-container">
                        <Switch>
                            <Route component={SignInComponent} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
