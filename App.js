import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login';
import Tabs from './components/Tabs';


export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      {!isLoggedIn && <Login login={login} />}
      {isLoggedIn &&
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
