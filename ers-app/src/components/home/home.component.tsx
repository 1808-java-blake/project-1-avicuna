import * as React from 'react';
import {EmployeeNav} from "../employee-nav/employee-nav.component";

export class HomeComponent extends React.Component {

  public render() {
    return (
        <div>
            <EmployeeNav/>
            <div id="home-container">
                Welcome to the Home Component
            </div>
        </div>
    );
  }
}

