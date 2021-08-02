import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MultiPlayerGame } from '../../util/MultiPlayerGame';
import { socket } from '../../util/socket';
import { addGame } from '../../store/session';

import cardBack from './Cards/cardBack_red4.png'
import SQ from './Cards/cardSpadesQ.png'
import SK from './Cards/cardSpadesK.png'
import SJ from './Cards/cardSpadesJ.png'
import SA from './Cards/cardSpadesA.png'
import S10 from './Cards/cardSpades10.png'
import S9 from './Cards/cardSpades9.png'
import S8 from './Cards/cardSpades8.png'
import S7 from './Cards/cardSpades7.png'
import S6 from './Cards/cardSpades6.png'
import S5 from './Cards/cardSpades5.png'
import S4 from './Cards/cardSpades4.png'
import S3 from './Cards/cardSpades3.png'
import S2 from './Cards/cardSpades2.png'
import C2 from './Cards/cardClubs2.png'
import C3 from './Cards/cardClubs3.png'
import C4 from './Cards/cardClubs4.png'
import C5 from './Cards/cardClubs5.png'
import C6 from './Cards/cardClubs6.png'
import C7 from './Cards/cardClubs7.png'
import C8 from './Cards/cardClubs8.png'
import C9 from './Cards/cardClubs9.png'
import C10 from './Cards/cardClubs10.png'
import CJ from './Cards/cardClubsJ.png'
import CK from './Cards/cardClubsK.png'
import CQ from './Cards/cardClubsQ.png'
import CA from './Cards/cardClubsA.png'
import D2 from './Cards/cardDiamonds2.png'
import D3 from './Cards/cardDiamonds3.png'
import D4 from './Cards/cardDiamonds4.png'
import D5 from './Cards/cardDiamonds5.png'
import D6 from './Cards/cardDiamonds6.png'
import D7 from './Cards/cardDiamonds7.png'
import D8 from './Cards/cardDiamonds8.png'
import D9 from './Cards/cardDiamonds9.png'
import D10 from './Cards/cardDiamonds10.png'
import DJ from './Cards/cardDiamondsJ.png'
import DQ from './Cards/cardDiamondsQ.png'
import DK from './Cards/cardDiamondsK.png'
import DA from './Cards/cardDiamondsA.png'
import H2 from './Cards/cardHearts2.png'
import H3 from './Cards/cardHearts3.png'
import H4 from './Cards/cardHearts4.png'
import H5 from './Cards/cardHearts5.png'
import H6 from './Cards/cardHearts6.png'
import H7 from './Cards/cardHearts7.png'
import H8 from './Cards/cardHearts8.png'
import H9 from './Cards/cardHearts9.png'
import H10 from './Cards/cardHearts10.png'
import HJ from './Cards/cardHeartsJ.png'
import HQ from './Cards/cardHeartsQ.png'
import HK from './Cards/cardHeartsK.png'
import HA from './Cards/cardHeartsA.png'
import dealer from './dealer.png'
import './mp.css'

