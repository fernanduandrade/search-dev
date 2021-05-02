import styled from 'styled-components';

export const Container = styled.div`
    width: 450px;
    height: 1024px;
    flex: 25%;
    background-color: var(--color-background-profile);
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding-left: 20px;
`;

export const UserImg = styled.img`
    margin-top: 20px;
    margin-left: 25px;
    width: 250px;
    height: 220px;
    border: 2px solid var(--color-profile-img-border);
`;

export const UserFullName = styled.h2`
    color: var(--color-profile-info-color);
    margin-top: 20px;
    font-size: 20px;
    font-style: italic;
    text-align: left;
`;

export const UserLoginName = styled.h4`
    color: var(--color-profile-info-color);
    margin-top: 3px;
    text-align: left;
    font-style: italic;
`;

export const UserDescription = styled.p`
    color: var(--color-profile-description-color);
    margin-top: 6px;
    font-size: 16px;
    font-weight: 400;
    width: 320px;
    text-align: left;
`;

export const UserStatusContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 6px;
    width: 320px;
    justify-content: space-between;
`;

export const UserStatus = styled.p`
    color: var(--color-profile-info-color);
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
    line-height: 26px;
    text-align: left;
`;

export const UserInfoContainer = styled.div`
    margin-top: 6px;
    width: 350px;
`;

export const UserInfo = styled.p`
    color: var(--color-profile-info-color);
    margin-top: 9px;
    font-size: 15px;
    font-weight: 400;
    font-style: italic;
    line-height: 26px;
    text-align: left;
`;

export const GoBackButton = styled.button`
    background-color: var(--color-profile-goback-background);
    color: var(--color-profile-goback-text);
    margin-top: 25px;
    margin-left: 95px;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    float: inline-end;

    &:hover {
        cursor: pointer;
    }
`;