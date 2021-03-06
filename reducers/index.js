import { RECIEVE_DECKS, ADD_DECK } from "../actions";

export default function decks(state={}, action) {
    switch(action.type) {
        case RECIEVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                ...action.deck
            }
        default:
            return state
    }
}