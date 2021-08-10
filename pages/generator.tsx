import { useEffect, useState } from "react";
import { GetAllPokemon } from "../api/query";
import { PokemonLite } from "../models/PokemonLite";
import Link from "next/link";
import styles from "../styles/Generator.module.scss";
import PokemonCard from "../components/PokemonCard/Index";
import PokemonTeamInProgress from "../components/PokemonTeamInProgress";

const GeneratorPage = () => {
  const [limit, setLimit] = useState(0);
  const [offset, setOffset] = useState(24);
  const [pokemonsListActive, setPokemonsListActive] = useState<
    Array<PokemonLite>
  >([]);
  const [pokemonsList, setPokemonsList] = useState<any>([]);
  const [filterName, setFilterName] = useState("");

  let pokemons_res;
  let pokemons: any;

  useEffect(() => {
    async function getPokemons() {
      pokemons_res = localStorage.getItem("allPokemons");

      if (!pokemons_res || pokemons_res === "") {
        pokemons_res = await fetch(`https://beta.pokeapi.co/graphql/v1beta`, {
          method: "POST",
          body: JSON.stringify({
            query: GetAllPokemon,
            operationName: "GetAllPokemon",
          }),
        });
        let pokemons_json = await pokemons_res.json();
        pokemons = pokemons_json.data.pokemon_v2_pokemon;
        localStorage.setItem("allPokemons", JSON.stringify(pokemons));
      } else {
        pokemons = JSON.parse(pokemons_res!);
      }

      const pokemonsList: Array<PokemonLite> = pokemons;
      setPokemonsList(pokemonsList);
      setPokemonsListActive(pokemonsList.slice(limit, offset));
    }

    getPokemons();
  }, []);

  const next = () => {
    const newPokemonsList = [...pokemonsList];
    const startFrom = limit + offset;
    const endTo = startFrom + offset;
    setPokemonsListActive(newPokemonsList.slice(startFrom, endTo));
    setLimit(startFrom);
  };

  const previous = () => {
    const newPokemonsList = [...pokemonsList];
    const startFrom = limit - offset;
    const endTo = offset + startFrom;
    setPokemonsListActive(newPokemonsList.slice(startFrom, endTo));
    setLimit(startFrom);
  };

  const onChangeFilterName = (e: any) => {
    console.log("filtername", e.target.value);
    const newFilter = e.target.value;
    const copyPokemonList = [...pokemonsList];
    const newPokemonsList = copyPokemonList.filter((el) =>
      el.name.toLocaleLowerCase().includes(newFilter.toLocaleLowerCase())
    );
    setLimit(0);
    setOffset(24);
    setPokemonsListActive(newPokemonsList.slice(0, 24));
  };

  return (
    <>
      <div className="px-4 py-5">
        <h1>Team generator</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Team Generator
            </li>
          </ol>
        </nav>
        <h6>Select six pokemons for your new team.</h6>

        <div className={styles.search_container}>
          <input
            type="text"
            placeholder="Search a pokemon"
            onChange={(e) => onChangeFilterName(e)}
          />
          <button className="button-primary">Search</button>
        </div>

        <div className="container-fluid mt-4 mb-5">
          <div className="row">
            {pokemonsListActive &&
              pokemonsListActive.map((p: PokemonLite) => (
                <PokemonCard pokemon={p} key={p.id} />
              ))}
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-around">
              <button
                className={`shadow-lg p-3 mb-5 mx-1 bg-body rounded ${styles.navigation_card}`}
                onClick={() => previous()}
                disabled={limit === 0}
              >
                <i className="fa fa-arrow-left" />
                Previous
              </button>
              <button
                className={`shadow-lg p-3 mb-5 mx-1 bg-body rounded ${styles.navigation_card}`}
                onClick={() => next()}
              >
                Next
                <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <PokemonTeamInProgress />
    </>
  );
};

export default GeneratorPage;
