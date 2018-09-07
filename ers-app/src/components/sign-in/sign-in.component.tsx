import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import * as signInActions from '../../actions/sign-in/sign-in.actions';
import {ISignInState, IState} from "../../reducers";
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';


interface IProps extends RouteComponentProps<{}>, ISignInState {
    updateError: (message: string) => any
    updatePassword: (password: string) => any,
    updateUsername: (username: string) => any,
    submit: (credentials: any) => any
}


class SignInComponent extends React.Component<IProps, any> {

    constructor(props: any) {
        super(props);
    }

    public submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch('http://localhost:9001/users/login', {
            body: JSON.stringify(this.props.credentials),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
            .then(resp => {
                console.log(resp.status);
                if (resp.status === 401) {
                    this.props.updateError('Invalid Credentials');
                } else if (resp.status === 200) {
                    return resp.json();
                } else {
                    this.props.updateError('Failed to Login at this time');
                }
                throw new Error('Failed to login');
            })
            .then(resp => {
                localStorage.setItem('user', JSON.stringify(resp));
                this.props.history.push('/home');
            })
            .catch(err => {
                console.log(err);
            });
    }
    public passwordChange = (e: any) => {
        this.props.updatePassword(e.target.value);
    }

    public usernameChange = (e: any) => {
        this.props.updateUsername(e.target.value);
    }


    public render() {
        const { errorMessage, credentials } = this.props;

        return (
            <div>
                <h1 id="sign-in-header">Welcome to the Enterprise Reimbursement Software</h1>
                <div id="sign-in-container">
                    <Container>
                        <Row>
                            <Col md="6">
                                <Card>
                                    <CardBody>
                                        <form onSubmit={this.submit}>
                                            <p className="h4 text-center py-4">Please Sign In</p>
                                            <div className="grey-text">
                                                <Input
                                                    id="inputUsername"
                                                    label="Username"
                                                    onChange={this.usernameChange}
                                                    value={credentials.username}
                                                    icon="user"
                                                    group type="text"
                                                    validate error="wrong"
                                                    success="right"/>
                                                <Input
                                                    id="inputPassword"
                                                    label="Password"
                                                    onChange={this.passwordChange}
                                                    value={credentials.password}
                                                    icon="lock"
                                                    group type="password"
                                                    validate error="wrong"
                                                    success="right"/>
                                            </div>
                                            <div className="text-center py-4 mt-3">
                                                <Button color="cyan" type="submit">Sign In</Button>
                                                {errorMessage && <p id="error-message">{errorMessage}</p>}
                                            </div>
                                        </form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => (state.signIn);
const mapDispatchToProps = {
    updateError: signInActions.updateError,
    updatePassword: signInActions.updatePassword,
    updateUsername: signInActions.updateUsername,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);