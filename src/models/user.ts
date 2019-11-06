import environmentConfig from '../db/config';
import * as knex from 'knex';
let connection = knex(environmentConfig);


class User {
    public connection: any;
    constructor() {
        this.connection = connection;
    }
    public getAllUsers() {
        return this.connection('users');
    }
    public findUserById(id: string) {
        return this.connection('users').where('id', id);
    }
    public createUser(data: object) {
        return this.connection('users').insert(data, '*')
    }
    public findByUsername(login: string) {
        return this.connection('users').where('login', login)
    }
    public updateUser(id: string, data: Object) {
        return this.connection('users').where('id', id).update(data)
    }
    public deleteUser(id: string) {
        return this.connection('users').where('id', id).del()
    }
}

export default User;

