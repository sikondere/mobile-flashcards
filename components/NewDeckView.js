import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, Button, Alert, TextInput } from 'react-native';

class NewDeckView extends Component {

    state = {
        deck: '',
    };

    onChangeText = (value) => {
        this.setState(() => ({deck: value}))
    };

    onSubmit = async (e) => {
        try {
            let value = {
                title: this.state.deck,
                questions: [],
            };
            await AsyncStorage.setItem(this.state.deck, JSON.stringify(value))
        }catch(err) {
            console.log(err);
        }
    };

    render() {

        return(
            <View>
                <TextInput 
                    onChangeText = {this.onChangeText}
                />
                <Button 
                    title = 'Create new deck'
                    onPress = {this.onSubmit}
                />
            </View>);
    }
}

export default NewDeckView;

