import React, { useState } from "react"
import { GlobalStateContext } from "./GlobalStateContext";
import axios from "axios";
import { BASE_URL } from "../constants/urls";


export const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([]);
    const [pokeList, setPokeList] = useState([])
    const [pokeDetail, setPokeDetail] = useState([])
    const [page, setPage] = useState("")



    const getPokemonList = () => {
        axios.get(`${BASE_URL}/?limit=40`)
            .then((res) => {
                setPokeList(res.data.results)
            })
            .catch((err) => {
                alert(err.response)
            })
    }

    const getPokemonListWithImages = (pokeList) => {
        const detailList = []

        pokeList.forEach((poke) => {
            axios.get(`${BASE_URL}/${poke.name}`).then((res) => {
                detailList.push(res.data)
                if (detailList.length === 40) {
                    const pokeOrder = detailList.sort((a, b) => {
                        return a.id - b.id
                    })
                    setPokeDetail(pokeOrder)
                }
            })
        });
    }

    const addPokemonToPokedex = (poke) => {
        const index = pokedex.findIndex((pokeInPokedex) => {
            if (pokeInPokedex.id === poke.id) {
                return true
            } else {
                return false
            }
        })
        if (index === -1) {
            const pokedexCopy = [...pokedex, poke]

            setPokedex(pokedexCopy)
            alert("Pokémon adicionado a sua Pokédex!")

        } else {
            alert("Você já tem esse Pokémon em sua Pokédex!")
        }

    }

    const removePokemonToPokedex = (poke) => {
        console.log("remove")
        const filteredPokedex = pokedex.filter((pokeToRemove) => {
            if (pokeToRemove.id === poke.id) {
                alert("Pokémon removido da sua Pokédex!")
                return false
            } else {
                return true
            }
        })
        setPokedex(filteredPokedex)
    }


    return <GlobalStateContext.Provider
        value={
            {
                pokedex,
                setPokedex,
                addPokemonToPokedex,
                removePokemonToPokedex,
                getPokemonList,
                pokeList,
                setPokeList,
                getPokemonListWithImages,
                pokeDetail,
                setPokeDetail,
                page,
                setPage
            }
        }
    >
        {props.children}
    </GlobalStateContext.Provider>
}