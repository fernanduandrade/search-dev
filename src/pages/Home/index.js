import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { 
    Container,
    LabelText, 
    SearchContainer, 
    SearchInput, 
    SearchButton 
} from './styles/home';

export default function Home() {

    const {setUserInput} = useContext(UserContext);
     
    return(
        <Container>
            <SearchContainer>
                <LabelText>Search Devs</LabelText>
                <SearchInput 
                    placeholder="Type the username here..." 
                    onChange={(e) => setUserInput(e.target.value)}
                />

                <Link to='/profile'>
                    <SearchButton>
                        <FontAwesomeIcon icon={faSearch}/> Search
                    </SearchButton>
                </Link>

            </SearchContainer>
        </Container>
    );
};

