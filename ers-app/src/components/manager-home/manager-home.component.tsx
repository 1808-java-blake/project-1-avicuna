import * as React from 'react';
import {ManagerNav} from "../manager-nav/manager-nav.component";
import {IPendingReimbsState, IState} from "../../reducers";
import {fetchAllPendingReimbs} from "../../actions/pending-reimbs/pending-reimbs.actions";
import {connect} from "react-redux";
import {ManagerReimbCard} from "./manager-reimbs-card/manager-reimbs-card.component";

interface IProps extends IPendingReimbsState {
    fetchAllPendingReimbs: () => any
}

export class ManagerHomeComponent extends React.Component<IProps, any> {
    public userInfo = JSON.parse(localStorage.getItem('user') || '{}');

    constructor(props: any){
        super(props);
    }

    public componentDidMount() {
        this.props.fetchAllPendingReimbs();
    }

    public componentDidUpdate() {
        this.props.fetchAllPendingReimbs();
    }


    public createReimbCard = (reimb: any) => {
        let reimbType;
        switch (reimb.reimb_type_id) {
            case 1:
                reimbType = "Lodging";
                break;
            case 2:
                reimbType = "Travel";
                break;
            case 3:
                reimbType = "Food";
                break;
            case 4:
                reimbType = "Other";
                break;
        }
        return <ManagerReimbCard reimb={reimb} reimbType={reimbType} reimbId={reimb.reimb_id}/>;
}

    public createReimbCards = (reimbs: any) => {
        if(reimbs) {
            return reimbs.map(this.createReimbCard);
        }
    }

    public render() {
        return (
            <div>
                <ManagerNav/>
                <h1 id="pending-reimbs-header">Submitted Reimbursements</h1>
                <br></br>
                <br></br>
                {this.createReimbCards(this.props.reimbs)}
            </div>
        )
    }
}

const mapStateToProps = (state: IState) => state.pendingReimbs;
const mapDispatchToProps = {
    fetchAllPendingReimbs,
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerHomeComponent)