import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class IndividualDeckView extends Component {

    render() {

        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <Text>{'individual deck'}</Text>
                <Button 
                    title = 'Add Card'
                    onPress = {() => this.props.navigation.navigate('New Question')}
                />
                <Button 
                    title = 'Take Quiz'
                    onPress = {() => this.props.navigation.navigate('Quiz')}
                />
            </View>);
    }
}

export default IndividualDeckView;

