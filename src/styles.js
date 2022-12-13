import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #eee9e5;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 275px;
    background-color: #eee9e5;
`

export const Title = styled.h2`
    font-family: 'Merienda One', cursive;
    font-size: 50px;
    text-align: center;
    padding-bottom: 60px;
    color: #292c34;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const Footer = styled.h2`
    font-family: 'Merienda One', cursive;
    font-size: 12px;
    text-align: center;
    padding-top: 6rem;
    color: #292c34;
`