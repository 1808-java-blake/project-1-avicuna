import * as React from 'react';
import {EmployeeNav} from "../employee-nav/employee-nav.component";
import {AllReimbsComponent} from "../reimbursements/all-reimbs/all-reimbs.component";
// import {EmployeeNav} from "../employee-nav/employee-nav.component";

export class HomeComponent extends React.Component {

  public render() {
    return (
        <div>
            <EmployeeNav/>
            <div className="home-container">
                Welcome to the Home Component
                <AllReimbsComponent/>
            </div>
        </div>
    );
  }
}

