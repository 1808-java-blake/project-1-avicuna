import { Request, Response } from 'express';
import express from 'express';
//import * as userDao from '../dao/user-dao';

// all routes defiend with this object will imply /movies
export const userRouter = express.Router(); // routers represent a subset of routes for the express application



userRouter.get('', function (req, res) {
    res.send('Hello World');
})
// /**
//  * Find all users
//  */
// userRouter.get('', async (req: Request, resp: Response) => {
//     try {
//         console.log('retrieving all users');
//         let users = await userDao.findAll();
//         resp.json(users);
//     } catch (err) {
//         console.log(err);
//         resp.sendStatus(500);
//     }
// });