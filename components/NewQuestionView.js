import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { submitEntry } from '../utils/api';
import { addDeck } from '../actions'

class NewQuestionView extends Component {

    state = {
        question: '',
        answer: '',
    };

    submit = () => {

        const deck_title = this.props.route.params.deck;
        const { decks } = this.props
        let current_deck = decks[deck_title];
        current_deck = {
            ...current_deck,
            questions: current_deck['questions'].concat({
                question: this.state.question,
                answer: this.state.answer,
            })
        }

        //save to redux
        this.props.dispatch(addDeck({[deck_title]: current_deck}))

        //save to DB
        submitEntry(deck_title, current_deck);

        this.setState(() => {
            return {
                question: '',
                answer: '',
            }
        })
        //navigate to individual deck view
        this.props.navigation.navigate('Deck', { deck: deck_title, no_qns: current_deck['questions'].length})
    };

    render() {
        const { decks } = this.props
        const current_deck = decks[this.props.route.params.deck];
        return(
            <View style={styles.container}>
                <Text>{'Question'}</Text>
               <TextInput 
                    style = {styles.inputField}
                    value = {this.state.question}
                    onChangeText={(value) => this.setState({question: value})}
               />
               <Text>{'Answer'}</Text>
               <TextInput 
                    style = {styles.inputField}
                    value = {this.state.answer}
                    onChangeText={(value) => this.setState({answer: value})}
               />
                <Button 
                    title = 'Submit'
                    onPress = {this.submit}
                />
            </View>);
    }
}

function mapStateToProps(decks) {
    return {
        decks
    }
}
export default connect(mapStateToProps)(NewQuestionView);


const styles = StyleSheet.create({
    inputField: {
        backgroundColor: '#4e4cb8',
        color: '#fff',
    },
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
})

