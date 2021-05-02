import { useState } from 'react';
import Routes from './routes';
import UserContext from './context/UserContext';
import './assets/styles/global.css';

function App() {

    const [userInput, setUserInput] = useState([]);
    const [githubUser, setGithubUser] = useState([]);
    const [repositories, setRepositories] = useState([]);
    const [starredRepo, setStarredRepo] = useState([]);

    return (
        <UserContext.Provider value={{githubUser, setGithubUser, repositories, setRepositories, userInput, setUserInput, starredRepo, setStarredRepo}}>
            <Routes />
        </UserContext.Provider>
    );
}

export default App;
