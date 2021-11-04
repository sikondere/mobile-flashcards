import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = 'mobile-flashcards'

export function submitEntry(deck_id, deck_details) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({ 
        [deck_id]: deck_details,
    }))
}

export function removeEntry() {

}