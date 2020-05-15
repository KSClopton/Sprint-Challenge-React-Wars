// Write your Character component here
import React from "react";
import CardMaker from "./CardMaker"

const CharacterCard = (props) => {
    
    return (
        <div>
            {props.data.map((item) => {
                return <CardMaker key={item.id} name={item}/>
            })}
        </div>
    );    
}

export {CharacterCard};