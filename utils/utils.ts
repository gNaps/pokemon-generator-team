import { TypeEnums } from "./enums";

export const getPokemonSprite = (name: string) => {
  return `https://img.pokemondb.net/sprites/sword-shield/icon/${name}.png`;
};

export const getPokemonImage = (name: string, type: "normal" | "shiny") => {
  return `https://img.pokemondb.net/sprites/home/${type}/${name}.png`;
};

export const getPokemonArtwork = (name: string) => {
  return `https://img.pokemondb.net/artwork/${name}.jpg`;
};

export const getTypeIconOnlySimbol = (id: number) => {
  switch (id) {
    case TypeEnums.Normal:
      return "https://cdn2.bulbagarden.net/upload/thumb/9/95/Normal_icon_SwSh.png/64px-Normal_icon_SwSh.png";
    case TypeEnums.Fight:
      return "https://cdn2.bulbagarden.net/upload/thumb/3/3b/Fighting_icon_SwSh.png/64px-Fighting_icon_SwSh.png";
    case TypeEnums.Flying:
      return "https://cdn2.bulbagarden.net/upload/thumb/b/b5/Flying_icon_SwSh.png/64px-Flying_icon_SwSh.png";
    case TypeEnums.Poison:
      return "https://cdn2.bulbagarden.net/upload/thumb/8/8d/Poison_icon_SwSh.png/64px-Poison_icon_SwSh.png";
    case TypeEnums.Ground:
      return "https://cdn2.bulbagarden.net/upload/thumb/2/27/Ground_icon_SwSh.png/64px-Ground_icon_SwSh.png";
    case TypeEnums.Rock:
      return "https://cdn2.bulbagarden.net/upload/thumb/1/11/Rock_icon_SwSh.png/64px-Rock_icon_SwSh.png";
    case TypeEnums.Bug:
      return "https://cdn2.bulbagarden.net/upload/thumb/9/9c/Bug_icon_SwSh.png/64px-Bug_icon_SwSh.png";
    case TypeEnums.Ghost:
      return "https://cdn2.bulbagarden.net/upload/thumb/0/01/Ghost_icon_SwSh.png/64px-Ghost_icon_SwSh.png";
    case TypeEnums.Steel:
      return "https://cdn2.bulbagarden.net/upload/thumb/0/09/Steel_icon_SwSh.png/64px-Steel_icon_SwSh.png";
    case TypeEnums.Fire:
      return "https://cdn2.bulbagarden.net/upload/thumb/a/ab/Fire_icon_SwSh.png/64px-Fire_icon_SwSh.png";
    case TypeEnums.Water:
      return "https://cdn2.bulbagarden.net/upload/thumb/8/80/Water_icon_SwSh.png/64px-Water_icon_SwSh.png";
    case TypeEnums.Grass:
      return "https://cdn2.bulbagarden.net/upload/thumb/a/a8/Grass_icon_SwSh.png/64px-Grass_icon_SwSh.png";
    case TypeEnums.Electric:
      return "https://cdn2.bulbagarden.net/upload/thumb/7/7b/Electric_icon_SwSh.png/64px-Electric_icon_SwSh.png";
    case TypeEnums.Psychic:
      return "https://cdn2.bulbagarden.net/upload/thumb/7/73/Psychic_icon_SwSh.png/64px-Psychic_icon_SwSh.png";
    case TypeEnums.Ice:
      return "https://cdn2.bulbagarden.net/upload/thumb/1/15/Ice_icon_SwSh.png/64px-Ice_icon_SwSh.png";
    case TypeEnums.Dragon:
      return "https://cdn2.bulbagarden.net/upload/thumb/7/70/Dragon_icon_SwSh.png/64px-Dragon_icon_SwSh.png";
    case TypeEnums.Dark:
      return "https://cdn2.bulbagarden.net/upload/thumb/d/d5/Dark_icon_SwSh.png/64px-Dark_icon_SwSh.png";
    case TypeEnums.Fairy:
      return "https://cdn2.bulbagarden.net/upload/thumb/c/c6/Fairy_icon_SwSh.png/64px-Fairy_icon_SwSh.png";
    default:
      return "";
  }
};

export const getTypeIcon = (id: number) => {
  switch (id) {
    case TypeEnums.Normal:
      return "https://cdn2.bulbagarden.net/upload/0/0f/NormalIC.png";
    case TypeEnums.Fight:
      return "https://cdn2.bulbagarden.net/upload/9/9b/FightingIC.png";
    case TypeEnums.Flying:
      return "https://cdn2.bulbagarden.net/upload/d/dc/FlyingIC.png";
    case TypeEnums.Poison:
      return "https://cdn2.bulbagarden.net/upload/8/86/PoisonIC.png";
    case TypeEnums.Ground:
      return "https://cdn2.bulbagarden.net/upload/8/87/GroundIC.png";
    case TypeEnums.Rock:
      return "https://cdn2.bulbagarden.net/upload/e/e6/RockIC.png";
    case TypeEnums.Bug:
      return "https://cdn2.bulbagarden.net/upload/b/bd/BugIC.png";
    case TypeEnums.Ghost:
      return "https://cdn2.bulbagarden.net/upload/c/c3/GhostIC.png";
    case TypeEnums.Steel:
      return "https://cdn2.bulbagarden.net/upload/7/7e/SteelIC.png";
    case TypeEnums.Fire:
      return "https://cdn2.bulbagarden.net/upload/9/9f/FireIC.png";
    case TypeEnums.Water:
      return "https://cdn2.bulbagarden.net/upload/b/b0/WaterIC.png";
    case TypeEnums.Grass:
      return "https://cdn2.bulbagarden.net/upload/a/a5/GrassIC.png";
    case TypeEnums.Electric:
      return "https://cdn2.bulbagarden.net/upload/e/ea/ElectricIC.png";
    case TypeEnums.Psychic:
      return "https://cdn2.bulbagarden.net/upload/f/f8/PsychicIC.png";
    case TypeEnums.Ice:
      return "https://cdn2.bulbagarden.net/upload/8/86/IceIC.png";
    case TypeEnums.Dragon:
      return "https://cdn2.bulbagarden.net/upload/c/c3/DragonIC.png";
    case TypeEnums.Dark:
      return "https://cdn2.bulbagarden.net/upload/e/e3/DarkIC.png";
    case TypeEnums.Fairy:
      return "https://cdn2.bulbagarden.net/upload/3/31/FairyIC.png";
    default:
      return "";
  }
};

export const getBackgroundTypes = (id: number) => {
  switch (id) {
    case TypeEnums.Normal:
      return "normal";
    case TypeEnums.Fight:
      return "fight";
    case TypeEnums.Flying:
      return "flying";
    case TypeEnums.Poison:
      return "poison";
    case TypeEnums.Ground:
      return "ground";
    case TypeEnums.Rock:
      return "rock";
    case TypeEnums.Bug:
      return "bug";
    case TypeEnums.Ghost:
      return "ghost";
    case TypeEnums.Steel:
      return "steel";
    case TypeEnums.Fire:
      return "fire";
    case TypeEnums.Water:
      return "water";
    case TypeEnums.Grass:
      return "grass";
    case TypeEnums.Electric:
      return "electric";
    case TypeEnums.Psychic:
      return "psychic";
    case TypeEnums.Ice:
      return "ice";
    case TypeEnums.Dragon:
      return "dragon";
    case TypeEnums.Dark:
      return "dark";
    case TypeEnums.Fairy:
      return "fairy";
    default:
      return "";
  }
};

export const fromNameToIdType = (name: string) => {
  switch (name) {
    case "normal":
      return TypeEnums.Normal;
    case "fighting":
      return TypeEnums.Fight;
    case "flying":
      return TypeEnums.Flying;
    case "poison":
      return TypeEnums.Poison;
    case "ground":
      return TypeEnums.Ground;
    case "rock":
      return TypeEnums.Rock;
    case "bug":
      return TypeEnums.Bug;
    case "ghost":
      return TypeEnums.Ghost;
    case "steel":
      return TypeEnums.Steel;
    case "fire":
      return TypeEnums.Fire;
    case "water":
      return TypeEnums.Water;
    case "grass":
      return TypeEnums.Grass;
    case "electric":
      return TypeEnums.Electric;
    case "psychic":
      return TypeEnums.Psychic;
    case "ice":
      return TypeEnums.Ice;
    case "dragon":
      return TypeEnums.Dragon;
    case "dark":
      return TypeEnums.Dark;
    case "fairy":
      return TypeEnums.Fairy;
    default:
      return "";
  }
};

export const firstLetterCapital = (name: string) => {
  return name.charAt(0).toLocaleUpperCase() + name.substring(1, name.length);
};

export const getStatsIcon = (name: string) => {
  switch (name) {
    case "hp":
      return "/icon-heart.png";
    case "attack":
      return "/icon-attack.png";
    case "defense":
      return "/icon-defense.png";
    case "special-attack":
      return "/icon-sp-attack.png";
    case "special-defense":
      return "/icon-sp-defense.png";
    case "speed":
      return "/icon-speed.png";
  }
};

export const getStatsAbbr = (name: string) => {
  switch (name) {
    case "hp":
      return "hp";
    case "attack":
      return "atk";
    case "defense":
      return "def";
    case "special-attack":
      return "sp-atk";
    case "special-defense":
      return "sp-def";
    case "speed":
      return "spd";
  }
};

import all_types from "./all_types.json";
export default function getMultipliers(types: any) {
  const multipliers = {
    defense: {},
    attack: {},
  };
  types.forEach((type: "bug" | "ice" | "fire") => {
    var damage_relations = all_types[type];
    var no_damage_to = damage_relations.attack.zero;
    var no_damage_from = damage_relations.defense.zero;
    var half_damage_to = damage_relations.attack.half;
    var half_damage_from = damage_relations.defense.half;
    var double_damage_to = damage_relations.attack.double;
    var double_damage_from = damage_relations.defense.double;
    no_damage_to.forEach((type: any) => {
      if (multipliers.attack.hasOwnProperty(type)) {
        multipliers.attack[type] = multipliers.attack[type] * 0;
      } else {
        multipliers.attack[type] = 0;
      }
    });
    no_damage_from.forEach((type) => {
      if (multipliers.defense.hasOwnProperty(type)) {
        multipliers.defense[type] = multipliers.defense[type] * 0;
      } else {
        multipliers.defense[type] = 0;
      }
    });
    half_damage_to.forEach((type) => {
      if (multipliers.attack.hasOwnProperty(type)) {
        multipliers.attack[type] = multipliers.attack[type] * 0.5;
      } else {
        multipliers.attack[type] = 0.5;
      }
    });
    half_damage_from.forEach((type) => {
      if (multipliers.defense.hasOwnProperty(type)) {
        multipliers.defense[type] = multipliers.defense[type] * 0.5;
      } else {
        multipliers.defense[type] = 0.5;
      }
    });
    double_damage_to.forEach((type) => {
      if (multipliers.attack.hasOwnProperty(type)) {
        multipliers.attack[type] = multipliers.attack[type] * 2;
      } else {
        multipliers.attack[type] = 2;
      }
    });
    double_damage_from.forEach((type) => {
      if (multipliers.defense.hasOwnProperty(type)) {
        multipliers.defense[type] = multipliers.defense[type] * 2;
      } else {
        multipliers.defense[type] = 2;
      }
    });
  });
  return multipliers;
}
