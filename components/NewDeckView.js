import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { submitEntry } from '../utils/api';
import { addDeck } from '../actions'

class NewDeckView extends Component {

    state = {
        deck: ''
    };

    submit = () => {
        const deck = this.state.deck;
        //save to redux
        this.props.dispatch(addDeck({[deck]: {tile:deck, questions: []}}))

        //save to DB
        submitEntry(deck, {tile:deck, questions: []});

        this.setState({deck: ''})

        //navigate to individual deck view
        this.props.navigation.navigate('Deck', { deck: deck, no_qns: 0})
    };

    render() {

        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <TextInput 
                    value = {this.state.deck}
                    onChangeText={(value) => this.setState({deck: value})}
               />
                <Button 
                    title = 'Create Deck'
                    onPress = {this.submit}
                />
            </View>);
    }
}

function mapStateToProps(dispatch) {
    return {
        dispatch
    }
}
export default connect(mapStateToProps)(NewDeckView);

 