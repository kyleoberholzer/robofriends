import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {

    const cardComponent  = robots.map((user, i) => {
        return <Card key = {i} id = {robots[i].id} name = {robots[i].name} email = {robots[i].email}/>
    }) //creates a list of Card elements populated with info from the robots array

    return(
        <div>
            {cardComponent}
        </div>
    ); //calls the cardComponent function and returns the list of Card elements to index.js
}

export default CardList;