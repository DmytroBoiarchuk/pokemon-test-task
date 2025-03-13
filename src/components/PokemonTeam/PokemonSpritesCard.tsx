import { useEffect, useState } from "react";
import { fetchSinglePokemon } from "../../api";
import { SpritePokemonDataInterface } from "../../interfaces";

interface Props {
  name: string;
}
const calcStatsColor = (stats: number | undefined): string => {
  if (stats) {
    if (stats < 40) return "text-green-400";
    else if (stats > 80) return "text-red-600";
    else return "text-yellow-600";
  }
  return "";
};

const PokemonSpritesCard = ({ name }: Props) => {
  const [pokemon, setPokemon] = useState<SpritePokemonDataInterface>();
  useEffect(() => {
    fetchSinglePokemon(name).then((res) => setPokemon(res));
  }, []);
  return (
    <div className="flex justify-between items-center border border-dotted border-gray-600 p-3 rounded-2xl">
      <div className="flex items-center">
        <img src={pokemon?.sprites.front_default} alt="Pokemon sprite" />
        <p>{name}</p>
      </div>
      <p className={calcStatsColor(pokemon?.stats[0].base_stat)}>
        Stats {pokemon?.stats[0].base_stat}
      </p>
    </div>
  );
};

export default PokemonSpritesCard;
