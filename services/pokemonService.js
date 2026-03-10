let pokemon = [];

exports.getPokemon = () => {
  return pokemon;
};

exports.createPokemon = (data) => {
  const newPokemon = {
    id: pokemon.length + 1,
    nome: data.nome
  };

  pokemon.push(newPokemon);
  return newPokemon;
};