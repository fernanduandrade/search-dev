import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserConext from '../../context/UserContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { 
    faStar, 
    faHeart, 
    faUserFriends, 
    faLocationArrow, 
    faBuilding, 
    faLink,
    faEnvelope
} from "@fortawesome/fontawesome-free-solid";
import api from '../../services/api';
import { 
    Container, 
    UserImg, 
    UserFullName, 
    UserLoginName, 
    UserDescription, 
    UserStatus, 
    UserStatusContainer,
    UserInfoContainer,
    UserInfo,
    GoBackButton
 } from './styles/userview';

function UserView() {

    const history = useHistory();

    const { userInput, githubUser, setGithubUser, starredRepo, setStarredRepo } = useContext(UserConext);

    useEffect(() => {
        async function loadStarredRepositories() {
            const { data } = await api.get(`${userInput}/starred?page=1&per_page=100`);
            setStarredRepo(data); 
        };

        async function loadRepositories() {
            const { data } = await api.get(`${userInput}`);
            setGithubUser(data);
        };

        loadRepositories();
        loadStarredRepositories();
    }, []);

    return(
        <Container>
            <UserImg src={githubUser.avatar_url} />
            <UserFullName>{githubUser.name}</UserFullName>
            <UserLoginName>@{githubUser.login}</UserLoginName>
            
            <UserDescription>{githubUser.bio}</UserDescription>
            
            <UserStatusContainer>
                <UserStatus><FontAwesomeIcon icon={faUserFriends}/> {githubUser.followers} followers</UserStatus>
                <UserStatus><FontAwesomeIcon icon={faHeart}/> {githubUser.following} following</UserStatus>
                <UserStatus><FontAwesomeIcon icon={faStar}/> {starredRepo.length} stars</UserStatus>
            </UserStatusContainer>
            <UserInfoContainer>
                {githubUser.company ? 
                    <UserInfo><FontAwesomeIcon icon={faBuilding}/> {githubUser.company}</UserInfo>
                    :
                    ''
                }
                <UserInfo><FontAwesomeIcon icon={faLocationArrow}/> {githubUser.location}</UserInfo>
                {githubUser.email ? 
                    <UserInfo><FontAwesomeIcon icon={faEnvelope}/> {githubUser.email}</UserInfo>
                    :
                    ''
                }
                <UserInfo><FontAwesomeIcon icon={faLink}/> {githubUser.blog}</UserInfo>
                <UserInfo><FontAwesomeIcon icon={faTwitter}/> {githubUser.twitter_username}</UserInfo>
            </UserInfoContainer>
            <GoBackButton onClick={() => history.push('/')}>Voltar</GoBackButton>
        </Container>
    ); 

}

export default UserView;