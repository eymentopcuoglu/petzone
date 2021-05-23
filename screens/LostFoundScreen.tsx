import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function LostFoundScreen() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>LostFound Screen!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
