const pokemonService = require("../services/pokemonService");

exports.getPokemon = async (req, res) => {
  try {
    const pokemons = await pokemonService.getPokemon();
    res.json(pokemons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPokemonById = async (req, res) => {
  try {
    const pokemon = await pokemonService.getPokemonById(req.params.id);

    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon não encontrado" });
    }

    res.json(pokemon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.downloadPokemon = async (req, res) => {
  try {
    const pokemon = await pokemonService.getPokemonById(req.params.id);

    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon não encontrado" });
    }

    res.setHeader("Content-Disposition", "attachment; filename=pokemon.txt");
    res.setHeader("Content-Type", "text/plain; charset=utf-8");

    res.send(JSON.stringify(pokemon, null, 2));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPokemon = async (req, res) => {
  try {
    const result = await pokemonService.createPokemon(req.body);

    res.status(201).json({
      message: "Pokemon criado",
      id: result.insertedId
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePokemon = async (req, res) => {
  try {
    const result = await pokemonService.deletePokemon(req.params.id);

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Pokemon não encontrado" });
    }

    res.json({ message: "Pokemon deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};