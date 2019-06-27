import { StackNavigator, createStackNavigator } from "react-navigation";
import HomeScreen from '../containers/HomeScreen';
const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
},
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
);

export default AppNavigator;