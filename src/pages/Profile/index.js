import React from 'react';
import RepoView from '../../components/RepoView';
import UserView from '../../components/UserView';
import { Container } from './styles/profile';

export default function Profile() {
    
    return(
        <Container>
            <UserView />
            <RepoView />
        </Container>    
    );
};