import { Game } from './Game';

export class MultiPlayerGame extends Game {
    constructor(players, draws) {
        super();

        this.players = players
        this.winner = '';
        // Have to bind functions to Class
        // this.dealerHit = this.dealerHit.bind(this);
        this.drawCard = this.drawCard.bind(this);
        this.getWinner = this.getWinner.bind(this);
        // this.removeCard = this.removeCard.bind(this);
        this.playerDrew = this.playerDrew.bind(this);
        this.dealerDraws = this.dealerDraws.bind(this);

        // Get players set up and initial draws complete
        this.player1Cards = [this.removeCard(draws.shift())];

        this.player2Cards = null;
        this.player3Cards = null;
        this.player4Cards = null;

        if (players.length > 1) {
            this.player2Cards = [this.removeCard(draws.shift())]
        }

        if (players.length > 2) {
            this.player3Cards = [this.removeCard(draws.shift())]
        }

        if (players.length > 3) {
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
        const index = this.deck.getIndex();
        const card = this.deck.removeCard(index);
        if (this.playerTurn === this.players[0]) {
            this.player1Cards.push(card)
            this.player1Score = Game.calculateScore(this.player1Cards);
        } else if (this.playerTurn === this.players[1]) {
            this.player2Cards.push(card)
            this.player2Score = Game.calculateScore(this.player2Cards);
        } else if (this.playerTurn === this.players[2]) {
            this.player3Cards.push(card)
            this.player3Score = Game.calculateScore(this.player3Cards);
        } else if (this.playerTurn === this.players[3]) {
            this.player4Cards.push(card)
            this.player4Score = Game.calculateScore(this.player4Cards);
        } else {
            this.dealerCards.push(card);
            this.dealerScore = Game.calculateScore(this.dealerCards);
        }
        return index;
    }

    playerDrew(idx) {
        const card = this.deck.removeCard(idx);
        if (this.playerTurn === this.players[0]) {
            this.player1Cards.push(card)
            this.player1Score = Game.calculateScore(this.player1Cards);
        } else if (this.playerTurn === this.players[1]) {
            this.player2Cards.push(card)
            this.player2Score = Game.calculateScore(this.player2Cards);
        } else if (this.playerTurn === this.players[2]) {
            this.player3Cards.push(card)
            this.player3Score = Game.calculateScore(this.player3Cards);
        } else if (this.playerTurn === this.players[3]) {
            this.player4Cards.push(card)
            this.player4Score = Game.calculateScore(this.player4Cards);
        } else {
            this.dealerCards.push(card);
            this.dealerScore = Game.calculateScore(this.dealerCards);
        }
    }

    nextPlayer() {
        if (this.playerTurn === this.players[0]) {
            if (this.player2Cards) this.playerTurn = this.players[1];
            else if (this.player3Cards) this.playerTurn = this.players[2];
            else if (this.player4Cards) this.playerTurn = this.players[3];
            else this.playerTurn = 'Dealer';
        } else if (this.playerTurn === this.players[1]) {
            if (this.player3Cards) this.playerTurn = this.players[2];
            else if (this.player4Cards) this.playerTurn = this.players[3];
            else this.playerTurn = 'Dealer';
        } else if (this.playerTurn === this.players[2]) {
            if (this.player4Cards) this.playerTurn = this.players[3];
            else this.playerTurn = 'Dealer';
        } else {
            this.playerTurn = 'Dealer';
        }
        return this.playerTurn;
    }

    dealerDraws() {
        const dealerCardIndices = []
        while (this.dealerScore < 17) {
            const idx = this.deck.getIndex();
            dealerCardIndices.push(idx);
            this.dealerCards.push(this.removeCard(idx));
            this.dealerScore = Game.calculateScore(this.dealerCards);
        }
        return dealerCardIndices;
    }

    getWinner(player) {
        if (this.winner) return this.winner;
        let playerIdx = this.players.indexOf(player);
        let playerScore;
        if (playerIdx === 0) playerScore = this.player1Score;
        else if (playerIdx === 1) playerScore = this.player2Score;
        else if (playerIdx === 2) playerScore = this.player3Score;
        else  playerScore = this.player4Score;
        if (playerScore > 21) {
            this.winner = 'Dealer';
            return this.winner;
        }
        if (this.dealerScore > 21) {
            this.winner = player;
            return this.winner;
        }
        this.winner = this.dealerScore >= playerScore ? 'Dealer' : player;
        return this.winner;
    }

    playerLeft(username) {
        const playerIdx = this.players.indexOf(username);
        // this.players[playerIdx] = '';
        switch (playerIdx) {
            case 0:
                this.player1Cards = null;
                break;
            case 1:
                this.player2Cards = null;
                break;
            case 2:
                this.player3Cards = null;
                break;
            case 3:
                this.player4Cards = null;
                break;
            default:
                break;
        }
    }
}
