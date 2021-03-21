import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import api from '../../services/api'


import './styles.css'

interface Character {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string,
        extension:string
    };
    comics: {
        items: Array<{
            name: string;
            resourceURI: string;
        }>
    }
}

interface CharacterParams {
    id: string;
}

export default function Character() {
    const params = useParams<CharacterParams>();
    const [character, setCharacter] = useState<Character>()

    useEffect(() => {
        api.get(`characters/${params.id}?limit=100&ts=1616200616&apikey=e2ad6feea594422521a37012deadb32b&hash=f41beffda543e26aac87c4d8fc402b02`).then(response => {
            setCharacter(response.data.data.results[0])
            console.log(response.data.data.results[0])
        });
    }, [params.id]);    

    if(!character){
        return <p>Carregando...</p>
    }

    return(
        <div id="page-character">
            <PageHeader 
                title="Personagens"
            />
            <div id="page-character-content" className="container">
                <h1>{character.name}</h1>

                <div className="imageDescription">
                    <img src={character.thumbnail.path+"/portrait_fantastic."+character.thumbnail.extension} alt="imagem do card"/>

                    <p>{character.description}</p>
                </div>

                <h2>Quadrinhos</h2>
                <div className="comics">
                    {character.comics.items.map(item => {
                        return(
                            <p>{item.name}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}