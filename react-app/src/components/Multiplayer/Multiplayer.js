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
            const game = new MultiPlayerGame(data.playerOrder, data.drawIndices);
            setGame(game);
            setGameState(IN_GAME);
            setPlayers(data.playerOrder);
            setPlayerTurn(game.playerTurn);
            const players = data.playerOrder
            setPlayerOne(players[0])
            if (players[1]) setPlayerTwo(players[1])
            if (players[2]) setPlayerThree(players[2])
            if (players[3]) setPlayerFour(players[3])
        });
    }, [game, players])

    const readyUp = () => {
        socket.emit('ready', { username: user.username });
    }

    const playerHit = () => {

    }

    const playerStand = () => {
        
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
                <div>
                    {game &&
                        <div>
                            <h1>Dealer</h1>
                            <p>{game.dealerCards[0].suit} {game.dealerCards[0].value}</p>
                            <p>Dealer card 2?</p>
                        </div>
                    }
                    {playerOne &&
                        <div>
                            <h1>{playerOne}</h1>
                            {game.player1Cards.map((card, idx) => (
                                <p key={idx}>{card.suit} {card.value}</p>
                            ))}
                            {(playerOne === user.username && playerTurn === user.username) &&
                                <>
                                    <button onClick={playerHit}>Hit</button>
                                    <button onClick={playerStand}>Stand</button>
                                </>
                            }
                        </div>
                    }
                    {playerTwo &&
                        <div>
                            <h1>{playerTwo}</h1>
                            {game.player2Cards.map((card, idx) => (
                                <p key={idx}>{card.suit} {card.value}</p>
                            ))}
                            {(playerTwo === user.username && playerTurn === user.username) &&
                                <>
                                    <button onClick={playerHit}>Hit</button>
                                    <button onClick={playerStand}>Stand</button>
                                </>
                            }
                        </div>
                    }
                    {playerThree &&
                        <div>
                            <h1>{playerThree}</h1>
                            {game.player3Cards.map((card, idx) => (
                                <p key={idx}>{card.suit} {card.value}</p>
                            ))}
                            {(playerThree === user.username && playerTurn === user.username) &&
                                <>
                                    <button onClick={playerHit}>Hit</button>
                                    <button onClick={playerStand}>Stand</button>
                                </>
                            }
                        </div>
                    }
                    {playerFour &&
                        <div>
                            <h1>{playerFour}</h1>
                            {game.player4Cards.map((card, idx) => (
                                <p key={idx}>{card.suit} {card.value}</p>
                            ))}
                            {(playerFour === user.username && playerTurn === user.username) &&
                                <>
                                    <button onClick={playerHit}>Hit</button>
                                    <button onClick={playerStand}>Stand</button>
                                </>
                            }
                        </div>
                    }
                </div>
            }
        </div>
    );
}

export default Multiplayer;
