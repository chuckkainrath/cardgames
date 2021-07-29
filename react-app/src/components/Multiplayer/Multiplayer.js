import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { socket } from '../../util/socket';

const IN_GAME = 'IN_GAME';
const GAME_OVER = 'GAME_OVER';

function Multiplayer() {
    const dispatch = useDispatch();
    const [players, setPlayers] = useState()
    const [gameState, setGameState] = useState();
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        socket.emit('join', { username: user.username });

        return (() => {
            socket.emit('leave', { username: user.username });
        })
    }, []);

    useEffect(() => {
        socket.on('player_joined', data => {
            setPlayers(data.players)
            if (data.username === user.username) {
                if (data.status === IN_GAME) {
                    // TODO: have to wait for next game
                } else if (data.status === GAME_OVER) {
                    setGameState(GAME_OVER);
                }
            }
        });

        socket.on('player_left', data => {
            setPlayers(data.players);
        })

        return (() => {
            socket.removeAllListeners('player_joined');
            socket.removeAllListeners('player_left');
        })
    }, [players])

    useEffect(() => {

    }, [])

    const readyUp = () => {
        socket.emit('ready', { username: user.username });
    }

    return (
        <div>
            {players &&
                players.map((player, idx) => (
                    <p key={idx}>{player}</p>
                ))
            }
            {gameState === GAME_OVER &&
                <button onClick={readyUp}>New Game</button>
            }
        </div>
    );
}

export default Multiplayer;
