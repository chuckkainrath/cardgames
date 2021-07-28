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
        this.playerCards = [];
        this.playerScore = 0;
        this.playerDone = false;
        this.dealerCards = [];
        this.dealerScore = 0;
        this.dealerDone = false;
        this.winner = '';

        // Have to bind functions to Class
        this.playerHit = this.playerHit.bind(this);
        this.playerStop = this.playerStop.bind(this);
        this.dealerHit = this.dealerHit.bind(this);
        this.getWinner = this.getWinner.bind(this);

        this.playerCards.push(this.deck.drawCard());
        this.dealerCards.push(this.deck.drawCard());
        this.playerCards.push(this.deck.drawCard());
        this.playerScore = Game.calculateScore(this.playerCards);
        if (this.playerScore === 21) this.playerDone = true;
        this.dealerCards.push(this.deck.drawCard());
        this.dealerScore = Game.calculateScore(this.dealerCards);
        if (this.dealerScore >= 17) this.dealerDone = true;
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

    playerStop() {
        this.playerDone = true;
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

    getWinner() {
        if (this.winner) return this.winner;
        if (this.playerDone && this.dealerDone) {
            this.winner = this.playerScore > this.dealerScore ? 'Player' : 'Dealer';
        }
        return this.winner;
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

module.exports = { Game }
