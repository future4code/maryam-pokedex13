import styled from "styled-components";


export const CardsContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:80%;
    justify-content:center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    box-sizing:border-box;
`

export const PokemonCard = styled.div`
    background-color: #dddddd;
    width: 250px;
    height:250px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:16px;
    border-bottom-left-radius:8px;
    border-bottom-right-radius:8px;

    img{
        align-self:center;
        flex-grow:1;
    }

    p{
        margin-left:8px;
    }
`
export const CardButtonsContainer = styled.div`
    display:flex;
`
export const CardButtonRight = styled.button`
    width:50%;
    border-top-left-radius:8px;
    border-bottom-right-radius:8px;
    background-color: #A0DA5E;
    border:none;
`
export const CardButtonLeft = styled.button`
    width:50%;
    border-top-right-radius:8px;
    border-bottom-left-radius:8px;
    background-color: #BE93E7;
    border:none;
`