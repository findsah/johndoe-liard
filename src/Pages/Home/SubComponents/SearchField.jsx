import React from 'react'
import { FiSearch } from 'react-icons/fi'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    align-items: center;
    background-color: #F5F5F5;
`

const SearchBar = styled.input`
    width: 90%;
    border: none;
    outline: none;
    height: 100%;
    background-color: #F5F5F5;
    border-radius: 8px;
`

export const SearchField = () => {
    return (
        <Wrapper>
            <FiSearch style={{ width: "10%", fontSize: "20px", padding: "0 5px" }} />
            <SearchBar placeholder='Search Experiences' />
        </Wrapper>
    )
}
