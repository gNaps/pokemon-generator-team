import { useRouter } from "next/router";
import { usePokemons } from "../../context/TeamInProgressContext";
import { getBackgroundTypes, getPokemonImage } from "../../utils/utils";
import styles from "./PokemonTeamInProgress.module.scss";

const PokemonTeamInProgress = () => {
  const pokemonsTeamInPogress = usePokemons();
  const r = useRouter();

  const placeholderCount = 6 - pokemonsTeamInPogress.length;
  const rows = [];
  for (let i = 0; i < placeholderCount; i++) {
    rows.push(<div key={i} className={styles.placeholder} />);
  }

  return (
    <>
      {pokemonsTeamInPogress.length > 0 && (
        <div className={styles.container_team}>
          <div className="d-flex">
            {pokemonsTeamInPogress &&
              pokemonsTeamInPogress.map((p) => (
                <div
                  className={`${styles.card_poke} ${getBackgroundTypes(
                    p.pokemon_v2_pokemontypes_aggregate.nodes[0].type_id
                  )}`}
                  key={p.id}
                >
                  <img src={getPokemonImage(p.name, "normal")} />
                </div>
              ))}
            {rows}
          </div>
          <button
            className="button-primary rounded px-2 py-3"
            disabled={pokemonsTeamInPogress.length < 6}
            onClick={() => {r.push("/confirm")}}
          >
            Continue
          </button>
        </div>
      )}
    </>
  );
};

export default PokemonTeamInProgress;
