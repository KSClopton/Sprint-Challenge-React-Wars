import React from "react";
import styled from "styled-components";

const CardMaker = ({name}) => {
    return (
        <div>
            <h2>{name.name}</h2>
        </div>
    )
}

const styleCards = styled.div
export default CardMaker;