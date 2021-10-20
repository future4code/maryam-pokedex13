import React, { useContext, useEffect, useState } from "react";
import Logo from "../../img/Logo.png";
import PokeLogo from '../../img/PokedexLogo.png';
import {AddButton, BackButton, BackButtonContainer, Container, DetailContainers, HeaderContainer, ImgBack, ImgFront, LogoContainer, NamePokemon, PokedexLogo, PokedexTitle, PokeImgBack, PokeImgFront, PokemonNameAndButtonsContainer, PokeMoves, PokeStats, PokeType, RemoveButton, TypeAndImgsContainers } from "./styled";
import { useHistory, useParams } from "react-router-dom";
import { goBack, goToPokedex } from "../../routes/coordinator";
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { GlobalStateContext } from "../../global/GlobalStateContext";





const DetailsPage = (props) => {
    const history = useHistory();
    const params = useParams();
    const [pokemon, setPokemon] = useState({});
    const mainAttacks = pokemon.moves && pokemon.moves.slice(0, 10);
    const { addPokemonToPokedex, removePokemonToPokedex } = useContext(GlobalStateContext)


    const getPokemonDetail = () => {

        axios.get(`${BASE_URL}/${params.name}`).then((res) => {
            setPokemon(res.data)

        }).catch((err) => {
            alert(err.response)
        })
    }

    useEffect(() => {
        getPokemonDetail()
    }, [])

    return (
        <div>
            {pokemon.name ? (
                <Container>
                    <HeaderContainer>
                        <LogoContainer>
                            <PokedexLogo onClick={() => goToPokedex(history)} alt="logo" src={Logo}></PokedexLogo>

                            <PokedexTitle onClick={() => goToPokedex(history)} alt="title-pokédex" src={PokeLogo}></PokedexTitle>
                        </LogoContainer>

                        <PokemonNameAndButtonsContainer>
                            <NamePokemon>{pokemon.name}</NamePokemon>

                            <AddButton onClick={() => addPokemonToPokedex(pokemon)}
                                size="medium"
                                variant="contained"
                                color="default"
                                endIcon={<Icon>send</Icon>}
                            >
                                ADICIONAR
                            </AddButton>

                            <RemoveButton onClick={() => removePokemonToPokedex(pokemon)}
                                size="medium"
                                variant="contained"
                                color="secondary"
                                endIcon={<DeleteIcon />}
                            >
                                REMOVER
                            </RemoveButton>
                        </PokemonNameAndButtonsContainer>

                        <BackButtonContainer>
                            <BackButton className="PHeader"
                                onClick={() => goBack(history)}>
                                VOLTAR
                            </BackButton>
                        </BackButtonContainer>
                    </HeaderContainer>

                    <DetailContainers>
                        <TypeAndImgsContainers>
                            <PokeType>
                                {pokemon.types && pokemon.types.map((type) => {
                                    return <div key={type.type.name}>
                                        <h3>Tipo {type.slot}</h3>
                                        <p>{type.type.name}</p>
                                    </ div>
                                })}
                            </PokeType>

                            <PokeImgFront>
                                <ImgFront alt={pokemon.name} src={pokemon.sprites && pokemon.sprites.front_default} />
                            </PokeImgFront>

                            <PokeImgBack>
                                <ImgBack alt={pokemon.name} className="ImgBack" src={pokemon.sprites && pokemon.sprites.back_default} />
                            </PokeImgBack>
                        </TypeAndImgsContainers>

                        <PokeStats>
                            <h1>Poderes</h1>
                            <p>hp: {pokemon.stats && pokemon.stats[0].base_stat}</p>
                            <p>attack: {pokemon.stats && pokemon.stats[1].base_stat}</p>
                            <p>defense: {pokemon.stats && pokemon.stats[2].base_stat}</p>
                            <p>special-attack: {pokemon.stats && pokemon.stats[3].base_stat}</p>
                            <p>special-defense: {pokemon.stats && pokemon.stats[4].base_stat}</p>
                            <p>speed: {pokemon.stats && pokemon.stats[5].base_stat}</p>
                        </PokeStats>

                        <PokeMoves>
                            <h1>Principais Ataques</h1>
                            {mainAttacks && mainAttacks.map((move) => {
                                return <p key={move.move.name}>{move.move.name}</p>
                            })}
                        </PokeMoves>
                    </DetailContainers>
                </Container>
            ) : (
                <p>Carregando detalhes...</p>
            )
            }
        </div>
    );
};

export default DetailsPage;
