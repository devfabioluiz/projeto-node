const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemonController");

router.get("/",
     pokemonController.getPokemon);
router.get("/:id", 
    pokemonController.getPokemonById);
router.get("/download/:id", 
    pokemonController.downloadPokemon);

router.post("/", 
    pokemonController.createPokemon);
router.delete("/:id", 
    pokemonController.deletePokemon);

module.exports = router;