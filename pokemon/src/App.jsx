import { useEffect, useState } from "react";
import Header from "./components/Header";
import PokemonForm from "./components/PokemonForm";
import PokemonList from "./components/PokemonList";
import "./App.css";

export default function App() {
  const [pokemons, setPokemons] = useState(() => {
    try {
      const saved = localStorage.getItem("pokemons_v1");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("pokemons_v1", JSON.stringify(pokemons));
  }, [pokemons]);

  const addPokemon = (pokemon) => {
    setPokemons((prev) => [pokemon, ...prev]);
  };

  const removePokemon = (index) => {
    setPokemons((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="content-wrapper">
          <PokemonForm onAddPokemon={addPokemon} />
          <PokemonList pokemons={pokemons} onRemove={removePokemon} />
        </div>
      </main>
    </div>
  );
}
