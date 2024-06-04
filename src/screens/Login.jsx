import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import * as yup from 'yup';

const Login = ({theme, navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // const navigation = useNavigation();

  const getCharacterValidationError = str => {
    return `Your password must have at least 1 ${str} character`;
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter a valid email address.')
      .required('Email is required.'),
    password: yup
      .string()
      .min(8, 'Password must have at least 8 characters')
      .matches(/[0-9]/, getCharacterValidationError('digit'))
      .matches(/[a-z]/, getCharacterValidationError('lowercase'))
      .matches(/[A-Z]/, getCharacterValidationError('uppercase'))
      .required('Password is required.'),
  });

  const handleLogin = () => {
    validationSchema
      .validate({email, password}, {abortEarly: false})
      .then(() => {
        setEmailError('');
        setPasswordError('');
        navigation.navigate('Main');
      })
      .catch(err => {
        let emailErrorMsg = '';
        let passwordErrorMsg = '';

        err.inner.forEach(error => {
          if (error.path === 'email') {
            emailErrorMsg = error.message;
          } else if (error.path === 'password') {
            passwordErrorMsg = error.message;
          }
        });

        setEmailError(emailErrorMsg);
        setPasswordError(passwordErrorMsg);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          error={!!emailError}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      </View>
      <View style={styles.colMargin}>
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          secureTextEntry
          error={!!passwordError}
        />
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
      </View>
      <View>
        <Button
          mode="contained"
          onPress={handleLogin}
          textColor="#DAE0E2"
          buttonColor="#2F363F"
          theme={{roundness: 1}}
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
          onPress={() => navigation.navigate('SignUp')}>
          Sign Up
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
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

export default Login;
