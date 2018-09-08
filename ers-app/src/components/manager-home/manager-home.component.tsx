import * as React from 'react';
import {ManagerNav} from "../manager-nav/manager-nav.component";
import {ManagerReimbCard} from "./manager-reimbs-card/manager-reimbs-card.component";

export class ManagerHomeComponent extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <ManagerNav/>
                <h1 id="pending-reimbs-header">Submitted Reimbursements</h1>
                <br></br>
                <br></br>
                <div id="manager-home-container">
                    <ManagerReimbCard/>
                </div>
            </div>
        )
    }
}