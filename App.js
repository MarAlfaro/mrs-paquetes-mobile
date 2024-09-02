import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackNavigator } from './navigation/StackNavigator';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer>
        <MainStackNavigator />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}
