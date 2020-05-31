import { createStackNavigator } from 'react-navigation-stack';
import Health from '../screens/health';
import React from 'react';
import Header from '../shared/header';

const screens = {
    Health : {
        screen: Health,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title= '' />,
            }
        }
    },
}

const HealthStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'red',
        headerStyle: { backgroundColor: '#263341', height: 50 }
    }
});

export default HealthStack;