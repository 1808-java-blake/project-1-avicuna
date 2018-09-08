import * as React from 'react';
import {EmployeeNav} from "../../employee-nav/employee-nav.component";
import {CreateReimbFormComponent} from "./create-reimb-form/create-reimb-form.component";

export class CreateReimbComponent extends React.Component<any, any> {
    public render(){
        return (
            <div>
                <EmployeeNav/>
                <br></br>
                <br></br>
                <div id="create-reimb-container">
                    <CreateReimbFormComponent/>
                </div>
            </div>
        )
    }
}