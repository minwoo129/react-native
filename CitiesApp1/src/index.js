import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Cities from './Cities/Cities';
import City from './Cities/City';
import AddCity from './AddCity/AddCity';
import { colors } from './theme';

const CitiesNav = createStackNavigator({
    Cities: { screen: Cities},
    City: {screen: City}
},
{
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
    }
});

const AppTaps = createBottomTabNavigator({
    Cities: {screen: CitiesNav},
    AddCity: {screen: AddCity}
});

const Tabs = createAppContainer(AppTaps);
export default Tabs;