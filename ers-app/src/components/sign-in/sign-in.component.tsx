import * as React from 'react';
// import { RouteComponentProps } from 'react-router';
// import { connect } from 'react-redux';


export class SignInComponent extends React.Component<any, any> {
    //
    // constructor(props: any) {
    //     super(props);
    // }
    //
    //
    // public submit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     fetch('http://localhost:3000/users/login', {
    //         body: JSON.stringify(this.props.credentials),
    //         credentials: 'include',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         method: 'POST',
    //     })
    //         .then(resp => {
    //             console.log(resp.status)
    //             if (resp.status === 401) {
    //                 this.props.updateError('Invalid Credentials');
    //             } else if (resp.status === 200) {
    //                 return resp.json();
    //             } else {
    //                 this.props.updateError('Failed to Login at this time');
    //             }
    //             throw new Error('Failed to login');
    //         })
    //         .then(resp => {
    //             localStorage.setItem('user', JSON.stringify(resp));
    //             this.props.history.push('/home');
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }
    // public passwordChange = (e: any) => {
    //     this.props.updatePassword(e.target.value);
    // }
    //
    // public usernameChange = (e: any) => {
    //     this.props.updateUsername(e.target.value);
    // }


    public render() {
        return (
            <h1>This is the sign in component</h1>
        );
    }
}