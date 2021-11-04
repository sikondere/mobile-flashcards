import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, Button, FlatList } from 'react-native';

class DeckListView extends Component {

    render() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home screen</Text>
          <Button
            title="Go"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
          </View>
        );
      }
}

export default DeckListView;