const valueMap = {
    SpadeQ: SQ, SpadeK: SK, SpadeJ: SJ, SpadeA: SA, Spade10: S10, Spade9: S9, Spade8: S8, Spade7: S7, Spade6: S6, Spade5: S5, Spade4: S4, Spade3: S3, Spade2: S2, Club2: C2, Club3: C3, Club4: C4, Club5: C5, Club6: C6, Club7: C7, Club8: C8, Club9: C9, Club10: C10, ClubK: CK, ClubJ: CJ, ClubQ: CQ, ClubA: CA, Diamond2: D2, Diamond3: D3, Diamond4: D4, Diamond5: D5, Diamond6: D6, Diamond7: D7, Diamond8: D8, Diamond9: D9, Diamond10: D10, DiamondJ: DJ, DiamondQ: DQ, DiamondK: DK, DiamondA: DA, Heart2: H2, Heart3: H3, Heart4: H4, Heart5: H5, Heart6: H6, Heart7: H7, Heart8: H8, Heart9: H9, Heart10: H10, HeartJ: HJ, HeartQ: HQ, HeartK: HK, HeartA: HA
}

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
    const [waitlist, setWaitlist] = useState([]);
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
            if (gameState === IN_GAME) {
                game.playerLeft(username);
                if (username === playerOne && gameState == IN_GAME) {
                    setPlayerOne(`${playerOne} Left`);
                } else if (username === playerTwo && gameState == IN_GAME) {
                    setPlayerTwo(`${playerTwo} Left`);
                } else if (username === playerThree && gameState == IN_GAME) {
                    setPlayerThree(`${playerThree} Left`);
                } else if (username === playerFour && gameState == IN_GAME) {
                    setPlayerFour(`${playerFour} Left`);
                }

                if (username === playerTurn) {
                    const nextPlayer = game.nextPlayer();
                    setPlayerTurn(nextPlayer);
                    if (nextPlayer === 'Dealer') {
                        let dealerCardIndices;
                        if (!playerOne.endsWith(' Left') && user.username === playerOne) {
                            dealerCardIndices = game.dealerDraws();
                        } else if (playerTwo && !playerTwo.endsWith(' Left') && user.username === playerTwo) {
                            dealerCardIndices = game.dealerDraws();
                        } else if (playerThree && !playerThree.endsWith(' Left') && user.username === playerThree) {
                            dealerCardIndices = game.dealerDraws();
                        } else if (playerFour && !playerFour.endsWith(' Left') && user.username === playerFour) {
                            dealerCardIndices = game.dealerDraws();
                        }
                        if (dealerCardIndices) socket.emit('game_end', { dealerCardIndices, username: user.username })
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
            setWaitlist([]);
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
        });

        socket.on('game_end', async data => {
            if (userWaiting) {
                setGameState(GAME_OVER);
                return;
            }
            const dealerCardIndices = data.dealer_card_indices;
            if (data.username !== user.username) {
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
        <div className=''>
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
            {/* {players &&
                players.map((player, idx) => (
                    <p key={idx}>{player}</p>
                ))
            } */}
            {gameState === GAME_OVER &&
                <div className=' flex items-center justify-center pb-64 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    {winner &&
                        <h2  className='text-2xl font-semibold text-white uppercase lg:text-3xl pr-6'>{winner} Won</h2>
                    }
                    <button className='bg-red-600 hover:bg-red-700 text-white text-sm px-4   border rounded-full' onClick={readyUp}>New Game</button>
                </div>
            }
            {(gameState === IN_GAME || gameState === GAME_OVER) &&
                <div className='bg-poker-table flex-column items-center content-center m-0'>


                    {(playerTurn && playerTurn !== 'Dealer') && <button  className='inset-x-0 ml-auto mr-auto absolute bg-red-600 text-white text-sm px-4 py-2  border rounded-full'>{playerTurn}'s Turn</button>}
                    {game &&
                    <div className='flex  justify-center' >
                    <div className='flex-column items-center justify-center align-center justify-items-center justify-self-center'>
                        <img className='rounded-full pb-2 h-30 w-30 m-0 flex align-center justify-center' src={dealer} alt='dealerphoto'></img>
                            {playerTurn !== 'Dealer' &&
                                <div className='flex'>
                                     <img className='animate-fade-in-down ' src={valueMap[game.dealerCards[0].suit.concat(game.dealerCards[0].value)]} alt='cardValue' />
                                              <img className='animate-fade-in-down' src={cardBack} alt='cardBack'></img>
                                </div>
                            }

                            <div className='flex'>
                            {playerTurn === 'Dealer' &&
                                game.dealerCards.map((card, idx) => (
                                     <img className='animate-fade-in-down pl-6' src={valueMap[game.dealerCards[idx].suit.concat(game.dealerCards[idx].value)]} alt='dealerCard' />
                                     ))
                                    }
                                    </div>
                            </div>
                            </div>


                    }
                    <div className=''>
                <div className='grid grid-cols-4 grid-rows-1  absolute bottom-0'>
                    {playerOne &&

                    <div className='p-4'>
                            <h1 className='text-2xl font-semibold text-white uppercase lg:text-3xl pr-6'>{playerOne}</h1>
                            <div className='flex flex-row '>
                            {playerOneCards && playerOneCards.map((card, idx) => (
                                <img className='object-contain overflow-auto'  src={valueMap[card.suit.concat(card.value)]} alt='playercard'/>
                            ))}
                            </div>
                            {(playerOne === user.username && playerTurn === user.username) &&
                                <div className='flex items-center justify-center pt-4'>
                            <button className='bg-blue-600 hover:bg-blue-400 text-white text-sm px-4 py-2   border rounded-full' disabled={game.player1Score >= 21} onClick={playerHit}>Hit</button>
                                <div className='pr-6'></div>
                            <button className='bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full' onClick={playerStand}>Stand</button>
                                </div>
                            }
                            </div>

                    }
                    {playerTwo &&
                        <div className='p-4'>
                            <h1 className='text-2xl font-semibold text-white uppercase lg:text-3xl pr-6'>{playerTwo}</h1>
                        <div className='flex flex-row '>
                            {playerTwoCards && playerTwoCards.map((card, idx) => (
                                <img className='object-contain overflow-auto' src={valueMap[card.suit.concat(card.value)]} alt='playercard' />
                            ))}
                        </div>
                            {(playerTwo === user.username && playerTurn === user.username) &&
                                <div className='flex items-center justify-center pt-4'>
                                    <button className='bg-blue-600 hover:bg-blue-400 text-white text-sm px-4 py-2   border rounded-full' disabled={game.player2Score >= 21} onClick={playerHit}>Hit</button>
                                    <div className='pr-6'></div>
                                    <button className='bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full' onClick={playerStand}>Stand</button>
                                </div>
                            }
                        </div>
                    }
                    {playerThree &&
                        <div className='p-4'>
                            <h1 className='text-2xl font-semibold text-white uppercase lg:text-3xl pr-6'>{playerThree}</h1>
                            <div className='flex flex-row '>
                            {playerThreeCards && playerThreeCards.map((card, idx) => (
                                <img className='object-contain overflow-auto' src={valueMap[card.suit.concat(card.value)]} alt='playercard' />
                            ))}
                            </div>
                            {(playerThree === user.username && playerTurn === user.username) &&
                                <div className='flex items-center justify-center pt-4'>
                                    <button  className='bg-blue-600 hover:bg-blue-400 text-white text-sm px-4 py-2   border rounded-full' disabled={game.player3Score >= 21} onClick={playerHit}>Hit</button>
                                    <div className='pr-6'></div>
                                    <button className='bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full' onClick={playerStand}>Stand</button>
                                </div>
                            }
                        </div>
                    }
                    {playerFour &&
                        <div className='p-4'>
                            <h1 className='text-2xl font-semibold text-white uppercase lg:text-3xl pr-6'>{playerFour}</h1>
                            <div className='flex flex-row '>
                            {playerFourCards && playerFourCards.map((card, idx) => (
                                <img className='object-contain overflow-auto' src={valueMap[card.suit.concat(card.value)]} alt='playercard' />
                            ))}
                            </div>
                            {(playerFour === user.username && playerTurn === user.username) &&
                                <div className='flex items-center justify-center pt-4'>
                                <button className='bg-blue-600 hover:bg-blue-400 text-white text-sm px-4 py-2   border rounded-full' disabled={game.player4Score >= 21} onClick={playerHit}>Hit</button>
                                    <div className='pr-6'></div>
                                    <button className='bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full' onClick={playerStand}>Stand</button>
                                </div>
                            }
                        </div>
                    }
                    </div>
                    </div>

                </div>
            }
        </div>
    );
}

export default Multiplayer;
