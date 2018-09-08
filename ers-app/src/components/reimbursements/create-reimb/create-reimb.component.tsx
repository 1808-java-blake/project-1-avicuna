import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import * as createReimbActions from '../../../actions/create-reimb/create-reimb.actions';
import { ICreateReimbState, IState } from "../../../reducers";
import {EmployeeNav} from "../../employee-nav/employee-nav.component";
import { Button, Input } from 'mdbreact';

interface IProps extends RouteComponentProps<{}>, ICreateReimbState {
    updateAmount: (reimbAmount: number) => any,
    updateSubmitted: (reimbSubmitted: string) => any,
    updateDescription: (reimbDescription: string) => any,
    updateAuthor: (reimbAuthor: number) => any,
    updateTypeId: (reimbTypeId: number) => any,
    submit: (reimbursement: any) => any,
}


class CreateReimbComponent extends React.Component<IProps, any> {
    public userInfo = JSON.parse(localStorage.getItem('user') || '{}');

    constructor(props: any) {
        super(props);
        const reimbSubmitted = new Date();
        let date;
        let day;
        let month;
        const dd = reimbSubmitted.getDate();
        const  mm = reimbSubmitted.getMonth() + 1;
        const yyyy = reimbSubmitted.getFullYear();
        const year = String(yyyy);
        if (dd < 10) {
            day = '0' + String(dd);
        }
        if (mm < 10) {
            month = '0' + String(mm);
        }

        date = month + '/' + day + '/' + year;
        this.props.updateSubmitted(date);
        this.props.updateAuthor(this.userInfo.id);
    }

    public updateAmount = (e: any) => {
        this.props.updateAmount(e.target.value);
    }

    public updateDescription = (e: any) => {
        this.props.updateDescription(e.target.value);
    }

    public updateTypeId = (e: any) => {
        let reimbTypeId;
        switch (e.target.value) {
            case 'Lodging':
                reimbTypeId = 1;
                break;
            case 'Travel':
                reimbTypeId = 2;
                break;
            case 'Food':
                reimbTypeId = 3;
                break;
            case 'Other':
                reimbTypeId = 4;
                break;
        }
        this.props.updateTypeId(reimbTypeId);
    }

    public submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const reimbSubmitted = new Date();
        let date;
        let day;
        let month;
        const dd = reimbSubmitted.getDate();
        const  mm = reimbSubmitted.getMonth() + 1;
        const yyyy = reimbSubmitted.getFullYear();
        const year = String(yyyy);
        if (dd < 10) {
            day = '0' + String(dd);
        }
        if (mm < 10) {
            month = '0' + String(mm);
        }

        date = month + '/' + day + '/' + year;
        this.props.updateSubmitted(date);
        this.props.updateAuthor(this.userInfo.id);
        console.log(this.props.reimbursement.reimbAuthor + " " + this.props.reimbursement.reimbSubmitted);
        fetch('http://localhost:9001/reimbursements', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.props.reimbursement)
        })
            .then(resp => resp.json())
            .then(resp => {
                this.props.history.push('/home');
            })
            .catch(err => {
                console.log(err);
            });
    }

    public render() {
        const {reimbursement} = this.props;
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
                                <Input
                                    group type="number"
                                    id="amount"
                                    onChange={this.updateAmount}
                                    value = {reimbursement.reimbAmount}
                                    className="form-control"/>
                                <br />
                                <label htmlFor="description" className="grey-text font-weight-light">Description</label>
                                <Input
                                    group type="text"
                                    id="description"
                                    onChange={this.updateDescription}
                                    value={reimbursement.reimbDescription}
                                    className="form-control" />
                                <br />
                                <div className="form-group">
                                    <label htmlFor="sel1" className="grey-text font-weight-light">Reimbursement Type:</label>
                                    <select className="browser-default" onChange={this.updateTypeId} id="sel1">
                                        <option disabled selected>Choose your selection</option>
                                        <option>Lodging</option>
                                        <option>Travel</option>
                                        <option>Food</option>
                                        <option>Other</option>
                                    </select>
                                </div>
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