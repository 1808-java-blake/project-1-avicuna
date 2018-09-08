import * as React from 'react';
import * as MD from 'mdbreact';

export const PendingReimbCard: React.StatelessComponent<any> = (props: any) => {
    const dataPanel = {
        columns: [
            {
                'field': 'id',
                'label': 'ID',
                'sort': 'asc'
            },
            {
                'field': 'amount',
                'label': 'Amount',
                'sort': 'asc'
            },
            {
                'field': 'submitted',
                'label': 'Submitted',
                'sort': 'asc'
            },
            {
                'field': 'description',
                'label': 'Description',
                'sort': 'asc'
            },
            {
                'field': 'type',
                'label': 'Type',
                'sort': 'asc'
            },
            {
                'field': 'status',
                'label': 'Status',
                'sort': 'asc'
            }
        ],
        rows: [
            {

            },
        ]
    };

    if(props.reimbs){
        props.reimbs.forEach((reimb: any) =>  {
            let reimbType: any;
            let reimbStatus: any;
            switch (reimb.reimbTypeId) {
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
            switch (reimb.reimbStatusId) {
                case 1:
                    reimbStatus = "Pending";
                    break;
                case 2:
                    reimbStatus = "Accepted";
                    break;
                case 3:
                    reimbStatus = "Denied";
                    break;
            }
            dataPanel.rows.push(
                {
                    'id': reimb.id,
                    'amount': '$' + reimb.reimbAmount,
                    'submitted': reimb.reimbSubmitted,
                    'description': reimb.reimbDescription,
                    'type': reimbType,
                    'status': reimbStatus,
                }
            );
        })
    }

    return (
        <MD.MDBCard narrow>
            <MD.MDBCardBody cascade>
                <MD.MDBTable btn fixed>
                    <MD.MDBTableHead columns={dataPanel.columns} />
                    <MD.MDBTableBody rows={dataPanel.rows} />
                </MD.MDBTable>
            </MD.MDBCardBody>
        </MD.MDBCard>
    )
}