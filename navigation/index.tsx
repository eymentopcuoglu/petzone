import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import AdoptionScreen from "../screens/AdoptionScreen";
import LostFoundScreen from "../screens/LostFoundScreen";
import DonationScreen from "../screens/DonationScreen";
import EmergencyScreen from "../screens/EmergencyScreen";
import LatestRecordsScreen from "../screens/LatestRecordsScreen";
import { Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

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
        <Drawer.Navigator initialRouteName="Home" screenOptions={ ({ navigation }) => {
            return ({
                headerShown: true,
                headerStyle: { backgroundColor: '#071a52', minHeight: 102 },
                headerTitleAlign: 'center',
                headerTitle: props => <Image style={ { width: 70, height: 57 } }
                                             source={ require('../assets/petzone.png') } />,
                headerRight: props => <Ionicons name="person-circle-outline" size={ 36 } color="white"
                                                style={ { marginRight: 10 } } />,
                headerLeft: props => <Ionicons name="ios-menu" size={ 36 } color="white" style={ { marginLeft: 10 } }
                                               onPress={ () => navigation.openDrawer() } />
            })
        } }>
            <Drawer.Screen name="Login" component={ LoginScreen } />
            <Drawer.Screen name="SignUp" component={ SignUpScreen } />
            <Drawer.Screen name="Home" component={ HomeScreen } />
            <Drawer.Screen name="Adoption" component={ AdoptionScreen } />
            <Drawer.Screen name="Lost&Found" component={ LostFoundScreen } />
            <Drawer.Screen name="Donation" component={ DonationScreen } />
            <Drawer.Screen name="Latest Records" component={ LatestRecordsScreen } />
            <Drawer.Screen name="Emergency" component={ EmergencyScreen } />
        </Drawer.Navigator>
    );
}