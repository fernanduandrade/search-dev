import React, { useContext, useEffect, useState } from 'react';
import UseConext from '../../context/UserContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import api from '../../services/api';
import { Container, RepoCard, RepoTitle, RepoDescription, RepoStatus } from './styles/repoinfo';
import formatUpdatedDate from '../../utils/formatUpdatedDate';
import LoadingInfo from '../LoadingInfo';

function UserView() {

    const { userInput, repositories, setRepositories } = useContext(UseConext);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        async function loadRepositories() {
            const { data } = await api.get(`${userInput}/repos`);
            setRepositories(data);
            setLoading(true)
        };

        loadRepositories();
    }, []);

    return(
        <Container>
            {loading ? repositories
                .sort((stars1, stars2) =>  stars2.stargazers_count - stars1.stargazers_count)
                .map(repository => {
                    const { stargazers_count, description, name, updated_at, id } = repository;
        
                    return(
                        <RepoCard key={id}>
                            <RepoTitle>{name}</RepoTitle>
                            <RepoDescription>{description}</RepoDescription>
                            <RepoStatus><FontAwesomeIcon icon={faStar}/> {stargazers_count} stars • Updated {formatUpdatedDate(updated_at)} days ago</RepoStatus>
                        </RepoCard>
                    );
                })
                :

                <LoadingInfo />
            }
        </Container>
    ); 

}

export default UserView;