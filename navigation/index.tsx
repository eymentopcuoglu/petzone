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
import CreatePostScreen from "../screens/CreatePostScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ChangePassword from "../screens/ChangePassword";
import { Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect } from "react";
import { getInstitutions } from "../store/features/institution";
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ProfileScreen from "../screens/ProfileScreen";


export default function Navigation() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getInstitutions());
    }, []);

    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// TODO: CHANGE
const TestDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={ ({ navigation }) => {
            return ({
                headerShown: true,
                headerStyle: { backgroundColor: '#071a52', minHeight: 102 },
                headerTitleAlign: 'center',
                headerTitle: props => <Image style={ { width: 70, height: 57 } }
                                             source={ require('../assets/petzone.png') } />,
                headerRight: props => <Ionicons name="person-circle-outline" size={ 36 } color="white"
                                                style={ { marginRight: 10 } }
                                                onPress={ () => navigation.navigate('Profile') } />,
                headerLeft: props => <Ionicons name="ios-menu" size={ 36 } color="white"
                                               style={ { marginLeft: 10 } }
                                               onPress={ () => navigation.openDrawer() } />
            })
        } }>
            <Drawer.Screen name="Home" component={ HomeScreen } />
            <Drawer.Screen name="Adoption" component={ AdoptionScreen } />
            <Drawer.Screen name="Lost&Found" component={ LostFoundScreen } />
            <Drawer.Screen name="Donation" component={ DonationScreen } />
            <Drawer.Screen name="Latest Records" component={ LatestRecordsScreen } />
        </Drawer.Navigator>
    )
}

function RootNavigator() {

    const { isAuthenticated } = useAppSelector(state => state.auth);


    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={ ({ navigation }) => {
            return ({
                headerShown: false
            })
        } }>
            { isAuthenticated ? (
                <>
                    <Stack.Screen name='Drawer' component={ TestDrawer } />
                    <Stack.Screen name='Profile' component={ ProfileScreen } />
                    <Stack.Screen name="Edit Profile" component={ EditProfileScreen } options={ ({ navigation }) => {
                        return ({
                            headerShown: true,
                            headerStyle: { backgroundColor: '#071a52', minHeight: 102 },
                            headerTitleAlign: 'center',
                            headerTitle: props => <Image style={ { width: 70, height: 57 } }
                                                         source={ require('../assets/petzone.png') } />,
                            headerRight: props => <Ionicons name="person-circle-outline" size={ 36 } color="white"
                                                            style={ { marginRight: 10 } }
                                                            onPress={ () => navigation.navigate('Profile') } />,
                            headerLeft: props => <Ionicons name="ios-menu" size={ 36 } color="white"
                                                           style={ { marginLeft: 10 } }
                                                           onPress={ () => navigation.openDrawer() } />
                        })
                    } } />
                    <Stack.Screen name="Change Password" component={ ChangePassword } options={ ({ navigation }) => {
                        return ({
                            headerShown: true,
                            headerStyle: { backgroundColor: '#071a52', minHeight: 102 },
                            headerTitleAlign: 'center',
                            headerTitle: props => <Image style={ { width: 70, height: 57 } }
                                                         source={ require('../assets/petzone.png') } />,
                            headerRight: props => <Ionicons name="person-circle-outline" size={ 36 } color="white"
                                                            style={ { marginRight: 10 } }
                                                            onPress={ () => navigation.navigate('Profile') } />,
                            headerLeft: props => <Ionicons name="ios-menu" size={ 36 } color="white"
                                                           style={ { marginLeft: 10 } }
                                                           onPress={ () => navigation.openDrawer() } />
                        })
                    } } />
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={ LoginScreen } />
                    <Stack.Screen name="SignUp" component={ SignUpScreen } />
                    <Stack.Screen name='ForgotPassword' component={ ForgotPasswordScreen }
                                  options={ { headerShown: true } } />
                    <Stack.Screen name='Drawer' component={ TestDrawer } />
                    <Stack.Screen name='Profile' component={ ProfileScreen } />
                </>
            ) }
        </Stack.Navigator>
    );
}