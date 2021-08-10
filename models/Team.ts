import { PokemonLite } from "./PokemonLite";

export interface Team {
    pokemons: Array<PokemonLite>;
    name: string;
}