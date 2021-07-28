import React from 'react';
import { useHistory } from 'react-router-dom'
import LeaderBoard from '../LeaderBoard/LeaderBoard';

function HomePage() {
    const history = useHistory();

    return (
        <div>
            <button onClick={() => history.push('/single-player')}>Single Player</button>
            <LeaderBoard />
        </div>
    );
}

export default HomePage;
