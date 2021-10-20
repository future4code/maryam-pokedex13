import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../img/Logo.png";
import PokeCard from "../../components/PokeCard/PokeCard";
import { Container, PokemonListContainer, HeaderContainer, LogoContainer, PokedexTitle, TitleContainer, PokedexLogo } from "./styled";
import { goToPokedex } from "../../routes/coordinator";
import PokeLogo from '../../img/PokedexLogo.png';



const HomePage = (props) => {
  const history = useHistory()
  const currentPage = "home"

  return (
    < Container >
      <HeaderContainer>
        <LogoContainer>
          <PokedexLogo onClick={() => goToPokedex(history)} alt="logo" src={Logo}></PokedexLogo>

          <PokedexTitle onClick={() => goToPokedex(history)} alt="title-pokédex" src={PokeLogo}></PokedexTitle>
        </LogoContainer>

        <TitleContainer>
          <p>LISTA DE POKEMONS</p>
        </TitleContainer>
      </HeaderContainer>

      <PokemonListContainer>
        <PokeCard
          currentPage={currentPage}
        />
      </PokemonListContainer>

    </ Container >
  );
};

export default HomePage;
