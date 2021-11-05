import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class IndividualDeckView extends Component {

    render() {
        const deck = this.props.route.params.deck;
        const no_questions = this.props.route.params.no_qns;
        const show_questions = this.props.route.params.no_qns > 0 ? true : false;
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <Text>{deck}</Text>
               <Text>{no_questions} {'cards'}</Text>
                <Button 
                    title = 'Add Card'
                    onPress = {() => this.props.navigation.navigate('New Question', {deck: deck})}
                />
                <Button 
                    title = 'Take Quiz'
                    onPress = {() => this.props.navigation.navigate('Quiz', {deck: deck, show_questions: show_questions})}
                />
            </View>);
    }
}

export default IndividualDeckView;

