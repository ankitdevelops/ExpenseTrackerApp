import React from 'react';
import {Appbar} from 'react-native-paper';
const AppHeader = () => {
  return (
    <Appbar.Header elevated={true}>
      <Appbar.Content title="Home" />
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
