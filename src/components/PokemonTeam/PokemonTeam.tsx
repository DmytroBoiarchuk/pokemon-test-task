import PokemonSpritesCard from "./PokemonSpritesCard";


interface Props {
    pokemons: string[];
}
const PokemonTeam = ({pokemons}:Props) => {
    return (
        <div className='flex flex-col gap-4 w-[40vw]'>
            {pokemons.map(pokemon => <PokemonSpritesCard name={pokemon} key={pokemon} />)}
        </div>
    );
};

export default PokemonTeam;
