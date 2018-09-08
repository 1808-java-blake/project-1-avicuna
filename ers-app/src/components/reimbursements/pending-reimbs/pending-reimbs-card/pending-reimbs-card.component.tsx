import * as React from 'react';
import * as MD from 'mdbreact';

export const PendingReimbCard: React.StatelessComponent<any> = (props: any) => {
    const dataPanel = {
        columns: [
            {
                'field': 'first',
                'label': 'First Name',
                'sort': 'asc'
            },
            {
                'field': 'last',
                'label': 'Last Name',
                'sort': 'asc'
            },
            {
                'field': 'username',
                'label': 'Username',
                'sort': 'asc'
            },
            {
                'field': 'username2',
                'label': 'Username',
                'sort': 'asc'
            },
            {
                'field': 'username3',
                'label': 'Username',
                'sort': 'asc'
            },
            {
                'field': 'username4',
                'label': 'Username',
                'sort': 'asc'
            }
        ],
        rows: [
            {
                'first': 'Mark',
                'last': 'Otto',
                'username': '@mdo',
                'username2': 'Mark',
                'username3': 'Otto',
                'username4': '@mdo'
            },
            {
                'first': 'Jacob',
                'last': 'Thornton',
                'username': '@fat',
                'username2': 'Jacob',
                'username3': 'Thornton',
                'username4': '@fat'
            },
            {
                'first': 'Larry',
                'last': 'the Bird',
                'username': '@twitter',
                'username2': 'Larry',
                'username3': 'the Bird',
                'username4': '@twitter'
            },
            {
                'first': 'Paul',
                'last': 'Topolski',
                'username': '@P_Topolski',
                'username2': 'Paul',
                'username3': 'Topolski',
                'username4': '@P_Topolski'
            },
            {
                'first': 'Larry',
                'last': 'the Bird',
                'username': '@twitter',
                'username2': 'Larry',
                'username3': 'the Bird',
                'username4': '@twitter'
            }
        ]
    };
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