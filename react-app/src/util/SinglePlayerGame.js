import { Game } from './Game';

export class SinglePlayerGame extends Game {
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
        if (this.dealerDone) return
        super.dealerHit();
    }

    removeCard(index) {
        super.removeCard(index);
    }
}
