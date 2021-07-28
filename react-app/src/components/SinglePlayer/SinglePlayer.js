import React, { useState } from 'react';

const { Game } = require('../../util/Game');

const NOT_STARTED = 'NOT_STARTED';
const IN_GAME = 'IN_GAME';
const GAME_OVER = 'GAME_OVER';

function SinglePlayer() {
    const [game, setGame] = useState();
    const [gameState, setGameState] = useState(NOT_STARTED)
    const [playerCards, setPlayerCards] = useState();
    const [btnDisable, setBtnDisable] = useState(false);
    const [winner, setWinner] = useState('');

    const startGame = () => {
        const game = new Game();
        setBtnDisable(false);
        setGame(game);
        setGameState(IN_GAME);
        setPlayerCards(game.playerCards);

        if (game.playerScore >= 21) playerTurnFinished()
    }

    const playerHit = () => {
        game.playerHit();
        console.log(game.playerCards);
        console.log(game.playerScore);
        console.log(game);
        setGame(game);

        setPlayerCards(game.playerCards.slice());
        if (game.playerScore >= 21) playerTurnFinished()
    }

    const playerTurnFinished = () => {
        game.playerStop();
        setBtnDisable(true);
        while (!game.dealerDone) game.dealerHit()
        setWinner(game.getWinner());
        setGameState(GAME_OVER);
    }

    return (
        <div>
            {gameState === NOT_STARTED &&
                <button onClick={startGame}>Start Game</button>
            }
            {(gameState === IN_GAME || gameState === GAME_OVER) &&
                <div>
                    <div>

                        {!btnDisable &&
                            <>
                                <h1>Dealer Cards</h1>
                                <p>{game.dealerCards[0].suit} {game.dealerCards[0].value}</p>
                                <p>Dealer Card Back 2</p>
                            </>
                        }
                        {btnDisable &&
                            <>
                                <h1>Dealer Cards</h1>
                                {game.dealerCards && game.dealerCards.map((card, idx) => (
                                    <p key={idx}>{card.suit} {card.value}</p>
                                ))}
                            </>
                        }
                    </div>
                    <div>
                        <h1>Player Cards</h1>
                        {playerCards && playerCards.map((card, idx) => (
                            <p key={idx}>{card.suit} {card.value}</p>
                        ))}
                        <button disabled={btnDisable} onClick={playerHit}>Hit</button>
                        <button disabled={btnDisable} onClick={playerTurnFinished}>Hold</button>
                    </div>
                    {gameState === GAME_OVER &&
                        <>
                            <p>{winner} Wins</p>
                            <button onClick={startGame}>New Game</button>
                        </>
                    }
                </div>
            }
        </div>
    );
}

export default SinglePlayer;
