import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, Button, Alert, TextInput } from 'react-native';

class QuizView extends Component {

    render() {

        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <Text>{'quiz'}</Text>
                <Button 
                    title = 'Create new deck'
                />
            </View>);
    }
}

export default QuizView;

