import styled from 'styled-components';

export const Boby = styled.div`
    h1{
        display: flex;
        font-size: 50px;
        font-weight: 700;
        color: var(--color-black);
        text-transform: uppercase;
        justify-content: center;
        padding-top: 68px;
        padding-bottom: 40px;
    }
`

export const CardsCharacters = styled.div`
        display: grid;
        column-gap: 46px;
        row-gap: 70px;
        grid-template-columns: repeat(auto-fill,minmax(177px, 177px));
        justify-content: center;
`

export const Card = styled.div`
    height: 355px;
    background-color: var(--color-black);
    border-radius: 30px;
    transition: .5s;
    cursor: pointer;

    &:hover img{
        transition: .3s;
        transform: scale(1.1)
    }

`
export const CardThumbFrame = styled.div`
    position: relative;
    width: 177px;
    height: 210px;
    overflow: hidden;

    &::after{
        content: "";
        height: 4px;
        width: 100%;
        position: absolute;
        background-color: var(--color-red);
        left: 0;
        bottom: 0;
    }

    img{
        position: relative;
        width: 177px;
        height: 210px;
    }
`
export const CardBody= styled.div`
    padding: 16px 24px;

    p{
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
`

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 80px;

    a+a{
        margin-left:20px
    }
    a{
        font-size: 22px;
        /* color: var(--color-black); */
        cursor: pointer;
        padding:  5px 10px;
        background: var(--color-red);
        border-radius: 50px;
        transition: .3s;
    }

    a:hover{
        transition: .3s;
        background: var(--color-black);
    }
`;

export const PaginationButton = styled.div`
  display: flex;
`;

export const PaginationItem = styled.div`
  margin: 0 10px;
  cursor: pointer;

`;

