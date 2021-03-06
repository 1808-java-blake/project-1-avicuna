import * as React from 'react';
import './App.css';
import './include/mdb';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignInComponent from './components/sign-in/sign-in.component';
import { Provider } from 'react-redux';
import { store } from './Store';
import HomeComponent from "./components/home/home.component";
import ManagerHomeComponent from "./components/manager-home/manager-home.component";
import ModalPage from "./components/employee-history/employee-history.component";
import ProcessedReimbsComponent  from "./components/reimbursements/processed-reimbs/processed-reimbs.component";
import CreateReimbComponent from "./components/reimbursements/create-reimb/create-reimb.component";

class App extends React.Component {
  public render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <div id="main-content-container">
                        <Switch>
                            <Route path="/home" component={HomeComponent} />
                            <Route path="/manager-home" component={ManagerHomeComponent} />
                            <Route path="/employee-history" component={ModalPage} />
                            <Route path="/processed-reimbs" component={ProcessedReimbsComponent} />
                            <Route path="/create-reimb" component={CreateReimbComponent} />
                            <Route path="/sign-in" component={SignInComponent} />
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
