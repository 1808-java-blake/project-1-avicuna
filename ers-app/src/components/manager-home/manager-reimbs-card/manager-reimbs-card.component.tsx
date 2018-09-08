import * as React from 'react';
import * as MD from 'mdbreact';

export const ManagerReimbCard: React.StatelessComponent<any> = (props: any) => {
    return (
        <MD.Card className="text-center w-100 mb-4">
            <MD.CardHeader color="unique-color" tag="h3">John Smith</MD.CardHeader>
            <MD.CardBody>
                <MD.CardTitle>Special title treatment</MD.CardTitle>
                <MD.CardText>With supporting text below as a natural lead-in to additional content.</MD.CardText>
                <MD.Button color="success">Approve</MD.Button>
                <MD.Button color="danger">Deny</MD.Button>
            </MD.CardBody>
        </MD.Card>
    )
}