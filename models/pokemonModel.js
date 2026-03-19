const { z } = require("zod");

const pokemonSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  age: z.number().min(18)
});

class Pokemon {
  constructor(data) {

    const validatedData = pokemonSchema.parse(data);

    this.name = validatedData.name;
    this.email = validatedData.email;
    this.age = validatedData.age;
  }
}

module.exports = Pokemon;