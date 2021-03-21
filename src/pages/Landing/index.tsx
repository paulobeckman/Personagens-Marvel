import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import api from '../../services/api'

import './styles.css'

interface Characters {
    id: number | string;
    thumbnail: {
        path: string,
        extension:string
    };
    name: string;
}

export default function Landing() {
    const [characters, setCharacters] = useState<Characters[]>([])

    useEffect(() => {
        api.get("characters?limit=100&ts=1616200616&apikey=e2ad6feea594422521a37012deadb32b&hash=f41beffda543e26aac87c4d8fc402b02").then(response => {
            setCharacters(response.data.data.results)
        });
    }, []);

    if(!characters){
        return <p>Carregando...</p>
    }

    return (
        <div id="page-landing">
            <PageHeader 
                title="Personagens"
            />
            <div id="page-landing-content" className="container">
                <h1>Lista de Personagens</h1>
                <div className="cards characters">

                    {characters.map(character => {
                        return(
                            <Link to={`/character/${character.id}`}>
                                <div className="card">
                                    <div className="card-thumb-frame">
                                        <img src={character.thumbnail.path+"/portrait_fantastic."+character.thumbnail.extension} alt="imagem do card"/>
                                    </div>

                                    <div className="card-body">
                                        <p>{character.name}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                
                </div>
            </div>
        </div>
    )
}