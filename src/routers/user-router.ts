import { Request, Response } from 'express';
import express from 'express';
import * as userDao from '../dao/user-dao';

// all routes defiend with this object will imply /movies
export const userRouter = express.Router(); // routers represent a subset of routes for the express application

userRouter.post('/login', async (req, resp) => {
    try {
        const user = await userDao.findByUsernameAndPassword(req.body.username, req.body.password);
        console.log(user);
        if (user) {
            req.session.user = user;
            resp.json(user);
        } else {
            resp.sendStatus(401);
        }
    } catch (err) {
        console.log(err);
        resp.sendStatus(500);
    }
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