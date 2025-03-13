import axios from "axios";
import {GetPokemonsResponse, SpritePokemonDataInterface} from "../interfaces";

const apiClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  withCredentials: false,
});

export const fetchAllPokemons = async (): Promise<GetPokemonsResponse> => {
  try {
    const response = await apiClient.get("pokemon", {
      params: {
        limit: 1302,
      },
    });
    return response.data;
  }catch(error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
          `Failed to fetch Pokemons: ${error.response?.status} ${error.response?.statusText}`
      );
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export const fetchSinglePokemon = async (name:string): Promise<SpritePokemonDataInterface> => {
  try {
    const response = await apiClient.get(`/pokemon/${name}`);
    return response.data;
  }catch(error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
          `Failed to fetch Pokemon: ${error.response?.status} ${error.response?.statusText}`
      );
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
}
