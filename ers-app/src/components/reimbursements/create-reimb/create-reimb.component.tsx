import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import * as createReimbActions from '../../../actions/create-reimb/create-reimb.actions';
import { ICreateReimbState, IState } from "../../../reducers";
import {EmployeeNav} from "../../employee-nav/employee-nav.component";
import { Button } from 'mdbreact';

interface IProps extends RouteComponentProps<{}>, ICreateReimbState {
    updateAmount: (reimbAmount: number) => any,
    updateSubmitted: (reimbSubmitted: string) => any,
    updateDescription: (reimbDescription: string) => any,
    updateAuthor: (reimbAuthor: number) => any,
    updateTypeId: (reimbTypeId: number) => any,
    submit: (reimbursement: any) => any,
}


class CreateReimbComponent extends React.Component<IProps, any> {
    constructor(props: any){
        super(props);
    }

    public updateAmount = (e: any) => {
        return;
    }

    public updateSubmitted = (e: any) => {
        return;
    }

    public updateDescription = (e: any) => {
        return;
    }

    public updateAuthor = (e: any) => {
        return;
    }

    public updateTypeId = (e: any) => {
        return;
    }

    public submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    public render() {
        const { reimbursement } = this.props;
        return (
            <div>
                <EmployeeNav/>
                <br></br>
                <br></br>
                <div id="create-reimb-container">
                    <div className="card mx-xl-5">
                        <div className="card-body">
                            <form onSubmit={this.submit}>
                                <p className="h4 text-center py-4">Submit Reimbursement</p>
                                <label htmlFor="amount" className="grey-text font-weight-light">Amount</label>
                                <input
                                    type="number"
                                    id="amount"
                                    onChange={this.updateAmount}
                                    className="form-control"/>
                                <br />
                                <label htmlFor="description" className="grey-text font-weight-light">Description</label>
                                <input
                                    type="text"
                                    id="description"
                                    onChange={this.updateDescription}
                                    value={reimbursement.reimbDescription}
                                    className="form-control" />
                                <br />
                                <div className="form-group">
                                    <label htmlFor="sel1" className="grey-text font-weight-light">Select type of reimbursement:</label>
                                    <select className="form-control" onChange={this.updateTypeId} id="sel1">
                                        <option>Lodging</option>
                                        <option>Travel</option>
                                        <option>Food</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <h1>{reimbursement.reimbTypeId}</h1>
                                <div className="text-center py-4 mt-3">
                                    <Button type="submit">Send</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state: IState) => (state.createReimb);
const mapDispatchToProps = {
    updateAmount: createReimbActions.updateAmount,
    updateSubmitted: createReimbActions.updateSubmitted,
    updateDescription: createReimbActions.updateDescription,
    updateAuthor: createReimbActions.updateAuthor,
    updateTypeId: createReimbActions.updateTypeId,
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateReimbComponent);