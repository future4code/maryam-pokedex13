import React from "react";
import Logo from "../../img/Logo.png";
import { PokemonListContainer, Container, HeaderContainer, LogoContainer, PokedexLogo, PokedexTitle, BackButtonContainer, BackButton } from "./styled";
import { useHistory } from "react-router-dom";
import { goToHome, goToPokedex } from "../../routes/coordinator";
import PokeCard from "../../components/PokeCard/PokeCard";
import PokeLogo from '../../img/PokedexLogo.png';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


const PokedexPage = (props) => {
  const history = useHistory()
  const currentPage = "pokedex"

  return (
    <Container>
      <HeaderContainer>
        <LogoContainer>
          <PokedexLogo onClick={() => goToPokedex(history)} alt="logo" src={Logo}></PokedexLogo>

          <PokedexTitle onClick={() => goToPokedex(history)} alt="title-pokédex" src={PokeLogo}></PokedexTitle>
        </LogoContainer>

        <BackButtonContainer >
          <BackButton onClick={() => goToHome(history)}>
            <ArrowBackIosIcon color="secondary" fontSize="large" /> VOLTAR PARA LISTA
          </BackButton>
        </BackButtonContainer>
      </HeaderContainer>


      <PokemonListContainer>

        <PokeCard
          currentPage={currentPage}
        />

      </PokemonListContainer>
    </Container>
  );
};

export default PokedexPage;
