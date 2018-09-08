import * as React from 'react';
import { ProcessedReimbCard } from "./processed-reimbs-table/processed-reimbs-table.component";
import {EmployeeNav} from "../../employee-nav/employee-nav.component";

export class ProcessedReimbsComponent extends React.Component<any, any> {

    public render() {
        return (
            <div>
                <EmployeeNav/>
                <h1 id="pending-reimbs-header">Processed Reimbursements</h1>
                <br></br>
                <br></br>
                <div id="processed-reimbs-container">
                    <ProcessedReimbCard/>
                </div>
            </div>
        )
    }
}