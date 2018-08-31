import { connectionPool } from "../util/connection-util";
import { Reimb } from "../model/reimb";
import {reimbConverter} from "../util/reimb-converter";

/**
 * Retreive all movies from the database
 */
export async function findAll(): Promise<Reimb[]> {
    const client = await connectionPool.connect();
    try {
        const resp = await client.query('SELECT * FROM ers_app.reimbursements');
        return resp.rows.map(reimbConverter);
    } finally {
        client.release();
    }
}
