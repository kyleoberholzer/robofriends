import React, { useState, useEffect } from 'react';
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';

function App () {
    const [robots, setRobots] = useState([]); //creating state for robots
    const [searchField, setSearchField] = useState(''); //creating state for searchfield
    const [count, setCount] = useState (0); // creates a state fo the button

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobots(users)});
        console.log(count);
    }, [count] )

    const onSearchChange = (event) => {         // function to set the searchfield
        setSearchField(event.target.value )
    }

    const filteredRobots = robots.filter(robot => { // function to set the filtered Robot array
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if (!robots.length){ //checks if robots has a length in case it's still loading behind
        return <h1>Loading...</h1>
    } else {
        return(
            <div className='tc'>
                <h1 className = 'sega-logo'>Robofriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <button onClick={() =>setCount(count+2)}>Click me</button>
                <Scroll>
                <CardList robots = { filteredRobots } />
                </Scroll>
            </div>
        )
    }
    
}

export default App; 
