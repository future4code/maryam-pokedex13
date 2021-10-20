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

`
export const LogoContainer = styled.div`
  display: flex;
  height: auto;
  width: 5%;  
`

export const PokedexLogo = styled.img`
width: 100%;
height: 100%;
`
export const PokedexTitle = styled.img`
width: 150px;
height: 100%;
`

export const PokemonNameAndButtonsContainer = styled.div`
display: flex;
align-content: center;
align-items: center;
justify-content: space-between;
`
export const NamePokemon = styled.p`
  text-transform: uppercase;
`
export const AddButton = styled.button`
display: flex;
align-content: center;
align-items: center;
`
export const RemoveButton = styled.button`
display: flex;
align-content: center;
align-items: center;
`

export const BackButtonContainer = styled.div`
display: flex;
align-content: center;
align-items: center;
`
export const BackButton = styled.button`
display: flex;
align-content: center;
align-items: center;`


//Detail Containers
export const DetailContainers = styled.div``

export const TypeAndImgsContainers = styled.div`
display: flex;
align-content: center;
justify-content: space-around;
align-items: center;
`

export const PokeType = styled.div``

export const PokeImgFront = styled.div``
export const ImgFront = styled.img``

export const PokeImgBack = styled.div``
export const ImgBack = styled.img``

export const DataContainer = styled.div`
display: flex;
align-content: center;
justify-content: space-around;
align-items: center;
`
export const PokeStats = styled.div`
display: flex;
flex-direction: column;
align-content: center;
justify-content: space-between;
align-items: center;
`
export const PokeMoves = styled.div`
display: flex;
flex-direction: column;
align-content: center;
justify-content: space-between;
align-items: center;`