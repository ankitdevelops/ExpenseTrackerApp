import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Card, IconButton, useTheme} from 'react-native-paper';
const BottomNavigationBar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const navigateTo = screen => {
    if (route.name !== screen) {
      navigation.push(screen);
    }
  };

  return (
    <Card style={styles.cardStyles}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateTo('Home')}>
          <IconButton icon="home" size={30} />
          <Text variant="bodyMedium" style={styles.text}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <IconButton icon="clipboard-list" size={30} />
          <Text variant="bodyMedium" style={styles.text}>
            Category
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateTo('History')}>
          <IconButton icon="history" size={30} />
          <Text variant="bodyMedium" style={styles.text}>
            History
          </Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default BottomNavigationBar;

const styles = StyleSheet.create({
  cardStyles: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    margin: 'auto',
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 5,
    // backgroundColor: 'rgb(74, 69, 78)',
    // borderRadius: 10,
    padding: 4,
  },
  text: {marginTop: -10},
});
