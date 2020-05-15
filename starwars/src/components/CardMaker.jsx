import React from "react";
import styled from "styled-components"

const CardMaker = ({name}) => {
    return (
        <StyleCards>
            <h2>{name.name}</h2>
            <Attributes>
                <p>Skin Color: {name.skin_color}</p>
                <p>Height: {name.height}cm</p>
                <p>Gender: {name.gender}</p>
                <p>Mass: {name.mass}kg</p>
            </Attributes>
        </StyleCards>
        
    )
}

const StyleCards = styled.div`
    display: flex;
    justify-content: space-between;
    color: #A0522D;
    text-shadow: 1px 1px 5px #fff;
    border: solid grey 1px;
    padding: 1px;
    h2{
        border: solid grey 2px;
        margin: auto;
        padding: 0 5% 0 0;
        
        text-shadow: 1px 1px 5px #fff;
    }

`
const Attributes = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 45%;
    border-left: solid #F4A460 2px;
    padding-left: 5%;

    p{
        width: 45%;
    }



`
export default CardMaker;