import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MultiPlayerGame } from '../../util/MultiPlayerGame';
import { socket } from '../../util/socket';
import { addGame } from '../../store/session';

const IN_GAME = 'IN_GAME';
const GAME_OVER = 'GAME_OVER';

function Multiplayer() {
    const dispatch = useDispatch();
    const [playerOne, setPlayerOne] = useState()
    const [playerTwo, setPlayerTwo] = useState()
    const [playerThree, setPlayerThree] = useState()
    const [playerFour, setPlayerFour] = useState()
    const [playerOneCards, setPlayerOneCards] = useState()
    const [playerTwoCards, setPlayerTwoCards] = useState()
    const [playerThreeCards, setPlayerThreeCards] = useState()
    const [playerFourCards, setPlayerFourCards] = useState()
    const [playerTurn, setPlayerTurn] = useState();
    const [players, setPlayers] = useState();
    const [gameState, setGameState] = useState();
    const [game, setGame] = useState();
    const [winner, setWinner] = useState('');
    const [waitlist, setWaitlist] = useState();
    const [userWaiting, setUserWaiting] = useState();
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
                    setUserWaiting(true);
                    setGameState(IN_GAME);
                } else if (data.status === GAME_OVER) {
                    setGameState(GAME_OVER);
                    setUserWaiting(false);
                }
            } else if (gameState === IN_GAME) {
                setWaitlist([...waitlist, data.username])
            }
        });

        socket.on('player_left', data => {
            const username = data.username;
            console.log('user left', username);
            if (gameState === IN_GAME) {
                game.playerLeft(username);
                if (username === playerOne) {
                    setPlayerOne(`${playerOne} Left`);
                } else if (username === playerTwo) {
                    setPlayerTwo(`${playerTwo} Left`);
                } else if (username === playerThree) {
                    setPlayerThree(`${playerThree} Left`);
                } else {
                    setPlayerFour(`${playerFour} Left`);
                }

                if (username === playerTurn) {
                    const nextPlayer = game.nextPlayer();
                    console.log('playerTurn: ', nextPlayer);
                    setPlayerTurn(nextPlayer);
                    if (nextPlayer === 'Dealer') {

                        const dealerCardIndices = game.dealerDraws();
                        socket.emit('game_end', { dealerCardIndices, username: user.username })

                    }
                }
            }
        })

        return (() => {
            socket.removeAllListeners('player_joined');
            socket.removeAllListeners('player_left');
        })
    }, [gameState, playerTurn, playerOne, playerTwo, playerThree, playerFour])

    useEffect(() => {
        socket.on('start_game', data => {
            const game = new MultiPlayerGame(data.playerOrder, data.drawIndices);
            setGame(game);
            setGameState(IN_GAME);
            setPlayers(data.playerOrder);
            setPlayerTurn(game.playerTurn);
            const players = data.playerOrder
            setPlayerOne(players[0])
            setPlayerOneCards(game.player1Cards)
            setWinner('');
            setWaitlist();
            setUserWaiting(false);
            if (players[1]) {
                setPlayerTwo(players[1])
                setPlayerTwoCards(game.player2Cards)
            } else {
                setPlayerTwo('');
                setPlayerTwoCards();
            }
            if (players[2]) {
                setPlayerThree(players[2])
                setPlayerThreeCards(game.player3Cards);
            } else {
                setPlayerThree('');
                setPlayerThreeCards()
            }
            if (players[3]) {
                setPlayerFourCards(game.player4Cards);
                setPlayerFour(players[3])
            } else {
                setPlayerFour('');
                setPlayerFourCards();
            }
            console.log('players', players);
        });

        return (() => {
            socket.removeAllListeners('start_game');
        })
    }, [game, players])

    useEffect(() => {
        socket.on('on_hit', data => {
            if (userWaiting) return;
            if (data.username !== user.username) {
                game.playerDrew(data.card_idx);
                if (playerTurn === playerOne) {
                    setPlayerOneCards(game.player1Cards.slice());
                } else if (playerTurn === playerTwo) {
                    setPlayerTwoCards(game.player2Cards.slice());
                } else if (playerTurn === playerThree) {
                    setPlayerThreeCards(game.player3Cards.slice());
                } else if (playerTurn === playerFour) {
                    setPlayerFourCards(game.player4Cards.slice());
                }
            }
        });

        socket.on('on_stand', data => {
            if (userWaiting) return;
            const nextPlayer = game.nextPlayer();
            setPlayerTurn(nextPlayer);
            console.log(nextPlayer);
        });

        socket.on('game_end', async data => {
            if (userWaiting) {
                setGameState(GAME_OVER);
                return;
            }
            const dealerCardIndices = data.dealer_card_indices;
            if (playerTurn !== user.username) {
                game.nextPlayer();
                for (let idx of dealerCardIndices) game.playerDrew(idx);
            }
            setPlayerTurn('Dealer');
            setGameState(GAME_OVER);
            setWinner(game.getWinner(user.username));
            await dispatch(addGame(user.id, game.getWinner()))
        });

        return (() => {
            socket.removeAllListeners('on_hit');
            socket.removeAllListeners('on_stand');
            socket.removeAllListeners('game_end');
        })
    }, [userWaiting, playerTurn, playerOneCards, playerTwoCards, playerThreeCards, playerFourCards])

    const readyUp = () => {
        socket.emit('ready', { username: user.username });
    }

    const playerHit = () => {
        const cardIdx = game.drawCard();
        if (playerTurn === playerOne) {
            setPlayerOneCards(game.player1Cards.slice())
        } else if (playerTurn === playerTwo) {
            setPlayerTwoCards(game.player2Cards.slice())
        } else if (playerTurn === playerThree) {
            setPlayerThreeCards(game.player3Cards.slice())
        } else {
            setPlayerFourCards(game.player4Cards.slice())
        }
        socket.emit('hit', { username: user.username, cardIdx })
    }

    const playerStand = () => {
        let nextPlayer;
        if (playerTurn === playerOne) {
            if (playerTwo && !playerTwo.endsWith(' Left')) nextPlayer = playerTwo;
            else nextPlayer = 'Dealer';
        } else if (playerTurn === playerTwo) {
            if (playerThree && !playerThree.endsWith(' Left')) nextPlayer = playerThree;
            else nextPlayer = 'Dealer';
        } else if (playerTurn === playerThree) {
            if (playerFour && !playerFour.endsWith(' Left')) nextPlayer = playerFour;
            else nextPlayer = 'Dealer';
        } else {
            nextPlayer = 'Dealer';
        }
        if (nextPlayer === 'Dealer') {
            const dealerCardIndices = game.dealerDraws();
            socket.emit('game_end', { dealerCardIndices, username: user.username })
        } else {
            socket.emit('hold', { username: nextPlayer })
        }
    }

    return (
        <div>
            {userWaiting &&
                <>
                    {gameState === IN_GAME &&
                        <h1>Match In Progress, Waiting for Next Round</h1>
                    }
                    {gameState === GAME_OVER &&
                        <h1>Match Over, Click New Game To Start</h1>
                    }
                </>
            }
            {waitlist &&
                waitlist.map((username, idx) => (
                    <p key={idx}>{username} is in lobby, waiting for next game.</p>
                ))
            }
            {players &&
                players.map((player, idx) => (
                    <p key={idx}>{player}</p>
                ))
            }
            {gameState === GAME_OVER &&
                <>
                    <button onClick={readyUp}>New Game</button>
                    {winner &&
                        <h2>{winner} Won</h2>
                    }
                </>
            }
            {(gameState === IN_GAME || gameState === GAME_OVER) &&
                <div>
                    {(playerTurn && playerTurn !== 'Dealer') && <h2>{playerTurn}'s Turn</h2>}
                    {game &&
                        <div>
                            <h1>Dealer</h1>
                            {playerTurn !== 'Dealer' &&
                                <>
                                    <p>{game.dealerCards[0].suit} {game.dealerCards[0].value}</p>
                                    <p>Dealer card 2?</p>
                                </>
                            }
                            {playerTurn === 'Dealer' &&
                                game.dealerCards.map((card, idx) => (
                                    <p key={idx}>{card.suit} {card.value}</p>
                                ))
                            }
                        </div>
                    }
                    {playerOne &&
                        <div>
                            <h1>{playerOne}</h1>
                            {playerOneCards && playerOneCards.map((card, idx) => (
                                <p key={idx}>{card.suit} {card.value}</p>
                            ))}
                            {(playerOne === user.username && playerTurn === user.username) &&
                                <>
                                    <button disabled={game.player1Score >= 21} onClick={playerHit}>Hit</button>
                                    <button onClick={playerStand}>Stand</button>
                                </>
                            }
                        </div>
                    }
                    {playerTwo &&
                        <div>
                            <h1>{playerTwo}</h1>
                            {playerTwoCards && playerTwoCards.map((card, idx) => (
                                <p key={idx}>{card.suit} {card.value}</p>
                            ))}
                            {(playerTwo === user.username && playerTurn === user.username) &&
                                <>
                                    <button disabled={game.player2Score >= 21} onClick={playerHit}>Hit</button>
                                    <button onClick={playerStand}>Stand</button>
                                </>
                            }
                        </div>
                    }
                    {playerThree &&
                        <div>
                            <h1>{playerThree}</h1>
                            {playerThreeCards && playerThreeCards.map((card, idx) => (
                                <p key={idx}>{card.suit} {card.value}</p>
                            ))}
                            {(playerThree === user.username && playerTurn === user.username) &&
                                <>
                                    <button disabled={game.player3Score >= 21} onClick={playerHit}>Hit</button>
                                    <button onClick={playerStand}>Stand</button>
                                </>
                            }
                        </div>
                    }
                    {playerFour &&
                        <div>
                            <h1>{playerFour}</h1>
                            {playerFourCards && playerFourCards.map((card, idx) => (
                                <p key={idx}>{card.suit} {card.value}</p>
                            ))}
                            {(playerFour === user.username && playerTurn === user.username) &&
                                <>
                                    <button disabled={game.player4Score >= 21} onClick={playerHit}>Hit</button>
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
