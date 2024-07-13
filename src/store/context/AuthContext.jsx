import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext({});

function AuthContextProvider({children}) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();

  useEffect(() => {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('ACCESS_TOKEN');
        if (value !== null) {
          setAccessToken(value);
        }
      } catch (error) {
        console.error('Error retrieving access token: ', error);
      }
    };
    _retrieveData();
  }, []);
  useEffect(() => {
    const _storeData = async () => {
      try {
        if (accessToken) {
          await AsyncStorage.setItem('ACCESS_TOKEN', accessToken);
        }
      } catch (error) {
        console.error('Error in saving access token: ', error);
      }
    };
    _storeData();
  }, [accessToken]);
  return (
    <AuthContext.Provider
      value={{accessToken, setAccessToken, refreshToken, setRefreshToken}}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
