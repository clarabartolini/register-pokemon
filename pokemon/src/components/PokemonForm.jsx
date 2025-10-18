import { useState } from "react";
import "../style/PokemonForm.css";

export default function PokemonForm() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [poder, setPoder] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !tipo || !descricao || !poder) {
      setMensagem("🚨 Preencha todos os campos!");
      return;
    }

    setMensagem("✅ Pokémon cadastrado!");
    setNome("");
    setTipo("");
    setDescricao("");
    setPoder("");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Ex: Pikachu"
        />

        <label>Tipo</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Selecione o tipo</option>
          <option>🔥 Fogo</option>
          <option>💧 Água</option>
          <option>🌱 Grama</option>
          <option>⚡ Elétrico</option>
          <option>🧠 Psíquico</option>
          <option>🪨 Pedra</option>
        </select>

        <label>Descrição</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Fale um pouco sobre o Pokémon..."
        />

        <label>Poder</label>
        <input
          type="range"
          min="0"
          max="100"
          value={poder}
          onChange={(e) => setPoder(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
}
