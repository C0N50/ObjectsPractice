let card0 = { 
    suit: 'Hearts',
    number: 2,
    face: '2'
} //end card0

let card1 = {
    suit: 'Spades',
    number: 14,
    face: 'Ace'
}

let card2 = {
    suit: 'Clubs',
    number: 14,
    face: 'Ace'
}

let card3 = {
    suit: 'Clubs',
    number: 2,
    face: '2'
}

console.log(card0.suit);
console.log(card0.number);

function isRed (card) {
    if (card.suit === 'Hearts' || card.suit === 'Diamonds') {
        return true;
        }
    else {
        return false;
    }
} //end isRed

function higherCard (inputCard1, inputCard2) {
    if (inputCard1.number >= inputCard2.number) {
        return inputCard1.face + ' of ' + inputCard1.suit;
    }
    if (inputCard1.number < inputCard2.number) {
        return inputCard2.face + ' of ' + inputCard2.suit;
    }
    else {
        if (inputCard1.suit === 'Spades') {
            return inputCard1.face + ' of ' + inputCard1.suit;
        }
        if (inputCard2.suit === 'Spades') {
            return inputCard2.face + ' of ' + inputCard2.suit;
        }
        if (inputCard1.suit === 'Hearts') {
            return inputCard1.face + ' of ' + inputCard1.suit;
        }
        if (inputCard2.suit === 'Hearts') {
            return inputCard2.face + ' of ' + inputCard2.suit;
        }
        if (inputCard1.suit === 'Diamonds') {
            return inputCard1.face + ' of ' + inputCard1.suit;
        }
        if (inputCard2.suit === 'Diamonds') {
            return inputCard2.face + ' of ' + inputCard2.suit;
        }
        if (inputCard1.suit === 'Clubs') {
            return inputCard1.face + ' of ' + inputCard1.suit;
        }
        if (inputCard2.suit === 'Clubs') {
            return inputCard2.face + ' of ' + inputCard2.suit;
        }
    }
}

console.log('Test isRed card0', isRed(card0));
console.log('Test isRed card1', isRed(card1));

console.log('Test higherCard', higherCard(card0, card1));
console.log('Test higherCard:', higherCard(card0, card2));
console.log('Test higherCard:', higherCard(card0, card3));
console.log('Test higherCard:', higherCard(card1, card2));
console.log('Test higherCard:', higherCard(card1, card3));
console.log('Test higherCard:', higherCard(card2, card3));