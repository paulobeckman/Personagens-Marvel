import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import api from '../../services/api'


import { Body, ImageDescription, Comics } from './styles';


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

interface Comics {
    title: string;
    thumbnail: {
        path: string,
        extension: string;
    };
}

interface CharacterParams {
    id: string;
}

export default function Character() {
    const params = useParams<CharacterParams>();
    const [character, setCharacter] = useState<Character>()
    const [comics, setComics] = useState<Comics[]>([])

    useEffect(() => {
        api.get(`characters/${params.id}?limit=100&ts=1616200616&apikey=e2ad6feea594422521a37012deadb32b&hash=f41beffda543e26aac87c4d8fc402b02`).then(response => {
            setCharacter(response.data.data.results[0])
            console.log(response.data.data.results[0])
        });

        api.get(`characters/${params.id}/comics?limit=100&ts=1616200616&apikey=e2ad6feea594422521a37012deadb32b&hash=f41beffda543e26aac87c4d8fc402b02`).then(response => {
            setComics(response.data.data.results)
            console.log(response.data.data.results)
        });


    }, [params.id]);    

    if(!character){
        return <p>Carregando...</p>
    }

    return(
        <Body>
            <PageHeader/>
                <div id="page-character-content" className="container">
                    <h1>{character.name}</h1>

                    <ImageDescription>
                        <img src={character.thumbnail.path+"/portrait_fantastic."+character.thumbnail.extension} alt="imagem do card"/>

                        {character.description
                            ? <p>{character.description}</p>
                            : <p>Descrição não encontrada</p>
                        }
                    </ImageDescription>

                    <h2>Quadrinhos</h2>

                    <Comics>
                        {comics.map(comic => {
                            return(
                                <div>
                                    <img src={comic.thumbnail.path+"/portrait_fantastic."+comic.thumbnail.extension} alt={comic.title}/>
                                    <p>{comic.title}</p>
                                </div>
                            )
                        })}
                    </Comics>
                </div>
            <Footer />
        </Body>
    )
}