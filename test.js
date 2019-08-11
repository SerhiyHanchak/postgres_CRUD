const request = require('supertest');
const knex = require('./src/db/knex');
const app = require('./src/app');
const expect = require('chai').expect;
const should = require('should');

describe("Test get requests - get by id and get all users", () => {
  before(done => {
    knex.migrate
      .latest()
      .then(() => {
        return knex.seed.run();
      })
      .then(() => {
        done();
      });
  }),
  it("List all users - should return all users from DB", done => {
    request(app)
      .get("/user")
      .set("Accept", "application/json")
      .expect(200, done);
  }),
    it("Get user by id - should return the user with id:1", done => {
      request(app)
        .get("/user/1")
        .set("Accept", "application/json")
        .expect(200)
        .end((err, res) => {
          res.status.should.equal(200);
          res.body.lastName.should.equal("Walker");
          res.body.id.should.equal(1);
        });
        done();
    });
});
