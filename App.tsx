import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from "./navigation";
import { Provider } from "react-redux";
import store from './store';

export default function App() {
    return (
        <Provider store={ store }>
            <SafeAreaProvider>
                <Navigation />
                <StatusBar style='light' />
            </SafeAreaProvider>
        </Provider>
    );
}