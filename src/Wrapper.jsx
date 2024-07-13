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
import useAuthContext from './store/hooks/useAuthContext';
import BottomTab from './navigatator/BottomNavigation';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import AddExpense from './screens/AddExpense';
import {en, registerTranslation} from 'react-native-paper-dates';

const Stack = createNativeStackNavigator();
// theme setting
const {DarkTheme} = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme,
});
// theme setting

const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

const Wrapper = () => {
  registerTranslation('en', en);

  const {accessToken} = useAuthContext();
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

          {/* <Stack.Screen name="History" component={History} /> */}
          {/* <Stack.Screen name="Category" component={Category} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Wrapper;
