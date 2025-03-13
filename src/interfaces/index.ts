export interface GetPokemonsResponse {
  results: {
    name: string;
    url: string;
  }[];
}
export interface SpritePokemonDataInterface {
  sprites: { front_default: string };
  "stats":
    {
      "base_stat": number,
    }[]
}
