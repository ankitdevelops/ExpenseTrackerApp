import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppHeader from '../components/AppHeader';
import BottomNavigationBar from '../components/BottomNavigation';

const AppWrapper = ({children}) => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.content}>{children}</View>
      <BottomNavigationBar />
    </View>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 5,
    gap: 5,
  },
});
