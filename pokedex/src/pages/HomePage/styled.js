import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
hight: 100vh;
width: 100vw;
`

// Header Container
export const HeaderContainer = styled.div`
display: flex;
align-content: center;
justify-content: space-between;
`
export const LogoContainer = styled.div`
  display: flex;
  height: auto;
  width: 5%;
  padding-left: 10vh;
  cursor: pointer;
`

export const PokedexLogo = styled.img`
width: 100%;
height: 100%;
cursor: pointer;
`
export const PokedexTitle = styled.img`
width: 150px;
height: 100%;
`


export const TitleContainer = styled.div``


// Pokemons List Container
export const PokemonListContainer = styled.div`
  display:flex;
  justify-content:center;
  margin-top: 2rem;
`