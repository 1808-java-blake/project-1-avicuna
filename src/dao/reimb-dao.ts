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

/**
 * Add a new movie to the DB
 * @param movie
 */
export async function createReimb(reimb): Promise<number> {
    const client = await connectionPool.connect();
    try {
        const resp = await client.query(
            `INSERT INTO ers_app.reimbursements 
        (reimb_amount, reimb_description, reimb_author, reimb_status_id, reimb_type_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING reimb_id`, [reimb.reimbAmount, reimb.reimbDescription, reimb.reimbAuthor, 1, reimb.reimbTypeId]);
        return resp.rows[0].reimb_id;
    } finally {
        client.release();
    }
}
