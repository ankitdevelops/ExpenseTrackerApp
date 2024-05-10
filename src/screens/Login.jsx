import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={email => setEmail(email)}
          mode="outlined"
          theme={{roundness: 50}}
        />
      </View>
      <View style={styles.colMargin}>
        <TextInput
          label="Password"
          value={password}
          onChangeText={password => setPassword(password)}
          mode="outlined"
          theme={{roundness: 50}}
        />
      </View>
      <View>
        <Button
          mode="contained"
          onPress={() => navigation.push('Home')}
          textColor="#DAE0E2"
          buttonColor="#2F363F"
          compact={false}>
          <Text variant="titleMedium" style={styles.buttonText}>
            Login Now
          </Text>
        </Button>
      </View>
      <View style={styles.pageNavigation}>
        <Text variant="labelSmall">don't have an account:</Text>
        <Text
          variant="labelMedium"
          style={styles.singupBtn}
          onPress={() => navigation.push('SignUp')}>
          Sing Up
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  colMargin: {
    marginVertical: 15,
  },
  buttonText: {
    fontSize: 20,
    color: '#eeee',
  },
  pageNavigation: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  singupBtn: {
    marginLeft: 9,
    color: '#0A79DF',
  },
});

export default Login;
