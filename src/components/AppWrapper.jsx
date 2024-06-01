import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import AppHeader from '../components/AppHeader';
import BottomNavigationBar from '../components/BottomNavigation';

const {height} = Dimensions.get('window');
const AppWrapper = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppHeader />
      </View>
      <View style={styles.mainContainer}>{children}</View>
      <View style={styles.footer}>
        <BottomNavigationBar />
      </View>
    </View>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.8, // 10% of the screen height
  },
  mainContainer: {
    flex: 10,
    maxHeight: 'auto',
    height: 'auto',
    overflow: 'visible',
    marginBottom: '8%', // 80% of the screen height
  },
  footer: {
    flex: 2,
    overflow: 'hidden', // 10% of the screen height
  },
});
