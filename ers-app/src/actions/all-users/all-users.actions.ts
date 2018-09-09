import { allUsersTypes } from "./all-users.types";

export const updateId = (id: number) => {
    return {
        payload: {
            userId: id
        },
        type: allUsersTypes.UPDATE_ID
    }
}

export const fetchAllUsers = () => (dispatch: any) => {
    const getAllUsers: any = fetch('http://localhost:9001/users/');
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

export const fetchProcessedReimbursements = (id: number) => (dispatch: any) => {
    const getProcessedReimbursements: any = fetch(`http://localhost:9001/reimbursements/${id}`);
    getProcessedReimbursements
        .then((res: any) => {
            return res.json();
        })
        .then((res:any) => {
            const reimbs: any[] = [];
            res.forEach((reimb: any) => {
                if(reimb && reimb.reimbStatusId !== 1){
                    reimbs.push(reimb);
                }
            })
            dispatch({
                payload: {
                    reimbs
                },
                type: allUsersTypes.PROCESSED_REIMBS,
            });
        })
        .catch((err: any) => {
            console.log(err);
        })
}