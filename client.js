let card0 = { 
    suit: 'Hearts',
    number: 2
} //end card0

let card1 = {
    suit: 'Spades',
    number: 1
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

console.log('Test isRed card0', isRed(card0));
console.log('Test isRed card1', isRed(card1));
