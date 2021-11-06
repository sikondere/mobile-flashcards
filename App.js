import * as React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import NewDeckView from './components/NewDeckView';
import DeckListView from './components/DeckListView';
import IndividualDeckView from "./components/IndividualDeckView";
import NewQuestionView from "./components/NewQuestionView";
import QuizView from "./components/QuizView";
import reducer from './reducers'
import { setLocalNotification } from "./utils/notifications";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
          <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='New Deck' component={TabRouter} options={{headerShown: false}} />
            <Stack.Screen name="Deck" component={IndividualDeckView} />
            <Stack.Screen name="New Question" component={NewQuestionView} />
            <Stack.Screen name="Quiz" component={QuizView} />
          </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

function TabRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={DeckListView} />
      <Tab.Screen name='Add Deck' component={NewDeckView} />
    </Tab.Navigator>
  )
}
