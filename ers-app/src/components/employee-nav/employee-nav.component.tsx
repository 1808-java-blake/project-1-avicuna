import * as React from 'react';
import logo from "../../incognizant_logo.png";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';

export class EmployeeNav extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    public onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    public render() {
        return (
                <Navbar dark color="unique-color" expand="md" scrolling>
                    <NavbarBrand >
                        <img className="img-adjust-position rev-logo" src={logo} alt="ERS"/>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                            <NavItem>
                                <NavLink to="/home">Pending</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/processed-reimbs">Processed</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/create-reimb">Submit Reimbursement</NavLink>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem>
                                <NavLink to="/sign-in">Log Out</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
        );
    }
}
