import {processedReimbsTypes} from "./processed-reimbs.types";

export const updateId = (id: number) => {
    return {
        payload: {
            userId: id
        },
        type: processedReimbsTypes.UPDATE_ID
    }
}

export const fetchProcessedReimbursements = (id: number) => (dispatch: any) => {
    const getPendingReimbursements: any = fetch(`http://localhost:9001/reimbursements/${id}`);
    getPendingReimbursements
        .then((res: any) => {
            return res.json();
        })
        .then((res:any) => {
            const reimbs = [];
            for (const reimb in res) {
                if(reimb){
                    reimbs.push(reimb);
                }
            }
            dispatch({
                payload: {
                    reimbs
                },
                type: processedReimbsTypes.PROCESSED_REIMBS,
            });
        })
        .catch((err: any) => {
            console.log(err);
        })
}