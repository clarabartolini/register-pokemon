import "../style/Header.css";
import logo from "../assets/logo.png"; 

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Pokémon Logo" className="logo" />
    </header>
  );
}