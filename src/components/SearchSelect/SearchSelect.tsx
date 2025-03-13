import { ChangeEvent, useEffect, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { Inputs } from "../PokemonTeamForm/PokemonTeamForm";
import BadgesList from "./BadgesList";

interface Props {
  pokemons: {
    name: string;
    url: string;
  }[];
  name: keyof Inputs;
  register: UseFormRegister<Inputs> | undefined;
  label: string;
  teamValue: string[];
  setTeamValue: UseFormSetValue<Inputs>;
  error: string | undefined;
}
const SearchSelect = ({
  pokemons,
  name,
  register,
  label,
  teamValue,
  setTeamValue,
  error,
}: Props) => {
  const [pokemonListIsShown, setPokemonListIsShown] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [pokemonMatches, setPokemonMatches] = useState<{ name: string; url: string; }[]>([]);

  const onPokemonClickHandler = (
    event: React.MouseEvent<HTMLLIElement>,
  ): void => {
    setInputValue("");
    const value = event.currentTarget.dataset.value;
    if (value) {
      setTeamValue("chosenTeam", [...teamValue, value.toLowerCase()]);
    }
    setPokemonMatches([]);
  };
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const tappedValue = event.target.value;
    setInputValue(tappedValue);
    if (tappedValue !== "")
      setPokemonMatches(
        pokemons.filter(
          (pokemon) =>
            pokemon.name.toLowerCase().startsWith(tappedValue.toLowerCase()) &&
            !teamValue.includes(pokemon.name.toLowerCase()),
        ),
      );
    if (tappedValue === "") {
      setPokemonMatches([]);
    }
  };

  return (
    <>
      <div className="relative w-[45vw]">
        <label className="relative flex flex-col">
          {label}
          <div className="flex input justify-center overflow-hidden items-center max-h-8 bg-white border-2 border-gray-300 p-2 rounded-lg">
            <BadgesList badges={teamValue} setBadges={setTeamValue} />

            <input
              {...(register ? register(name) : "")}
              disabled={teamValue.length > 3}
              className="text-black rounded flex-1 border-0 outline-none focus:ring-0 w-full"
              type="search"
              onFocus={() => setPokemonListIsShown(true)}
              onBlur={() => setPokemonListIsShown(false)}
              placeholder="Chose a pokemon"
              onChange={onChangeHandler}
              value={inputValue}
            />
          </div>
          <p className="absolute -bottom-5 text-orange-500 text-sm">
            {error ?? " "}
          </p>
        </label>
        {pokemonListIsShown && (
          <ul className="w-full absolute flex flex-col max-h-48 overflow-auto z-10">
            {pokemonMatches.map((pokemon) => (
              <li
                className="bg-amber-50 text-black p-1"
                onMouseDown={(e) => onPokemonClickHandler(e)}
                key={pokemon.url}
                data-value={pokemon.name}
              >
                {pokemon.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchSelect;
