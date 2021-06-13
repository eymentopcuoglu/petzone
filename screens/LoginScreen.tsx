import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }: any) {

    return (
        <View style={ styles.container }>
            <LinearGradient
                // Button Linear Gradient
                colors={ ['#a7ff83', '#17b978', '#a7ff83'] }
                style={ styles.circle }>
            </LinearGradient>
            <LinearGradient
                // Button Linear Gradient
                colors={ ['#071a52', '#071a52', '#086972', '#17b978', '#a7ff83'] }
                style={ styles.circle2 }>
            </LinearGradient>

            <View style={ styles.container2 }>

                <Image source={ require('../assets/petzone.png') }
                       style={ styles.logo } />

                <View style={ styles.inputView }>
                    <TextInput
                        style={ styles.inputText }
                        placeholder="Email:"
                        placeholderTextColor="#ffffff"
                        // onChangeText={ text => setState({ email: text }) }
                    />
                </View>
                <View style={ styles.inputView }>
                    <TextInput
                        secureTextEntry={ true }
                        style={ styles.inputText }
                        placeholder="Password:"
                        placeholderTextColor="#ffffff"
                        // onChangeText={ text => this.setState({ password: text }) }
                    />
                </View>
                <TouchableOpacity>
                    <Text style={ styles.forgot }>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.loginBtn }>
                    <Text style={ styles.loginText }>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={ { color: "white" } }>Signup</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.contBtn } onPress={ () => navigation.push('Drawer') }>
                    <Text style={ styles.continue }>Continue as a Guest</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    circle: {
        width: 500,
        height: 400,
        borderRadius: 200,
        opacity: 0.39,
        transform: [{ scaleY: 2 }],
        position: 'absolute',
        top: 20
    },
    circle2: {
        width: 490,
        height: 400,
        borderRadius: 200,
        opacity: 1,
        transform: [{ scaleY: 2 }],
        position: 'absolute',
        top: 0
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 1,
        width: 400,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    logo: {
        width: 240,
        height: 194,
        position: 'absolute',
        top: -200
    },
    inputView: {
        width: "80%",
        backgroundColor: "#086972",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
    loginBtn: {
        width: "50%",
        backgroundColor: "#ffffff",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    contBtn: {
        width: "50%",
        backgroundColor: "#a7ff83",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        top: 470
    },
    loginText: {
        color: "#071a52"
    },
    continue: {
        fontSize: 16,
        color: "#086972",
        fontWeight: 'bold'
    }
});