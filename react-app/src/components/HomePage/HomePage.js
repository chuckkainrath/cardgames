import React from 'react';
import { useHistory } from 'react-router-dom'

function HomePage() {
    const history = useHistory();

    return (
        <div>
            <button onClick={() => history.push('/single-player')}>Single Player</button>
            <button onClick={() => history.push('/multi-player')}>Multiplayer</button>
        </div>
    );
}

export default HomePage;
