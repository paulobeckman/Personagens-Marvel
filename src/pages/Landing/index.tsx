import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import api from '../../services/api'
import Footer from '../../components/Footer';

import { Boby, CardsCharacters, Card ,CardBody, CardThumbFrame, Pagination } from './styles';

interface Characters {
    id: number | string;
    thumbnail: {
        path: string,
        extension:string
    };
    name: string;
}

const AllCharacters: React.FC = () => {
    const [characters, setCharacters] = useState<Characters[]>([])

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);


    useEffect(() => {
        const fetchPost = async () => {
            api.get("characters?limit=100&ts=1616200616&apikey=e2ad6feea594422521a37012deadb32b&hash=f41beffda543e26aac87c4d8fc402b02").then(response => {
                setCharacters(response.data.data.results)
            });
        }

        fetchPost()
    }, []);

    const total = characters.length
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFistPost = indexOfLastPost - postsPerPage;
    const currentCharacters = characters.slice(indexOfFistPost, indexOfLastPost)
    
    const pageNumbers = []
    
    for(let i = 1; i<= Math.ceil(total/postsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <Boby>
            <PageHeader/>
            <div id="page-landing-content" className="container">
                <h1>Lista de Personagens</h1>

                <CardsCharacters>
                {currentCharacters.map(character => {
                    return(
                        <Link to={`/character/${character.id}`}>
                            <Card>
                                <CardThumbFrame>
                                    <img src={character.thumbnail.path+"/portrait_fantastic."+character.thumbnail.extension} alt="imagem do card"/>
                                </CardThumbFrame>

                                <CardBody>
                                    <p>{character.name}</p>
                                </CardBody>    
                            </Card>
                        </Link>
                    )
                })}
                </CardsCharacters>
            </div>
            <Pagination>
                {pageNumbers.map(number => (
                    <a onClick={() => setCurrentPage(number)}>{number}</a>
                ))}
            </Pagination>
            <Footer />
        </Boby>
    )
}   

export default AllCharacters;