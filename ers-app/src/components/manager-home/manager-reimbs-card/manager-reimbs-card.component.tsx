import * as React from 'react';
import {Card, CardHeader, CardBody, CardTitle, CardText, Button} from 'mdbreact';

export class ManagerReimbCard extends React.Component<any, any> {
    public userInfo = JSON.parse(localStorage.getItem('user') || '{}');

    constructor(props: any) {
        super(props);
    }

    public acceptReimb = (e: any) => {
        const reimbId = e.target.value;
        const managerId = this.userInfo.id
        const today = new Date();
        let resolved;
        let day;
        let month;
        const dd = today.getDate();
        const  mm = today.getMonth() + 1;
        const yyyy = today.getFullYear();
        const year = String(yyyy);
        if (dd < 10) {
            day = '0' + String(dd);
        }
        if (mm < 10) {
            month = '0' + String(mm);
        }

        resolved = month + '/' + day + '/' + year;
        const info = {resolved};
        fetch(`http://localhost:9001/reimbursements/${+reimbId}/${managerId}/Accept`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(info)
        })
            .then(resp => {
                if (resp.status !== 201) {
                    throw Error('Failed to update reimbursement status');
                }
            })
            .catch(err => {
                console.log(err);
            });
        return;
    }

    public denyReimb = (e: any) => {
        const reimbId = e.target.value;
        const managerId = this.userInfo.id
        const today = new Date();
        let resolved;
        let day;
        let month;
        const dd = today.getDate();
        const  mm = today.getMonth() + 1;
        const yyyy = today.getFullYear();
        const year = String(yyyy);
        if (dd < 10) {
            day = '0' + String(dd);
        }
        if (mm < 10) {
            month = '0' + String(mm);
        }

        resolved = month + '/' + day + '/' + year;
        const info = {resolved};
        fetch(`http://localhost:9001/reimbursements/${+reimbId}/${managerId}/Deny`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(info)
        })
            .then(resp => {
                if (resp.status !== 201) {
                    throw Error('Failed to update reimbursement status');
                }
            })
            .catch(err => {
                console.log(err);
            });
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
                        <Button color="success" value={this.props.reimb.reimb_id} onClick={this.acceptReimb}>Approve</Button>
                        <Button color="danger" value={this.props.reimb.reimb_id} onClick={this.denyReimb}>Deny</Button>
                    </CardBody>
                </Card>
            </div>
        )
}
}