import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    background-color: var(--color-red);
    justify-content: center;

    justify-content: space-around;
    align-items: center;;
`

export const TopBarContainer = styled.div`
    display: flex;
    color: var(--color-text-in-primary);
    padding: 26px 0;
`

export const Logo = styled.div`
    img{
        width: 131px;
        right:0
    }
`


export const OptionNavigation = styled.div`
    display: flex;
    align-items: center;

    strong{
        font-size: 18px;
        text-transform: uppercase;
        left:0
    }
`
