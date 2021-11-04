import * as React from "react";
import { View, Text } from "react-native";
import NewDeckView from './components/NewDeckView';
import DeckListView from './components/DeckListView';

export default function App() {
  return (
    <View>
      <NewDeckView />
      <DeckListView />
    </View>
  );
}
