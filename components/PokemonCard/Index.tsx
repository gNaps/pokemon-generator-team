import { useRouter } from "next/router";
import { PokemonLite } from "../../models/PokemonLite";
import {
  firstLetterCapital,
  getPokemonImage,
  getTypeIcon,
} from "../../utils/utils";
import styles from "./PokemonCard.module.scss";
import {
  useAddPokemon,
  useCanAddPokemon,
  useCanRemovePokemon,
  useIsSelected,
  usePokemons,
  useRemovePokemon,
} from "../../context/TeamInProgressContext";

interface PokemonCardProps {
  pokemon: PokemonLite;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const r = useRouter();
  const pokemonsTeamInPogress = usePokemons();
  const addPokemonsToTeam = useAddPokemon();
  const removePokemonFromTeam = useRemovePokemon();
  const canAddPokemonsToTeam = useCanAddPokemon();
  const canRemovePokemonFromTeam = useCanRemovePokemon();
  const isSelected = useIsSelected();

  const openDetail = (id: number) => {
    r.push(`/pokemon/${id}`);
  };

  const selectPokemon = (e: any, pokemon: PokemonLite) => {
    const checked = e.target.checked;
    if (checked) {
      addPokemonsToTeam(pokemon);
    } else {
      removePokemonFromTeam(pokemon);
    }
  };

  return (
    <div key={pokemon.id} className="col-12 col-md-4">
      <div
        className={`shadow-lg p-3 mb-5 mx-1 bg-body rounded d-flex flex-column position-relative ${styles.pokemon_card} ${isSelected(pokemon.id) ? `${styles.selected}` : ''}`}
      >
        <div className="d-flex">
          <div className={`d-flex flex-column ${styles.left_side}`}>
            <p className={`h1 ${styles.pokemon_id}`}>
              #{pokemon.id.toString().padStart(3, "0")}
            </p>
            <p className={`h3`}>{firstLetterCapital(pokemon.name)}</p>
            <div className={`d-flex ${styles.types}`}>
              {pokemon.pokemon_v2_pokemontypes_aggregate.nodes.map((node) => (
                <img src={getTypeIcon(node.type_id)} key={node.type_id} />
              ))}
            </div>
          </div>
          <div className={`d-flex flex-column ${styles.right_side}`}>
            <img src={getPokemonImage(pokemon.name, "normal")} />
          </div>
        </div>
        <button
          className="btn button-primary shadow-lg mt-4"
          onClick={() => openDetail(pokemon.id)}
        >
          Open detail
        </button>
        <input
          type="checkbox"
          className="position-absolute"
          onChange={(e) => selectPokemon(e, pokemon)}
          disabled={!canAddPokemonsToTeam() && !isSelected(pokemon.id)}
        />
      </div>
    </div>
  );
};

export default PokemonCard;
