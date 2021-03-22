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

const {REACT_APP_API_KEY, REACT_APP_HASH} = process.env

const AllCharacters: React.FC = () => {
    const [characters, setCharacters] = useState<Characters[]>([])

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);


    useEffect(() => {
        const fetchPost = async () => {
            api.get(`characters?limit=100&ts=1616200616&apikey=${REACT_APP_API_KEY}&hash=${REACT_APP_HASH}`).then(response => {
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
                    // eslint-disable-next-line
                    <a onClick={() => setCurrentPage(number)} href="#">{number}</a>
                ))}
            </Pagination>
            <Footer />
        </Boby>
    )
}   

export default AllCharacters;