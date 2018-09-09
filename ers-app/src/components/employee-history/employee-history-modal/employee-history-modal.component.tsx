import * as React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { ProcessedReimbTable} from "../../reimbursements/processed-reimbs/processed-reimbs-table/processed-reimbs-table.component";
import {IState} from "../../../reducers";
import { updateId, fetchProcessedReimbursements} from "../../../actions/processed-reimbs/processed-reimbs.actions";
import {connect} from "react-redux";

export class ModalDisplay extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    public toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }



    public render() {
        return (
            <div>
                <h1>Employees:</h1>
                <br></br>
                <Container>
                    <Button color="danger" onClick={this.toggle}>{this.props.firstname} {this.props.lastname}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} size={"fluid"}>
                        <ModalHeader toggle={this.toggle}>Reimbursement History</ModalHeader>
                        <ModalBody>
                            <div id="processed-reimbs-container">
                                {this.props.reimbs && <ProcessedReimbTable reimbs={this.props.reimbs}/>}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                        </ModalFooter>
                    </Modal>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => state.processedReimbs;
const mapDispatchToProps = {
    fetchProcessedReimbursements,
    updateId,
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalDisplay)