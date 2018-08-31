import express from 'express';
import * as reimbDao from '../dao/reimb-dao';
import {connectionPool} from "../util/connection-util";

export const reimbRouter = express.Router(); // routers represent a subset of routes for the express application

/**
 * Find all reimbursements
 */
reimbRouter.get('', async(req, resp) => {
    try {
        console.log('retrieving all movies');
        let reimbs = await reimbDao.findAll();
        resp.json(reimbs);
    } catch (err) {
        resp.sendStatus(500);
    }
});


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