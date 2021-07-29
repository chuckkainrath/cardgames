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

module.exports = { Game }
