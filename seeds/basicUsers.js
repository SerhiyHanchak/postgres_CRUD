exports.seed = async function(knex) {
  await knex("users").del()
  await knex("users").insert([
    {
      id: 1,
      firstName: "John",
      lastName: "Walker",
      age: 35,
      gender:"Male",
      login:"JohnW35"
    },
    {
      id: 2,
      firstName: "Jack",
      lastName: "Benner",
      age: 42,
      gender:"Male",
      login:"JackBen42"
    },
    {
      id: 3,
      firstName: "Mellisa",
      lastName: "Smith",
      age: 25,
      gender:"Female",
      login:"MelSmi25"
    },
    {
      id: 4,
      firstName: "Abigail",
      lastName: "Abraham",
      age: 47,
      gender:"Female",
      login:"AbigAb47"
    },
    {
      id: 5,
      firstName: "Jack",
      lastName: "Molly",
      age: 35,
      gender:"Male",
      login:"JackMoll35"
    }
  ]);
};
