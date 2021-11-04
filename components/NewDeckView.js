import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, Button, Alert, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

class NewDeckView extends Component {

    render() {

        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <Text>{'Home'}</Text>
                <Button 
                    title = 'Create Deck'
                    onPress = {() => this.props.navigation.navigate('Deck')}
                />
            </View>);
    }
}

export default NewDeckView;

