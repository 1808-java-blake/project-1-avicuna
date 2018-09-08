import * as React from 'react';
import {EmployeeNav} from "../../employee-nav/employee-nav.component";
import { ProcessedReimbTable } from "./processed-reimbs-table/processed-reimbs-table.component";
import {IProcessedReimbsState, IState} from "../../../reducers";
import { updateId, fetchProcessedReimbursements} from "../../../actions/processed-reimbs/processed-reimbs.actions";
import {connect} from "react-redux";

interface IProps extends IProcessedReimbsState {
    fetchProcessedReimbursements: (id: number) => any,
    updateId: (id: number) => any,
}

export class ProcessedReimbsComponent extends React.Component<IProps, any> {
    public userInfo = JSON.parse(localStorage.getItem('user') || '{}');

    constructor(props: any){
        super(props);
        this.props.updateId(this.userInfo.userRoleId);
        this.props.fetchProcessedReimbursements(this.userInfo.userRoleId);
    }

    public render() {
        return (
            <div>
                <EmployeeNav/>
                <h1 id="pending-reimbs-header">Processed Reimbursements</h1>
                <br></br>
                <br></br>
                <div id="processed-reimbs-container">
                    <ProcessedReimbTable reimbs={this.props.reimbs}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IState) => state.processedReimbs;
const mapDispatchToProps = {
    fetchProcessedReimbursements,
    updateId,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProcessedReimbsComponent);