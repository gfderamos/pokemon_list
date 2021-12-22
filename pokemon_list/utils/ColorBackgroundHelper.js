import Colors from "./Colors";
import PokemonTypes from "./PokemonTypes";

const getBackgroundColor = (type) => {
  let color = "";

  switch (type[0]) {
    case PokemonTypes.BUG:
      color = Colors.bug;
      break;
    case PokemonTypes.DARK:
      color = Colors.dark;
      break;
    case PokemonTypes.DRAGON:
      color = Colors.dragon;
      break;
    case PokemonTypes.ELECTRIC:
      color = Colors.eletric;
      break;
    case PokemonTypes.FAIRY:
      color = Colors.fairy;
      break;
    case PokemonTypes.FIGHTING:
      color = Colors.fighting;
      break;
    case PokemonTypes.FIRE:
      color = Colors.fire;
      break;
    case PokemonTypes.FLYING:
      color = Colors.flying;
      break;
    case PokemonTypes.GHOST:
      color = Colors.ghost;
      break;
    case PokemonTypes.GRASS:
      color = Colors.grass;
      break;
    case PokemonTypes.GROUND:
      color = Colors.ground;
      break;
    case PokemonTypes.ICE:
      color = Colors.ice;
      break;
    case PokemonTypes.NORMAL:
      color = Colors.normal;
      break;
    case PokemonTypes.POISON:
      color = Colors.poison;
      break;
    case PokemonTypes.PSYCHIC:
      color = Colors.psychic;
      break;
    case PokemonTypes.ROCK:
      color = Colors.rock;
      break;
    case PokemonTypes.STEEL:
      color = Colors.steel;
      break;
    case PokemonTypes.WATER:
      color = Colors.water;
      break;
    default:
      color = Colors.backgroundWhite;
      break;
  }
  return color;
};

export default getBackgroundColor;
