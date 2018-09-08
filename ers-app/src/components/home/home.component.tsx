import * as React from 'react';
import {EmployeeNav} from "../employee-nav/employee-nav.component";
import {IPendingReimbsState, IState} from "../../reducers";
import {updateId, fetchAllPendingReimbs, fetchPendingReimbursements} from "../../actions/pending-reimbs/pending-reimbs.actions";
import {connect} from "react-redux";
import {PendingReimbCard} from "../reimbursements/pending-reimbs/pending-reimbs-card/pending-reimbs-card.component";

interface IProps extends IPendingReimbsState {
    fetchAllPendingReimbs: () => any,
    fetchPendingReimbursements: (id: number) => any,
    updateId: (id: number) => any,
}


export class HomeComponent extends React.Component<IProps, any> {

  public userInfo = JSON.parse(localStorage.getItem('user') || '{}');
  constructor(props: any){
      super(props);
      this.props.updateId(this.userInfo.userRoleId);
      this.props.fetchPendingReimbursements(this.userInfo.userRoleId);
  }

  public createCard(reimb: any[]) {
      return <PendingReimbCard reimb/>
  }

  public render() {
    return (
        <div>
            <EmployeeNav/>
            <h1 id="pending-reimbs-header">Pending Reimbursements</h1>
            <br></br>
            <br></br>
            <div id="home-container">
                <PendingReimbCard />
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state: IState) => state.pendingReimbs;
const mapDispatchToProps = {
    fetchAllPendingReimbs,
    fetchPendingReimbursements,
    updateId
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
