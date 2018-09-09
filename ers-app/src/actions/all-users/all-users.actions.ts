import { allUsersTypes } from "./all-users.types";

export const fetchAllUsers = () => (dispatch: any) => {
    const getAllUsers: any = fetch('http://localhost:9001/users/',
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
    getAllUsers
        .then((res: any) => {
            return res.json();
        })
        .then((res: any) => {
            const users: any[] = [];
            res.forEach((user: any) => {
                if(user){
                    users.push(user);
                }
            })
            dispatch({
                payload: {
                    users
                },
                type: allUsersTypes.ALL_USERS,
            });
        })
        .catch((err: any) => {
            console.log(err);
        })
}