import * as React from 'react';
import {ManagerNav} from "../manager-nav/manager-nav.component";
import {IAllUsersState, IProcessedReimbsState, IState} from "../../reducers";
import {fetchAllUsers, updateId, fetchProcessedReimbursements} from "../../actions/all-users/all-users.actions";
import {connect} from "react-redux";
import {ModalDisplay} from "./employee-history-modal/employee-history-modal.component";

interface IProps extends IAllUsersState, IProcessedReimbsState {
    fetchAllUsers: () => any,
    fetchProcessedReimbursements: (id: number) => any,
    updateId: (id: number) => any,
}


export class ModalPage extends React.Component<IProps, any> {
    constructor(props) {
        super(props);
        this.props.fetchAllUsers();
        this.createModalDisplay = this.createModalDisplay.bind(this);
    }

    public componentDidMount() {
        this.props.fetchAllUsers();
    }

    public createModalDisplay(user: any) {
        // this.props.updateId(user.user_id);
        this.props.fetchProcessedReimbursements(user.user_id);
        return <ModalDisplay userId={user.user_id} firstname={user.firstname} lastname={user.lastname} reimbs={this.props.reimbs}/>
    }

    public createModalDisplays(users: any) {
        if (users) {
            return users.map(this.createModalDisplay);
        }
    }

    public render() {
        return (
            <div>
            <ManagerNav/>
                <br></br>
                <br></br>
                {this.props.users && this.createModalDisplays(this.props.users)}
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => state.allUsers;
const mapDispatchToProps = {
    fetchAllUsers,
    updateId,
    fetchProcessedReimbursements
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalPage)