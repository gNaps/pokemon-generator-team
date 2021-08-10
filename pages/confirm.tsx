import { useRouter } from "next/router";
import { useState } from "react";
import { usePokemons } from "../context/TeamInProgressContext";
import { Team } from "../models/Team";
import styles from "../styles/Confirm.module.scss";
import getMultipliers, {
  fromNameToIdType,
  getBackgroundTypes,
  getPokemonImage,
  getTypeIcon,
} from "../utils/utils";
const Confirm = () => {
  const [nameTeam, setNameTeam] = useState("");
  const pokemonsTeamInPogress = usePokemons();
  const r = useRouter();

  const handleClickSave = () => {
    const team: Team = {
        pokemons: pokemonsTeamInPogress,
        name: nameTeam
    }

    const teams_res = localStorage.getItem("teams");
    const teams = !!teams_res ? JSON.parse(teams_res) : [];

    teams.push(team);

    localStorage.setItem("teams", JSON.stringify(teams));
    r.replace("/");
  };

  let typesCommon: any = [];
  pokemonsTeamInPogress.map((el) =>
    el.pokemon_v2_pokemontypes_aggregate.nodes.map((type) =>
      typesCommon.push(type.type_id)
    )
  );

  const typesCommonUniq_number = [...new Set(typesCommon)];
  const typesCommonUniq_string = typesCommonUniq_number.map((el) =>
    getBackgroundTypes(el as number)
  );
  const multi = getMultipliers(typesCommonUniq_string);
  const multipliers: {
    defense: [{ type: string; damage: number }?];
    attack: [{ type: string; damage: number }?];
  } = { attack: [], defense: [] };
  for (const [key, value] of Object.entries(multi.attack)) {
    multipliers.attack.push({ type: key, damage: value as number });
  }
  for (const [key, value] of Object.entries(multi.defense)) {
    multipliers.defense.push({ type: key, damage: value as number });
  }

  return (
    <div className="px-4 py-5">
      <h1>Here your chooses</h1>

      <div className="container-fluid">
        <div className="row justify-content-center">
          {pokemonsTeamInPogress &&
            pokemonsTeamInPogress.map((p) => (
              <div
                className={`${styles.card_poke} ${getBackgroundTypes(
                  p.pokemon_v2_pokemontypes_aggregate.nodes[0].type_id
                )} col-6 col-md-4`}
                key={p.id}
              >
                <img src={getPokemonImage(p.name, "normal")} />
              </div>
            ))}
        </div>
      </div>

      <div className={styles.form}>
        <input
          type="text"
          placeholder="Digit a name for your team"
          onChange={(e) => setNameTeam(e.target.value)}
        />
        <button
          className="button-primary rounded px-3"
          onClick={handleClickSave}
        >
          Save team
        </button>
      </div>

      {/* Multipliers */}
      <div className="row d-flex justify-content-between no-margin padding-container mb-4">
        <div className="col-12 col-md-5 d-flex flex-column justify-content-center rounded shadow-lg py-3 px-4">
          <p>Attack</p>
          <div className="d-flex justify-content-center">
            <img src={"/icon-like.svg"} className={styles.icon_multi} />
          </div>
          <div className="row no-margin d-flex">
            {multipliers?.attack
              .filter((att) => att?.damage! >= 2)
              .map((att) => (
                <div className="col-4" key={att?.type}>
                  <img
                    src={getTypeIcon(+fromNameToIdType(att?.type!))}
                    className={styles.multipliers_types}
                  />
                </div>
              ))}
          </div>
          <div className="d-flex justify-content-center">
            <img
              src={"/icon-dislike.svg"}
              className={styles.icon_multi_dislike}
            />
          </div>
          <div className="row no-margin d-flex">
            {multipliers?.attack
              .filter((att) => att?.damage! < 1)
              .map((att) => (
                <div className="col-4" key={att?.type}>
                  <img
                    src={getTypeIcon(+fromNameToIdType(att?.type!))}
                    className={styles.multipliers_types}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="col-12 col-md-5 d-flex flex-column justify-content-center rounded shadow-lg py-3 px-4">
          <p>Defense</p>
          <div className="d-flex justify-content-center">
            <img src={"/icon-like.svg"} className={styles.icon_multi} />
          </div>
          <div className="row no-margin d-flex">
            {multipliers?.defense
              .filter((def) => def?.damage! < 1)
              .map((def) => (
                <div className="col-4" key={def?.type}>
                  <img
                    src={getTypeIcon(+fromNameToIdType(def?.type!))}
                    className={styles.multipliers_types}
                  />
                </div>
              ))}
          </div>
          <div className="d-flex justify-content-center">
            <img
              src={"/icon-dislike.svg"}
              className={styles.icon_multi_dislike}
            />
          </div>
          <div className="row no-margin d-flex">
            {multipliers?.defense
              .filter((def) => def?.damage! >= 2)
              .map((def) => (
                <div className="col-4" key={def?.type}>
                  <img
                    src={getTypeIcon(+fromNameToIdType(def?.type!))}
                    className={styles.multipliers_types}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
