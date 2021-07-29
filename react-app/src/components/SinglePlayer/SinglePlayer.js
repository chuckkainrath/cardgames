import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addGame } from '../../store/session';
import './singleplayer.css';
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

const { SinglePlayerGame } = require('../../util/Game');

const NOT_STARTED = 'NOT_STARTED';
const IN_GAME = 'IN_GAME';
const GAME_OVER = 'GAME_OVER';

const valueMap = {
    SpadeQ: SQ,SpadeK: SK,SpadeJ: SJ,SpadeA: SA,Spade10: S10,Spade9: S9,Spade8: S8,Spade7: S7,Spade6: S6, Spade5: S5,Spade4: S4,Spade3: S3,Spade2: S2,Club2: C2,Club3: C3,Club4: C4,Club5: C5,Club6: C6,Club7: C7,Club8: C8,Club9: C9,Club10: C10,ClubK: CK,ClubJ: CJ,ClubQ: CQ,ClubA: CA,Diamond2: D2,Diamond3: D3,Diamond4: D4,Diamond5: D5,Diamond6: D6,Diamond7: D7,Diamond8: D8,Diamond9: D9,Diamond10: D10,DiamondJ: DJ,DiamondQ: DQ,DiamondK: DK,DiamondA: DA,Heart2: H2,Heart3: H3,Heart4: H4,Heart5: H5,Heart6: H6,Heart7: H7,Heart8: H8,Heart9: H9,Heart10: H10,HeartJ: HJ,HeartQ: HQ,HeartK: HK,HeartA: HA
}

function SinglePlayer() {


    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [game, setGame] = useState();
    const [gameState, setGameState] = useState(NOT_STARTED)
    const [playerCards, setPlayerCards] = useState();
    const [btnDisable, setBtnDisable] = useState(false);
    const [winner, setWinner] = useState('');

    const startGame = () => {
        const game = new SinglePlayerGame();
        setBtnDisable(false);
        setGame(game);
        setGameState(IN_GAME);
        setPlayerCards(game.playerCards);

        if (game.playerScore >= 21) playerTurnFinished()
    }

    const playerHit = () => {
        game.playerHit();
        setGame(game);
        setPlayerCards(game.playerCards.slice());
        if (game.playerScore >= 21) playerTurnFinished()
    }

    const playerTurnFinished = async () => {
        game.playerStop();
        setBtnDisable(true);
        while (!game.dealerDone) game.dealerHit()
        setWinner(game.getWinner());
        setGameState(GAME_OVER);
        await dispatch(addGame(user.id , game.getWinner()));
    }

    return (
        <>

            {gameState === NOT_STARTED &&
            <div className='fixed h-full w-full flex items-center justify-center'>

                <button className='inset-x-0 ml-auto mr-auto absolute bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full' onClick={startGame}>Start Game</button>
            </div>
            }
        <div className='bg-poker-table flex  justify-center'>

            {(gameState === IN_GAME || gameState === GAME_OVER) &&
                <div>
                    <div className='dealer-container flex flex-column p-2 items-center justify-center'>
                    <div className='flex-column '>
                    <img className='rounded-full pb-2 h-30 w-30 ' src={dealer}></img>
                    <div className='flex flex-row items-center justify-center'>

                        {!btnDisable &&
                            <>
                                <img src={valueMap[game.dealerCards[0].suit.concat(game.dealerCards[0].value)]} />
                                <img src={cardBack}></img>
                            </>
                        }
                        {btnDisable &&
                            <>
                                {game.dealerCards && game.dealerCards.map((card, idx) => (
                                    <>
                                     <img src={valueMap[game.dealerCards[idx].suit.concat(game.dealerCards[idx].value)]} />
                                     </>
                                ))}
                            </>
                        }
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center pt-20' >
                    <div className=' flex-column items-center justify-center'>
                    <div className='flex flex-initial flex-row p-2 '>
                        {playerCards && playerCards.map((card, idx) => (
                            <>
                                <img className='animate-fade-in-down' src={valueMap[game.playerCards[idx].suit.concat(game.playerCards[idx].value)]} />
                            </>
                        ))}
                    </div>
                        <div className='flex items-center justify-center'>
                        <button className='bg-blue-600 hover:bg-blue-400 text-white text-sm px-4 py-2   border rounded-full' disabled={btnDisable} onClick={playerHit}>Hit</button>
                        <button className='bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full' disabled={btnDisable} onClick={playerTurnFinished}>Hold</button>
                        </div>
                </div>
                </div>
                    {gameState === GAME_OVER &&
                        <div className='flex items-center justify-center pt-6'>
                        <div className=' flex-column '>
                            <p className='text-2xl font-semibold text-white uppercase lg:text-3xl'>{winner} Wins</p>
                        <button className='bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2   border rounded-full' onClick={startGame}>New Game</button>
                        </div>
                        </div>
                    }
                </div>
            }




        </div>
        </>
    );
}

export default SinglePlayer;
