import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  await knex("users").del()
  await knex("users").insert([
    {
      firstName: "John",
      lastName: "Walker",
      age: 35,
      gender:"Male",
      login:"JohnW35",
      password:"super12345"
    },
    {
      firstName: "Jack",
      lastName: "Benner",
      age: 42,
      gender:"Male",
      login:"JackBen42",
      password:"qwertyuio"
    },
    {
      firstName: "Mellisa",
      lastName: "Smith",
      age: 25,
      gender:"Female",
      login:"MelSmi25",
      password:"superQwerty"
    },
    {
      firstName: "Abigail",
      lastName: "Abraham",
      age: 47,
      gender:"Female",
      login:"AbigAb47",
      password:"uiopdf3"
    },
    {
      firstName: "Jack",
      lastName: "Molly",
      age: 35,
      gender:"Male",
      login:"JackMoll35",
      password:"wertyuof"
    }
  ]); 
};
