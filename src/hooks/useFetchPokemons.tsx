import {useEffect, useState} from "react";
import {fetchAllPokemons} from "../api";

const useFetchPokemons = () => {
    const [pokemons, setPokemons] = useState<{ name: string; url: string; }[]>([]);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const [fetchError, setFetchError] = useState<Error | null>(null);
    useEffect(() => {
        const fetchPokemonsData = async () => {
            try {
                const res = await fetchAllPokemons();
                setPokemons(res.results);
            } catch (err) {
                setFetchError(err as Error);
                setModalIsOpen(true);
            }
        };
        fetchPokemonsData();
    }, []);
    return [
      pokemons,
      fetchError,
      setFetchError,
      modalIsOpen,
      setModalIsOpen,
    ] as const;
};

export default useFetchPokemons;
