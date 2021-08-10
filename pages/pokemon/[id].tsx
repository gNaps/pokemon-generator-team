import { useRouter } from "next/router";
import { useState } from "react";
import { GetDetailPokemon } from "../../api/query";
import { Pokemon } from "../../models/Pokemon";
import Link from "next/link";
import getMultipliers, {
  firstLetterCapital,
  fromNameToIdType,
  getBackgroundTypes,
  getPokemonArtwork,
  getPokemonImage,
  getStatsAbbr,
  getStatsIcon,
  getTypeIcon,
  getTypeIconOnlySimbol,
} from "../../utils/utils";
import styles from "../../styles/PokemonDetail.module.scss";

const PokemonDefault = () => {
  const r = useRouter();
  const { id } = r.query;

  const [pokemon, setPokemon] = useState<Pokemon>();
  const [multipliers, setMultipliers] = useState<{
    defense: [{ type: string; damage: number }?];
    attack: [{ type: string; damage: number }?];
  }>();

  let idQuery: string;
  if (Array.isArray(id)) {
    idQuery = id[0];
  } else {
    idQuery = id!;
  }

  const getDetail = async () => {
    const pokemon_res = await fetch(`https://beta.pokeapi.co/graphql/v1beta`, {
      method: "POST",
      body: JSON.stringify({
        query: GetDetailPokemon,
        operationName: "pokemon_details",
        variables: { id: parseInt(idQuery!), lang: "en" },
      }),
    });
    const pokemon = await pokemon_res.json();
    console.log("pokemon", pokemon);
    if (!pokemon.errors) {
      setPokemon(pokemon.data.species[0]);

      const types = [];
      types.push(pokemon!.data.species[0].pokemon.nodes[0].types[0].type.name);
      if (pokemon!.data.species[0].pokemon.nodes[0].types.length > 1) {
        types.push(
          pokemon!.data.species[0].pokemon.nodes[0].types[0].type.name
        );
      }
      const multi = getMultipliers(types);
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
      console.log("multipliers", multipliers);
      setMultipliers(multipliers);
    }
  };

  if (!pokemon && id) {
    getDetail();
  }

  if (!pokemon) {
    return <></>;
  } else {
    return (
      <>
        {/* Header */}
        <div
          className={`${styles.header} ${getBackgroundTypes(
            pokemon!.pokemon.nodes[0].types[0].type.id
          )}`}
        >
          <p className={`h1 ${styles.pokemon_id}`}>
            #{pokemon.pokemon.nodes[0].id.toString().padStart(3, "0")}
          </p>
          <p className="h1">{firstLetterCapital(pokemon.name)}</p>
          <img
            src={getTypeIconOnlySimbol(
              pokemon!.pokemon.nodes[0].types[0].type.id
            )}
          />
        </div>

        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="breadcrumb-item active">
                <Link href="/generator">
                  <a>Team Generator</a>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a>{firstLetterCapital(pokemon.name)}</a>
              </li>
            </ol>
          </nav>
        </div>

        {/* Pokemon card */}
        <div className="row d-flex justify-content-center mt-3 no-margin">
          <div className="col-12 col-md-8">
            <div
              className={`shadow-lg p-3 mb-5 mx-1 bg-body rounded d-flex ${styles.card_pokemon}`}
            >
              <div
                className={`${styles.left_side} d-flex flex-column align-items-center`}
              >
                <img src={getPokemonArtwork(pokemon.name)} />
                <div className={`d-flex ${styles.types} mt-4`}>
                  {pokemon!.pokemon.nodes[0].types.map((type) => (
                    <img src={getTypeIcon(type.type.id)} key={type.type.id} />
                  ))}
                </div>
              </div>
              <div className={styles.right_side}>
                {pokemon.flavorText[0].flavor_text}
                <div className="d-flex justify-content-around my-3">
                  <div className="d-flex align-items-center">
                    <img src={"/icon-height.png"} />
                    <label>Height: </label>
                    {pokemon.pokemon.nodes[0].height}m
                  </div>
                  <div
                    className={`d-flex align-items-center ${styles.stats_physics_weight}`}
                  >
                    <img src={"/icon-height.png"} />
                    <label>Weight: </label>
                    {pokemon.pokemon.nodes[0].weight / 10}kg
                  </div>
                </div>
                <div>
                  <p className="bold-text">Abilities</p>
                  <p>
                    {firstLetterCapital(
                      pokemon.pokemon.nodes[0].abilities.nodes[0].ability.name
                    )}
                  </p>
                  <p className="small-text">
                    {
                      pokemon.pokemon.nodes[0].abilities.nodes[0].ability
                        .pokemon_v2_abilityflavortexts_aggregate.nodes[0]
                        .flavor_text
                    }
                  </p>
                  {pokemon.pokemon.nodes[0].abilities.nodes.length > 1 && (
                    <>
                      <p>
                        {firstLetterCapital(
                          pokemon.pokemon.nodes[0].abilities.nodes[1].ability
                            .name
                        )}
                      </p>
                      <p className="small-text">
                        {
                          pokemon.pokemon.nodes[0].abilities.nodes[1].ability
                            .pokemon_v2_abilityflavortexts_aggregate.nodes[0]
                            .flavor_text
                        }
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-label">
          <p className="h3">Stats</p>
        </div>

        {/* Stats */}
        <div className="row d-flex justify-content-center no-margin mb-4">
          {pokemon.pokemon.nodes[0].stats.map((stat) => (
            <div
              className="col-6 col-md-2 d-flex justify-content-center mb-4"
              key={stat.stat.name}
            >
              <div
                className={`d-flex flex-column align-items-center justify-content-center shadow-lg ${styles.stats_card}`}
              >
                <img
                  src={getStatsIcon(stat.stat.name)}
                  className={styles.stats_icon}
                />
                <p className="h4">{stat.base_stat}</p>
                <p className="small-text">
                  {getStatsAbbr(stat.stat.name)!.toLocaleUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="section-label">
          <p className="h3">Evolution chain</p>
        </div>

        {/* Evolution */}
        <div className="row d-flex justify-content-center no-margin padding-container mb-4">
          {pokemon.evolution.species.length !== 0 ? (
            pokemon.evolution.species.map((sp) => (
              <div className="col-12 col-md-4" key={sp.id}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img src={getPokemonImage(sp.name, "normal")} />
                  {firstLetterCapital(sp.name)}
                </div>
              </div>
            ))
          ) : (
            <p>This pokemons has not evolution chain</p>
          )}
        </div>

        <div className="section-label">
          <p className="h3">Multipliers</p>
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
      </>
    );
  }
};

export default PokemonDefault;
