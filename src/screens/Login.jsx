import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={email => setEmail(email)}
          mode="outlined"
          theme={{roundness: 50}}
        />
      </View>
      <View>
        <TextInput
          label="Password"
          value={password}
          onChangeText={password => setPassword(password)}
          mode="outlined"
          theme={{roundness: 50}}
        />
      </View>
      <View>
        <Button mode="contained" onPress={() => console.log('Pressed')} s>
          <Text variant="titleMedium">Login Now</Text>
        </Button>
      </View>
    </View>
  );
};

export default Login;
