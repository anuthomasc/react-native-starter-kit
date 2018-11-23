import { StackNavigator, createDrawerNavigator } from "react-navigation";
import DrawerNavigator from './DrawerNavigator';

const AppNavigator = StackNavigator({
    Home: { screen: DrawerNavigator },
},
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
);

export default AppNavigator;