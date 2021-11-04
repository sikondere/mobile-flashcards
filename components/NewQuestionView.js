import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, Button, Alert, TextInput } from 'react-native';

class NewQuestionView extends Component {

    render() {

        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <Text>{'question'}</Text>
                <Button 
                    title = 'Submit'
                />
            </View>);
    }
}

export default NewQuestionView;

