import { createStackNavigator } from 'react-navigation-stack';
import Boss from '../screens/boss';
import React from 'react';
import Header from '../shared/header';

const screens = {
    Boss : {
        screen: Boss,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title= '' />,
            }
        }
    },
}

const BossStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'red',
        headerStyle: { backgroundColor: '#263341', height: 50 }
    }
});

export default BossStack;