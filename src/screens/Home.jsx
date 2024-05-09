import React from 'react';
import {Text} from 'react-native-paper';
import {Button} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text variant="titleLarge">Home Screen</Text>
      <Button mode="contained" onPress={() => navigation.push('Login')}>
        Go To Login Screen
      </Button>
    </>
  );
};

export default Home;
