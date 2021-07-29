import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MultiPlayerGame } from '../../util/Game';
import { socket } from '../../util/socket';

const IN_GAME = 'IN_GAME';
const GAME_OVER = 'GAME_OVER';

function Multiplayer() {
    const dispatch = useDispatch();
    const [playerOne, setPlayerOne] = useState()
    const [playerTwo, setPlayerTwo] = useState()
    const [playerThree, setPlayerThree] = useState()
    const [playerFour, setPlayerFour] = useState()
    const [playerTurn, setPlayerTurn] = useState();
    const [players, setPlayers] = useState();
    const [gameState, setGameState] = useState();
    const [game, setGame] = useState();
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        socket.emit('join', { username: user.username });

        return (() => {
            socket.emit('leave', { username: user.username });
        })
    }, []);

    useEffect(() => {
        socket.on('player_joined', data => {
            //setPlayers(data.players)
            if (data.username === user.username) {
                if (data.status === IN_GAME) {
                    // TODO: have to wait for next game
                } else if (data.status === GAME_OVER) {
                    setGameState(GAME_OVER);
                }
            }
        });

        socket.on('player_left', data => {
            //setPlayers(data.players);
        })

        return (() => {
            socket.removeAllListeners('player_joined');
            socket.removeAllListeners('player_left');
        })
    }, [])

    useEffect(() => {
        socket.on('start_game', data => {
            console.log(data);
            console.log(data.drawIndices);
            const game = new MultiPlayerGame(data.playerOrder, data.drawIndices);
            console.log(game);
            setGame(game);
            setGameState(IN_GAME);
            setPlayers(data.playerOrder);
            setPlayerTurn(game.playerTurn);
        });
    }, [game, players])

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
            {gameState === IN_GAME &&
                <p>Game started</p>
            }
        </div>
    );
}

export default Multiplayer;
