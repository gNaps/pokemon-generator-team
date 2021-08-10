import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const GetPokemonByType = 
`query getPokemonByType($type: Int) {
    pokemon_created: pokemon_v2_pokemon(where: {pokemon_v2_pokemontypes: {type_id: {_eq: $type}}}) {
        name
        id
    }
}`;

export const GetAllTypesPokemon = 
`query getTypesPokemon {
    typesPokemon: pokemon_v2_type {
        id
        name
    }
}`

export const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

export const GetDetailPokemon = 
`query pokemon_details($id: Int, $lang: String) {
    species: pokemon_v2_pokemonspecies(where: {id: {_eq: $id}}) {
      name
      base_happiness
      is_legendary
      is_mythical
      generation: pokemon_v2_generation {
        name,
        id
      }
      evolution: pokemon_v2_evolutionchain {
        species: pokemon_v2_pokemonspecies(order_by: {id: asc}) {
          id
          name
          pokemon_v2_pokemonevolutions_aggregate {
            nodes {
              min_level
              min_beauty
              min_happiness
              min_affection
              known_move_id
              known_move_type_id
              held_item_id
              gender_id
              needs_overworld_rain
              evolution_item_id
            }
          }
        }
      }
      pokemon: pokemon_v2_pokemons_aggregate(limit: 1) {
        nodes {
          height
          name
          id
          weight
          abilities: pokemon_v2_pokemonabilities_aggregate {
            nodes {
              ability: pokemon_v2_ability {
                name
                pokemon_v2_abilityflavortexts_aggregate(where: {pokemon_v2_language: {name: {_eq: $lang}}, pokemon_v2_versiongroup: {id: {_eq: 18}}}) {
            nodes {
              flavor_text
            }
          }
              }
            }
          }
          stats: pokemon_v2_pokemonstats {
            base_stat
            stat: pokemon_v2_stat {
              name
            }
          }
          types: pokemon_v2_pokemontypes {
            slot
            type: pokemon_v2_type {
              name
              id
            }
          }
          levelUpMoves: pokemon_v2_pokemonmoves_aggregate(where: {pokemon_v2_movelearnmethod: {name: {_eq: "level-up"}}}, distinct_on: move_id) {
            nodes {
              move: pokemon_v2_move {
                name
              }
              level
            }
          }
        }
      }
      flavorText: pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: $lang}}, pokemon_v2_version: {id: {_eq: 18}}}) {
        flavor_text
      }
    }
  }`

  export const GetAllPokemonPaginated = 
  `query GetAllPokemon($limit:Int, $offset: Int) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      pokemon_v2_pokemontypes_aggregate {
        nodes {
          type_id
        }
      }
    }
  }`

  export const GetAllPokemon = 
  `query GetAllPokemon {
    pokemon_v2_pokemon(where: {id: {_lte: 900}}) {
      id
      name
      pokemon_v2_pokemontypes_aggregate {
        nodes {
          type_id
        }
      }
    }
  }`


