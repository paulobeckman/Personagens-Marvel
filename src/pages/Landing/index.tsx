import React, { useState, useEffect } from 'react';
import api from '../../services/api'

import './styles.css'

interface Character {
    id: number | string;
    thumbnail: {
        path: string,
        extension:string
    };
    name: string;
}

function Landing() {
    const [characterList, setCharacterList] = useState<Character[]>([])

    useEffect(() => {
        api.get("characters?limit=100&ts=1616200616&apikey=e2ad6feea594422521a37012deadb32b&hash=f41beffda543e26aac87c4d8fc402b02").then(response => {
            setCharacterList(response.data.data.results)
        });
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="cards characters">

                    {characterList.map(character => {
                        return(
                            <div className="card">
                                <div className="card-thumb-frame">
                                    <img src={character.thumbnail.path+"/portrait_fantastic."+character.thumbnail.extension} alt="imagem do card"/>
                                </div>

                                <div className="card-body">
                                    <div>{character.name}</div>
                                </div>
                            </div>  
                        )
                    })}
                
                </div>
            </div>
        </div>
    )
}

export default Landing;