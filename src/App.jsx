import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  adaptNavigationTheme,
  MD3DarkTheme,
  PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import {en, registerTranslation} from 'react-native-paper-dates';

// screens
import Login from './screens/Login';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import AddExpense from './screens/AddExpense';
import History from './screens/History';
import Category from './screens/Category';
import BottomTab from './navigatator/BottomNavigation';

// theme setting
const {DarkTheme} = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

const Stack = createNativeStackNavigator();

function App() {
  registerTranslation('en', en);
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer theme={CombinedDarkTheme}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={BottomTab} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="AddExpense" component={AddExpense} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Category" component={Category} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
