import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class IndividualDeckView extends Component {

    render() {
        const deck = this.props.route.params.deck;
        const no_questions = this.props.route.params.no_qns
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <Text>{'individual deck'}</Text>
               <Text>{deck}</Text>
               <Text>{no_questions}</Text>
                <Button 
                    title = 'Add Card'
                    onPress = {() => this.props.navigation.navigate('New Question', {deck: deck})}
                />
                <Button 
                    title = 'Take Quiz'
                    onPress = {() => this.props.navigation.navigate('Quiz', {deck: deck})}
                />
            </View>);
    }
}

export default IndividualDeckView;

