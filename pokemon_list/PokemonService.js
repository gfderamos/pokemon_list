export default class PokemonService {
  static listPokemons = () => {
    return fetch("https://api.pokemon.com/us/api/pokedex/kalos", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log("err: " + err);
      });
  };
}
