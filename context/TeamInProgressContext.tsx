import { createContext, useState, useEffect, useContext } from "react";
import { PokemonLite } from "../models/PokemonLite";

type TeamInProgressContextData = {
  pokemons: Array<PokemonLite>;
  addPokemon: (pokemon: PokemonLite) => void;
  removePokemon: (pokemon: PokemonLite) => void;
  canAddPokemon: () => boolean;
  canRemovePokemon: () => boolean;
  isSelected: (int: number) => boolean;
};

const TeamInProgressContext = createContext<TeamInProgressContextData>({
  pokemons: [],
  addPokemon: () => null,
  removePokemon: () => null,
  canAddPokemon: () => false,
  canRemovePokemon: () => false,
  isSelected: () => false,
});

export default TeamInProgressContext;

export const TeamInProgressContextProvider: React.FC = ({ children }) => {
  const [pokemons, setPokemons] = useState<Array<PokemonLite>>([]);

  const addPokemon = (pokemon: PokemonLite): void => {
    const newPokemons = [...pokemons];
    newPokemons.push(pokemon);
    setPokemons(newPokemons);
  };

  const removePokemon = (pokemon: PokemonLite): void => {
    const copyPokemons = [...pokemons];
    const newPokemons = copyPokemons.filter((el) => el.id !== pokemon.id);
    setPokemons(newPokemons);
  };

  const canAddPokemon = () => {
    return pokemons.length < 6 ? true : false;
  };

  const canRemovePokemon = () => {
    return pokemons.length !== 0 ? true : false;
  };

  const isSelected = (id: number) => {
    return pokemons.some((el) => el.id === id);
  };

  return (
    <TeamInProgressContext.Provider
      value={{
        pokemons,
        addPokemon,
        removePokemon,
        canAddPokemon,
        canRemovePokemon,
        isSelected,
      }}
    >
      {children}
    </TeamInProgressContext.Provider>
  );
};

export const usePokemons = () => {
  const { pokemons } = useContext(TeamInProgressContext);
  return pokemons;
};

export const useAddPokemon = () => {
  const { addPokemon } = useContext(TeamInProgressContext);
  return addPokemon;
};

export const useRemovePokemon = () => {
  const { removePokemon } = useContext(TeamInProgressContext);
  return removePokemon;
};

export const useCanAddPokemon = () => {
  const { canAddPokemon } = useContext(TeamInProgressContext);
  return canAddPokemon;
};

export const useCanRemovePokemon = () => {
  const { canRemovePokemon } = useContext(TeamInProgressContext);
  return canRemovePokemon;
};

export const useIsSelected = () => {
  const { isSelected } = useContext(TeamInProgressContext);
  return isSelected;
};
