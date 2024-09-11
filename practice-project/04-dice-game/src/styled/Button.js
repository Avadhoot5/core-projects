import styled from 'styled-components';

export const Button = styled.button`
    all: unset;
    background: black;
    color: white;
    width: 220px;
    height: 44px;
    border-radius: 5px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid black;
    transition: 0.2s background ease-out;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.2s background ease-in;
    }
`
