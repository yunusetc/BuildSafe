import { createStackNavigator } from 'react-navigation-stack';
import Jobs from '../screens/jobs';
import React from 'react';
import Header from '../shared/header';

const screens = {
    Jobs : {
        screen: Jobs,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title= '' />,
            }
        }
    },
}

const JobsStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'red',
        headerStyle: { backgroundColor: '#263341', height: 50 }
    }
});

export default JobsStack;