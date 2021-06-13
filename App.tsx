import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from "./navigation";
import { Provider } from "react-redux";
import store from './store';


export default function App() {

    return (
        <SafeAreaProvider>
            <Provider store={ store }>
                <Navigation />
            </Provider>
            <StatusBar style='light' />
        </SafeAreaProvider>
    );
}