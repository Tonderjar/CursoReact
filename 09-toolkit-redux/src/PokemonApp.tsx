import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";
import { AppDispatch, RootState } from "./store";

export const PokemonApp = () => {
  const { pokemons, isLoading, page } = useSelector(
    (state: RootState) => state.pokemons
  );
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons(0));
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? "True" : "False"}</span>

      <ul>
        {pokemons.map(({ name }) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>

      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
