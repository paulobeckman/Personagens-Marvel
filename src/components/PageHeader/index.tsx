import React from 'react'
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo-marvel.png';

import {Header, TopBarContainer, Logo, OptionNavigation} from './styles';

const PageHeader: React.FC = () => {
    return (
        <Header>
            <TopBarContainer>
                <OptionNavigation>
                    <Link to="/">
                        <strong>Personagens</strong>
                    </Link>
                </OptionNavigation>
                <Logo>
                    <Link to="/">
                        <img src={logoImg} alt="Marvel"/>
                    </Link>
                </Logo>
            </TopBarContainer>
        </Header>
    );
}

export default PageHeader;
