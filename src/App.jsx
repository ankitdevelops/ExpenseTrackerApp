import React from 'react';
import AuthContextProvider from './store/context/AuthContext';
import Wrapper from './Wrapper';

function App() {
  return (
    <AuthContextProvider>
      <Wrapper />
    </AuthContextProvider>
  );
}

export default App;
