
import React from 'react';
import { RootStack } from './Src/Router/RootStack';
import { Login } from './Src/Public/Login';
import { UserProvider } from './Src/Context/UserContext';







function App() {
  return (
    // <RootStack/>
   <UserProvider>
    <Login/>
   </UserProvider>
  );
}


export default App;
