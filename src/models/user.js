const knex = require('../db/knex');

class User {
    constructor(){
        this.knex = knex
    }
    getAllUsers(){
        return this.knex('users');
    }
    findUserById(id){
        return this.knex('users').where('id',id);
    }
    createUser(data){
        return this.knex('users').insert(data,'*')
    }
    updateUser(id,data){
        return this.knex('users').where('id', id).update(data)
    }
    deleteUser(id){
        return this.knex('users').where('id', id).del()
    }
}

module.exports = User
