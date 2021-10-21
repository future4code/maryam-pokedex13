import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
hight: 100vh;
width: 100vw;
font-size: 8px;
`
// Header Container
export const HeaderContainer = styled.div`
display: flex;
align-content: center;
justify-content: space-between;
align-items: center;
padding: 8px
`
export const LogoContainer = styled.div`
  display: flex;
  height: auto;
  width: 5%;  
`

export const PokedexLogo = styled.img`
width: 100%;
height: 100%;
cursor: pointer;
`
export const PokedexTitle = styled.img`
width: 150px;
height: 100%;
cursor: pointer;
`


export const TitleContainer = styled.div``


// Pokemons List Container
export const PokemonListContainer = styled.div`
  display:flex;
  justify-content:center;
  margin-top: 2rem;
`