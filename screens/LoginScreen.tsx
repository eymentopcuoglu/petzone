import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../hooks";
import { login, loginFailed } from '../store/features/auth';
import { Status } from "../types";

export default function LoginScreen({ navigation }: any) {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useAppDispatch();
    const { status } = useAppSelector(state => state.auth);

    const onSubmit = async () => {
        dispatch(login({
            email: email,
            password: password
        }));
    }

    useEffect(() => {
        if (status === Status.FAILED) {
            Alert.alert('Error', 'Wrong password!');
            dispatch(loginFailed());
        }
    })

    return (
        <View style={ styles.container }>
            { status == Status.LOADING ? <ActivityIndicator /> :
                <>
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
                                value={ email }
                                onChangeText={ email => setEmail(email) }
                            />
                        </View>
                        <View style={ styles.inputView }>
                            <TextInput
                                secureTextEntry={ true }
                                style={ styles.inputText }
                                placeholder="Password:"
                                placeholderTextColor="#ffffff"
                                value={ password }
                                onChangeText={ password => setPassword(password) }
                            />
                        </View>

                        <TouchableOpacity style={ styles.loginBtn } onPress={ onSubmit }>
                            <Text style={ styles.loginText }>LOGIN</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ () => navigation.push('SignUp') }>
                            <Text style={ { color: "white", textDecorationLine: 'underline' } }>Don't have an account?
                                Register</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ () => navigation.push('ForgotPassword') }>
                            <Text style={ styles.forgot }>Forgot Password</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ styles.contBtn } onPress={ () => navigation.push('Drawer') }>
                            <Text style={ styles.continue }>Continue as a Guest</Text>
                        </TouchableOpacity>
                    </View>
                </>
            }
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
        marginTop: 10,
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
        fontSize: 12,
        textDecorationLine: 'underline',
        marginTop: 10
    },
    loginBtn: {
        width: "50%",
        backgroundColor: "#ffffff",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20
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