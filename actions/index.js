export const RECIEVE_DECKS = 'RECIEVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
//export const ADD_QUESTION = 'ADD_QUESTION';
//export const GET_QUESTIONS = 'GET_QUESTIONS';

export function recieveDecks(decks) {
    return {
        type: RECIEVE_DECKS,
        decks,
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}