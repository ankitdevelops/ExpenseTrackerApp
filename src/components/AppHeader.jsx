import React from 'react';
import {Appbar} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';

const AppHeader = ({title}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const showBackButton = route.name !== 'Home';
  return (
    <Appbar.Header elevated={true}>
      {showBackButton && (
        <Appbar.Action
          icon="keyboard-backspace"
          onPress={() => {
            navigation.goBack();
          }}
        />
      )}
      <Appbar.Content title={route ? route.name : 'Home'} />
      <Appbar.Action
        icon="account-circle"
        onPress={() => {
          console.log('show more');
        }}
      />
    </Appbar.Header>
  );
};

export default AppHeader;
