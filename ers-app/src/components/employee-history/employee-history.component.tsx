import * as React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import {ManagerNav} from "../manager-nav/manager-nav.component";


class ModalPage extends React.Component<any, any> {
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
                <ManagerNav/>
                <br></br>
                <br></br>
                <h1>Employees:</h1>
                <br></br>
                <Container>
                <Button color="danger" onClick={this.toggle}>John Smith</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        (...)
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                        <Button color="primary">Save changes</Button>
                    </ModalFooter>
                </Modal>
            </Container>
            </div>
        );
    }
}

export default ModalPage;