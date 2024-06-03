import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ReportScreen from '../screens/ReportScreen';
import MapScreen from '../screens/MapScreen'; // Importe a nova tela

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Report" component={ReportScreen} />
                <Stack.Screen name="Map" component={MapScreen} /> {/* Adicione a rota aqui */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
