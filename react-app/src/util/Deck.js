class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

let suitDict = {
    0: 'Spade',
    1: 'Club',
    2: 'Heart',
    3: 'Diamond'
}

let valuesDict = {
    0: 'A',
    1: '2',
    2: '3',
    3: '4',
    4: '5',
    5: '6',
    6: '7',
    7: '8',
    8: '9',
    9: '10',
    10: 'J',
    11: 'Q',
    12: 'K',
}

class Deck {
    constructor() {
        this.cards = [];
        // 4 copies of each cards (4 decks per game)
        for (let k = 0; k < 4; k++) {
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 13; j++) {
                    this.cards.push(new Card(suitDict[i], valuesDict[j]));
                }
            }
        }
    }

    drawCard() {
        let idx = Math.floor(Math.random() * 1000) % this.cards.length;
        let [card] = this.cards.splice(idx, 1);
        return card;
    }

    removeCard(index) {
        const [card] = this.cards.splice(index, 1);
        return card;
    }

    getIndex() {
        return Math.floor(Math.random() * 1000) % this.cards.length;
    }
}

module.exports = { Deck }
