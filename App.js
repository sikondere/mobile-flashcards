import * as React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NewDeckView from './components/NewDeckView';
import DeckListView from './components/DeckListView';
import IndividualDeckView from "./components/IndividualDeckView";
import NewQuestionView from "./components/NewQuestionView";
import QuizView from "./components/QuizView";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='New Deck' component={TabRouter} />
        <Stack.Screen name="Deck" component={IndividualDeckView} />
        <Stack.Screen name="New Question" component={NewQuestionView} />
        <Stack.Screen name="Quiz" component={QuizView} />
      </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

function TabRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={DeckListView} />
      <Tab.Screen name='Add Deck' component={NewDeckView} />
    </Tab.Navigator>
  )
}
