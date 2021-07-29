const { useReducer } = require('react');
const { Deck } = require('./Deck.js');

const valueMap = {
    'A': 11,
    'K': 10,
    'Q': 10,
    'J': 10,
    '10': 10,
    '9': 9,
    '8': 8,
    '7': 7,
    '6': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2,
}

class Game {
    constructor() {
        this.deck = new Deck();

        this.dealerScore = 0;
        this.dealerCards = [];
        this.dealerDone = false;

        this.dealerHit = this.dealerHit.bind(this);
        this.removeCard = this.removeCard.bind(this);
    }

    removeCard(index) {
        return this.deck.removeCard(index);
    }

    dealerHit() {
        if (this.dealerDone) return;
        this.dealerCards.push(this.deck.drawCard());
        this.dealerScore = Game.calculateScore(this.dealerCards);
        if (this.dealerScore >= 17) this.dealerDone = true;
        if (this.dealerScore > 21) {
            this.dealerDone = true;
            this.winner = 'Player';
        }
        return this.dealerScore;
    }

    static calculateScore(cards) {
        let score = 0;
        let aceCount = 0;
        for (let card of cards) {
            score += valueMap[card.value];
            if (card.value === 'A') {
                aceCount++;
            }
        }
        while (score > 21 && aceCount) {
            score -= 10;
            aceCount--;
        }
        return score;
    }
}

class SinglePlayerGame extends Game {
    constructor() {
        super();
        this.playerCards = [];
        this.playerScore = 0;
        this.playerDone = false;
        this.winner = '';

        // Have to bind functions to Class
        this.playerHit = this.playerHit.bind(this);
        this.playerStop = this.playerStop.bind(this);
        this.dealerHit = this.dealerHit.bind(this);
        this.getWinner = this.getWinner.bind(this);
        this.removeCard = this.removeCard.bind(this);

        this.playerCards.push(this.deck.drawCard());
        this.dealerCards.push(this.deck.drawCard());
        this.playerCards.push(this.deck.drawCard());
        this.playerScore = Game.calculateScore(this.playerCards);
        if (this.playerScore === 21) this.playerDone = true;
        this.dealerCards.push(this.deck.drawCard());
        this.dealerScore = Game.calculateScore(this.dealerCards);
        if (this.dealerScore >= 17) this.dealerDone = true;
    }

    getWinner() {
        if (this.winner) return this.winner;
        if (this.playerDone && this.dealerDone) {
            this.winner = this.playerScore > this.dealerScore ? 'Player' : 'Dealer';
        }
        return this.winner;
    }

    playerStop() {
        this.playerDone = true;
    }

    playerHit() {
        if (this.playerDone) return;
        this.playerCards.push(this.deck.drawCard());
        this.playerScore = Game.calculateScore(this.playerCards);
        if (this.playerScore === 21) this.playerDone = true;
        if (this.playerScore > 21) {
            this.playerDone = true;
            this.dealerDone = true;
            this.winner = 'Dealer';
        }
        return this.playerScore;
    }

    dealerHit() {
        super.dealerHit();
    }

    removeCard(index) {
        super.removeCard(index);
    }
}

class MultiPlayerGame extends Game {
    constructor(players, draws) {
        super();

        this.players = players
        this.winner = '';
        // Have to bind functions to Class
        this.dealerHit = this.dealerHit.bind(this);
        this.drawCard = this.drawCard.bind(this);
        this.getWinner = this.getWinner.bind(this);
        this.removeCard = this.removeCard.bind(this);

        // Get players set up and initial draws complete
        this.player1Cards = [this.removeCard(draws.shift())];

        this.player2Cards = null;
        this.player3Cards = null;
        this.player4Cards = null;

        if (players.length > 2) {
            this.player2Cards = [this.removeCard(draws.shift())]
        }

        if (players.length > 3) {
            this.player3Cards = [this.removeCard(draws.shift())]
        }

        if (players.length > 4) {
            this.player4Cards = [this.removeCard(draws.shift())]
        }

        this.dealerCards.push(this.removeCard(draws.shift()));
        this.player1Cards.push(this.removeCard(draws.shift()));
        if (this.player2Cards) this.player2Cards.push(this.removeCard(draws.shift()));
        if (this.player3Cards) this.player3Cards.push(this.removeCard(draws.shift()));
        if (this.player4Cards) this.player4Cards.push(this.removeCard(draws.shift()));
        this.dealerCards.push(this.removeCard(draws.shift()));

        // Calculate Scores
        this.player1Score = Game.calculateScore(this.player1Cards);
        this.player2Score = null;
        this.player3Score = null;
        this.player4Score = null;
        this.dealerScore = Game.calculateScore(this.dealerCards);

        if (this.player2Cards) this.player2Score = Game.calculateScore(this.player2Cards);
        if (this.player3Cards) this.player3Score = Game.calculateScore(this.player3Cards);
        if (this.player4Cards) this.player4Score = Game.calculateScore(this.player4Cards);

        this.playerTurn = this.players[0];
    }

    drawCard() {
        const index = this.game.getIndex();
        const card = this.game.removeCard(index);
        if (this.playerTurn === 'Player1') {
            this.player1Cards.push(card)
            this.player1Score = Game.calculateScore(this.player1Cards);
        } else if (this.playerTurn === this.players[1]) {
            this.player2Cards.push(card)
            this.player2Score = Game.calculateScore(this.player2Cards);
        } else if (this.playerTurn === this.players[1]) {
            this.player3Cards.push(card)
            this.player3Score = Game.calculateScore(this.player3Cards);
        } else if (this.playerTurn === this.players[1]) {
            this.player4Cards.push(card)
            this.player4Score = Game.calculateScore(this.player4Cards);
        } else {
            this.dealerCards.push(card);
            this.dealerScore = Game.calculateScore(this.dealerCards);
        }
        return index;
    }

    nextPlayer() {
        if (this.playerTurn === this.players[0]) {
            if (this.player2Cards) this.playerTurn = this.players[1];
            else if (this.player3Cards) this.playerTurn = this.players[1];
            else if (this.player4Cards) this.playerTurn = this.players[1];
            else this.playerTurn = 'Dealer';
        } else if (this.playerTurn === this.players[1]) {
            if (this.player3Cards) this.playerTurn = this.players[1];
            else if (this.player4Cards) this.playerTurn = this.players[1];
            else this.playerTurn = 'Dealer';
        } else if (this.playerTurn === this.players[1]) {
            if (this.player4Cards) this.playerTurn = this.players[1];
            else this.playerTurn = 'Dealer';
        } else {
            this.playerTurn = 'Dealer';
            while (this.dealerScore < 17) {
                this.drawCard();
            }
        }
        return this.playerTurn;
    }

    getWinner(player) {
        if (this.winner) return this.winner;
        let playerIdx = this.players.indexOf(player);
        let playerScore;
        if (playerIdx === 0) playerScore = this.player1Score;
        else if (playerIdx === 1) playerScore = this.player2Score;
        else if (playerIdx === 2) playerScore = this.player3Score;
        else  playerScore = this.player4Score;
        this.winner = this.dealerScore > this.playerScore ? 'Dealer' : player;
    }
}

module.exports = {
    SinglePlayerGame,
    MultiPlayerGame
 }
