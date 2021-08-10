export interface PokemonLite {
    id: number;
    name: string;
    pokemon_v2_pokemontypes_aggregate: {
        nodes: Array<{
            type_id: number;
        }>
    }
}