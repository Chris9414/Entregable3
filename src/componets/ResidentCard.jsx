import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css'

const ResidentCard = ({url}) => {

    const [character,setCharacter] = useState({})

    useEffect(() => {
        axios.get(url)
        .then( res => setCharacter(res.data))
    },[])

    const isAlive = character.status === "Alive"
    const isDead = character.status === "Dead"
    

    console.log(isAlive)
    console.log(isDead)

    return (
        <div >
            <div className='card'>
                <img src={character.image} alt="" />
                <h3>{character.name}</h3>
                <div className='character_data_container'>
                    <div>
                        <p className='character_item'>SPECIE</p>
                        <p className='character_data'>{character.species}</p>
                    </div>
                    <div>
                        <p className='character_item'>ORIGIN</p>
                        <p className='character_data'>{character.origin?.name}</p>
                    </div>
                    <div>
                        <p className='character_item'>EPISODES</p>
                        <p className='character_data'>{character.episode?.length}</p>
                    </div>
                    <div className='status_container'>
                        <div className= {`status_circle ${isAlive ? "background_green" :  isDead ? "background_red" : "background_grey"}`} ></div>
                        <p className='status'>{character.status}</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ResidentCard;