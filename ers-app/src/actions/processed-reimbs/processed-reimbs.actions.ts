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
                type: processedReimbsTypes.PROCESSED_REIMBS,
            });
        })
        .catch((err: any) => {
            console.log(err);
        })
}