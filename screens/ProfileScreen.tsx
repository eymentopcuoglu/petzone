import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useAppSelector } from "../hooks";

export default function ProfileScreen({ navigation }: any) {
    const { isAuthenticated, name, surname } = useAppSelector(state => state.auth);
    return (
        <>
            { isAuthenticated ?
                (
                    <View style={ styles.container }>
                        <Text style={ styles.title }>Welcome to profile screen { name + ' ' + surname }!</Text>
                    </View>
                ) :
                (
                    <View style={ styles.container }>
                        <Text style={ styles.title }>Please login to access profile page!</Text>
                        <TouchableOpacity
                            style={ styles.notifyButton }
                            onPress={ () => navigation.navigate('Login') }
                        >
                            <Text style={ styles.notifyButtonText }>Login</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </>
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
    },
    notifyButton: {
        alignItems: "center",
        justifyContent: 'center',
        width: 135,
        height: 45,
        borderRadius: 23,
        backgroundColor: '#071a52',
        marginTop: 50
    },
    notifyButtonText: {
        color: 'white'
    }
});
