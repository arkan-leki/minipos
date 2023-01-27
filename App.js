import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "./screens/Home";
import Navbar from './screens/Navbar';
import Order from './screens/Order';
import Posterminal from './screens/Posterminal';
import ProductList from './screens/ProductList';
import WareHouse from './screens/WareHouse';
import WareHouseCo from './screens/WareHouseCo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WareHouse" component={WareHouse} />
        <Stack.Screen name="Posterminal" component={Posterminal} />
        <Stack.Screen name="WareHouseCo" component={WareHouseCo} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="Order" component={Order} />
      </Stack.Navigator>
      {/* <Navbar/> */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
