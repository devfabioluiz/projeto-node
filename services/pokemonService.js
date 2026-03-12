const clientPromise = require("../banco-de-dados/config");
const { ObjectId } = require("mongodb");

exports.getPokemon = async () => {
  const client = await clientPromise;
  const db = client.db("jplima_db");

  return db.collection("pokemon").find({}).toArray();
};

exports.getPokemonById = async (id) => {
  if (!ObjectId.isValid(id)) {
    throw new Error("ID inválido");
  }

  const client = await clientPromise;
  const db = client.db("jplima_db");

  return db.collection("pokemon").findOne({ _id: new ObjectId(id) });
};

exports.createPokemon = async (pokemon) => {
  const client = await clientPromise;
  const db = client.db("jplima_db");

  return db.collection("pokemon").insertOne(pokemon);
};

exports.deletePokemon = async (id) => {
  const client = await clientPromise;
  const db = client.db("jplima_db");

  return db.collection("pokemon").deleteOne({ _id: new ObjectId(id) });
};