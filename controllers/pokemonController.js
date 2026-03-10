const pokemonService = require('../services/pokemonService');

exports.getPokemon = (req, res) => {
  const users = pokemonService.getAllPokemon();
  res.json(users);
};

exports.createPokemon = (req, res) => {
  const user = pokemonService.createPokemon(req.body);
  res.status(201).json(user);
};