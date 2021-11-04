import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, Button, FlatList } from 'react-native';

class DeckListView extends Component {

    state = {
        decks: '',
    };

    getAllDeckKeys = async () => {
        try {
            const value = await AsyncStorage.getAllKeys()
            if(value !== null) {
                this.setState({decks: value})
            }
        }catch(e) {
             
        }
    };

    getDeck = async (deck) => {
        try {
            const value = await AsyncStorage.getItem('brian')
            if(value !== null) {
                this.setState({decks: value})
            }
        }catch(e) {
             
        }
    };

    render() {

        return(
            <View>
                  
                <Button 
                    title = 'view'
                    onPress = {this.getDeck('brian')}
                />
            </View>);
    }
}

export default DeckListView;

