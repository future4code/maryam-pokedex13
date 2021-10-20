import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToDetails } from "../../routes/coordinator";
import { CardsContainer, PokemonCard, CardButtonsContainer, CardButtonLeft, CardButtonRight } from "./styled";

const PokeCard = (props) => {
    const history = useHistory();
    const { pokedex, pokeList, pokeDetail, page, setPage, addPokemonToPokedex, removePokemonToPokedex, getPokemonList, getPokemonListWithImages } = useContext(GlobalStateContext)

    useEffect(() => {
        getPokemonList()
        setPage(props.currentPage)
    }, [setPage, props.currentPage])

    useEffect(() => {
        getPokemonListWithImages(pokeList)
    }, [pokeList])

    const renderCardPage = () => {

        if (page === "home") {
            return pokeDetail[0] ? (
                pokeDetail.map((poke) => {
                    return <PokemonCard key={poke.name}>
                        <p>#{poke.id} <strong>{poke.name}</strong></p>
                        <img alt={poke.name} src={poke.sprites.front_default} />
                        <CardButtonsContainer>
                            <CardButtonLeft onClick={() => addPokemonToPokedex(poke)}>Adicionar ao Pokédex</CardButtonLeft>
                            <CardButtonRight onClick={() => goToDetails(history, poke.name)}>Ver detalhes</CardButtonRight>
                        </CardButtonsContainer>
                    </PokemonCard>
                })
            ) : (
                <p>Carregando...</p>
            )

        } else if (page === "pokedex") {
            return pokedex[0] ? (pokedex.map((poke) => {
                return <PokemonCard key={poke.name}>
                    <p>#{poke.id} <strong>{poke.name}</strong></p>
                    <img alt={poke.name} src={poke.sprites.front_default} />
                    <CardButtonsContainer>
                        <CardButtonLeft onClick={() => removePokemonToPokedex(poke)}>Remover do Pokédex</CardButtonLeft>
                        <CardButtonRight onClick={() => goToDetails(history, poke.name)}>Ver detalhes</CardButtonRight>
                    </CardButtonsContainer>
                </PokemonCard>
            })
            ) : (
                <p>Seu Pokédex ainda está vazio :(</p>
            )
        }
    }

    return (
        <CardsContainer>
            {renderCardPage()}
        </CardsContainer>
    );
};

export default PokeCard;
