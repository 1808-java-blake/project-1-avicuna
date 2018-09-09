import * as React from 'react';

import {Card, CardHeader, CardBody, CardTitle, CardText, Button} from 'mdbreact';

export class ManagerReimbCard extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public acceptReimb = (e: any) => {
        return;
    }

    public denyReimb = (e: any) => {
        return;
    }

    public render() {
        return (
            <div id="manager-home-container">
                <Card className="text-center w-75 mb-4">
                    <CardHeader color="unique-color" tag="h3">{this.props.reimb.firstname} {this.props.reimb.lastname}</CardHeader>
                    <CardBody>
                        <CardTitle>{this.props.reimbType}</CardTitle>
                        <CardText>{this.props.reimb.reimb_description}</CardText>
                        <Button color="success">Approve</Button>
                        <Button color="danger">Deny</Button>
                    </CardBody>
                </Card>
            </div>
        )
}

}