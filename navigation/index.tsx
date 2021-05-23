import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import AdoptionScreen from "../screens/AdoptionScreen";
import LostFoundScreen from "../screens/LostFoundScreen";
import DonationScreen from "../screens/DonationScreen";
import EmergencyScreen from "../screens/EmergencyScreen";
import LatestRecordsScreen from "../screens/LatestRecordsScreen";


export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Drawer = createDrawerNavigator();

function RootNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={ HomeScreen } />
            <Drawer.Screen name="Adoption" component={ AdoptionScreen } />
            <Drawer.Screen name="LostFound" component={ LostFoundScreen } />
            <Drawer.Screen name="Donation" component={ DonationScreen } />
            <Drawer.Screen name="LatestRecords" component={ LatestRecordsScreen } />
            <Drawer.Screen name="Emergency" component={ EmergencyScreen } />
        </Drawer.Navigator>
    );
}