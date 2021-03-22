import styled from 'styled-components';

export const Body = styled.div`
    h1, h2{
        font-size: 50px;
        font-weight: 700;
        color: var(--color-black);
        text-transform: uppercase;
        padding-top: 68px;
        padding-bottom: 10px;
    }
`

export const ImageDescription = styled.div`
    display: flex;
    align-items: center;

    p{
        color: var(--color-black); 
        font-weight: 700;
        font-size: 20px;
        text-align: justify;
        margin-left: 20px;
    }
`

export const Comics = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill,minmax(177px, 177px));
    margin-top: 10px;

    p{
        font-weight: 700;
        color: var(--color-black);
        font-size: 20px;
    }
`