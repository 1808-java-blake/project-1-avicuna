import {pendingReimbsTypes} from "./pending-reimbs.types";

export const updateId = (id: number) => {
    return {
        payload: {
            userId: id
        },
        type: pendingReimbsTypes.UPDATE_ID
    }
}

export const fetchAllPendingReimbs = () => (dispatch: any) => {
    const getAllPendingReimbs: any = fetch(`http://localhost:9001/reimbursements/`);
    getAllPendingReimbs
        .then((res: any) => {
            return res.json();
        })
        .then((res: any) => {
            const reimbs: any[] = [];
            res.forEach((reimb: any) => {
                if(reimb && reimb.reimbStatusId === 1){
                    reimbs.push(reimb);
                }
            })
        dispatch({
            payload: {
                reimbs
            },
            type: pendingReimbsTypes.ALL_PENDING_REIMBS,
        });
        })
        .catch((err: any) => {
            console.log(err);
        })
}

export const fetchPendingReimbursements = (id: number) => (dispatch: any) => {
    const getPendingReimbursements: any = fetch(`http://localhost:9001/reimbursements/${id}`);
    getPendingReimbursements
        .then((res: any) => {
            return res.json();
        })
        .then((res: any) => {
            const reimbs: any[] = [];
            res.forEach((reimb: any) => {
                if(reimb && reimb.reimbStatusId === 1){
                    reimbs.push(reimb);
                }
            })
            dispatch({
                payload: {
                    reimbs
                },
                type: pendingReimbsTypes.PENDING_REIMBS,
            });
        })
        .catch((err: any) => {
            console.log(err);
        })
}
