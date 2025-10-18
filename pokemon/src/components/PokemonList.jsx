import "../style/PokemonList.css";

export default function PokemonList({ pokemons, onRemove }) {
  return (
    <div className="pokemon-list">
      <h2>Pokémons Cadastrados</h2>
      {pokemons.length === 0 ? (
        <p>Nenhum Pokémon cadastrado ainda.</p>
      ) : (
        <ul>
          {pokemons.map((pokemon, index) => (
            <li key={index}>
              <div>
                <strong>{pokemon.nome}</strong> — {pokemon.tipo} —{" "}
                <span>{pokemon.poder}%</span>
              </div>
              <button onClick={() => onRemove(index)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
