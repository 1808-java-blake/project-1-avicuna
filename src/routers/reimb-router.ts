import express from 'express';
import * as reimbDao from '../dao/reimb-dao';

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