import AsyncStorage from "@react-native-community/async-storage";

const STORAGE_KEY = 'mobile-flashcards'

export function submitEntry(deck, deck_details) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({ 
        [deck]: deck_details,
    }))
}

export function removeEntry(deck_id) {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        })
}

export function fetchAllDecks() {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((results) => {return JSON.parse(results)})
}