export interface Pokemon {
  base_happiness: number;
  flavorText: Array<{ flavor_text: string }>;
  generation: { name: string; id: number };
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  evolution: {
    species: Array<{
      id: number;
      name: string;
      pokemon_v2_pokemonevolutions_aggregate: {
        nodes?: Array<{
          evolution_item_id?: number;
          gender_id?: number;
          held_item_id?: number;
          know_move_id?: number;
          know_move_type_id?: number;
          min_affection?: number;
          min_happiness?: number;
          min_beauty?: number;
          min_level?: number;
          needs_overworld_rain?: boolean;
        }>
      }
    }>
  }
  pokemon: {
    nodes: Array<{
      abilities: {
        nodes: Array<{
          ability: {
            name: string;
            pokemon_v2_abilityflavortexts_aggregate: {
              nodes: Array<{
                flavor_text: string;
              }>;
            };
          };
        }>;
      };
      height: number;
      id: number;
      levelUpMoves: {
          nodes: Array<{
              level: number;
              move: {
                  name: string;
              }
          }> 
      };
      name: string;
      stats: Array<{
          base_stat: number;
          stat: {
              name: string;
          }
      }>;
      types: Array<{
          slot: number;
          type: {
              name: string;
              id: number;
          }
      }>;
      weight: number;
    }>;
  };
}
