import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const LabelText = styled.h2`
    font-size: 40px;
    font-style: italic;
    font-weight: 400;
    color: var(--color-label-text);
    width: 500px;
    text-align: center;
`;

export const SearchContainer = styled.div`
    flex-direction: column;
`;

export const SearchInput = styled.input`
    width: 400px;
    height: 50px;
    font-size: 18px;
    font-style: italic;
    color: var(--color-input-placeholder);
    border-radius: 5px 0 0 5px;
    border: 1px solid var(--color-input-border);
    text-indent: 20px;
    
    /* Não vou usar isso porém isso é legal...
    &:focus { 
        width: 100px;
        transition: ease-in-out, width .35s ease-in-out;
    } */

    &::placeholder {
        color: var(--color-input-placeholder);
        font-size: 19px;
        font-style: italic;
        left: 30px;
    }
`;

export const SearchButton = styled.button`
    border-radius: 0 5px 5px 0;
    border: none;
    width: 118px;
    height: 50px;
    font-size: 20px;
    font-style: italic;
    font-weight: 1;
    background: var(--color-button-background);
    color: var(--color-button-text);

    &:hover {
        cursor: pointer;
    }
    
`;