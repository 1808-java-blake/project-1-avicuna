import { connectionPool } from "../util/connection-util";
import { User } from "../model/user";
import { userConverter } from "../util/user-converter";

/**
 * Retreive a single user by username and password, will also retreive all of that users movies
 * @param id
 */
export async function findByUsernameAndPassword(username: string, password: string): Promise<User> {
    const client = await connectionPool.connect();
    try {
        const resp = await client.query(
            `SELECT * FROM ers_app.users u
        WHERE u.username = $1
        AND u.password = $2`, [username, password]);
        if(resp.rows.length !== 0) {
            return userConverter(resp.rows[0]); // get the user data from first row
        }
        return null;
    } finally {
        client.release();
    }
}