import styled from 'styled-components';

export const Container = styled.div`
    width: 800px;
    height: 100vh;
    flex: 70%;
    padding: 10px;
    overflow-y: scroll;
`;

export const RepoCard = styled.div`
    margin-top: 5px;
    margin-left: 20px;
    width: 950px;
    height: 170px;
    border-bottom: 1px solid var(--color-repo-border);
`;

export const RepoTitle = styled.h3`
    color: var(--color-profile-repo-text);
    font-size: 24px;
    font-weight: 400;
    font-style: italic;
    width: 400px;
    text-align: left;
`;

export const RepoDescription = styled.p`
    margin-top: 5px;
    font-size: 18px;
    font-weight: 400;
    width: 800px;
    color: var(--color-profile-repo-description);
    text-align: left;
`;

export const RepoStatus = styled.p`
    font-weight: 400;
    font-style: italic;
    margin-top: 4px;
    color: var(--color-profile-repo-status);
    width: 450px;
    text-align: left;
`;