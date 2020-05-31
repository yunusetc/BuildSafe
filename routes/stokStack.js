import { createStackNavigator } from 'react-navigation-stack';
import Stok from '../screens/stok';
import React from 'react';
import Header from '../shared/header';

const screens = {
    Stok : {
        screen: Stok,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title= '' />,
            }
        }
    },
}

const StokStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'red',
        headerStyle: { backgroundColor: '#263341', height: 50 }
    }
});

export default StokStack;