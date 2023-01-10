let card0 = { 
    suit: 'Hearts',
    number: 2
} //end card0

console.log(card0.suit);
console.log(card0.number);

function isRed (card) {
    if (card0.suit === 'Hearts' || card0.suit === 'Diamonds') {
        return true;
        }
    else {
        return false;
    }
} //end isRed

console.log('Test isRed', isRed(card0));