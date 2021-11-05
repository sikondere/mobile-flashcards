import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, Button, FlatList, Animated } from 'react-native';
import { connect } from 'react-redux';

import { fetchAllDecks } from '../utils/api';
import { recieveDecks } from '../actions';

class DeckListView extends Component {

    state = {
        opacity: new Animated.Value(1),
    };
    
    componentWillUnmount() {
        const { opacity } = this.state;
        Animated.timing(opacity, { toValue: 0, duration: 1000 }).start()
    }

    componentDidMount() {
        const { dispatch } = this.props;
        fetchAllDecks()
            .then((decks) => dispatch(recieveDecks(decks)))
    }

    Deck = (decks) => {
        return (
            Object.values(decks).map((deck) =>
            {return (
               {
                    key: deck['tile'],
                    title: deck['tile'] + '\n' + deck['questions'].length + ' cards',
                    onPress: () => this.props.navigation.navigate('Deck', { deck: deck['tile'], no_qns: deck['questions'].length}), 
               }
            )})
        );
    };

    render() {
        const { decks } = this.props;
        const { opacity } = this.state;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Animated.View style={{opacity}}>
                    <Text>{JSON.stringify(this.Deck(decks))}</Text>
                    <FlatList 
                        data = {this.Deck(decks)}
                        renderItem = {({item}) => {
                            return (
                                <Button 
                                    key={item.key}
                                    title={item.title}
                                    onPress={item.onPress}
                                />);
                            }
                        }
                    />
                </Animated.View>
            </View>
        );
    }
}

function mapStateToProps(decks) {
    return {
        decks,
    }
}

export default connect(mapStateToProps)(DeckListView);

