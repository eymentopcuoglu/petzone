import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppDispatch, useAppSelector } from "../hooks";
import { register } from "../store/features/auth";
import { Status } from "../types";

export default function SignUpScreen({ navigation }: any) {

    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordVerification, setPasswordVerification] = useState<string>('');

    const dispatch = useAppDispatch();
    const { status } = useAppSelector(state => state.auth);

    const onSubmit = async () => {
        if (password === passwordVerification) {
            dispatch(register({
                name,
                surname,
                password,
                email,
                phoneNumber,
                navigation
            }));
        } else {
            Alert.alert('Password', 'Passwords do not match!');
        }

    }

    useEffect(() => {
        if (status === Status.SUCCEEDED)
            navigation.navigate('Login');
    })

    return (
        <View style={ styles.container }>
            { status === Status.LOADING ? <ActivityIndicator /> :
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

                        <View style={ styles.inputViewName }>
                            <View style={ styles.inputView }>
                                <TextInput
                                    style={ styles.inputText }
                                    placeholder="Name:"
                                    placeholderTextColor="#ffffff"
                                    value={ name }
                                    onChangeText={ name => setName(name) } />
                            </View>
                            <View style={ styles.inputView }>
                                <TextInput
                                    style={ styles.inputText }
                                    placeholder="Surname:"
                                    placeholderTextColor="#ffffff"
                                    value={ surname }
                                    onChangeText={ surname => setSurname(surname) } />
                            </View>
                        </View>
                        <View style={ styles.inputViewName }>
                            <View style={ styles.inputView }>
                                <TextInput
                                    secureTextEntry={ false }
                                    style={ styles.inputText }
                                    placeholder="Email:"
                                    placeholderTextColor="#ffffff"
                                    value={ email }
                                    onChangeText={ email => setEmail(email) } />
                            </View>
                            <View style={ styles.inputView }>
                                <TextInput
                                    secureTextEntry={ false }
                                    style={ styles.inputText }
                                    placeholder="Phone Number:"
                                    placeholderTextColor="#ffffff"
                                    value={ phoneNumber }
                                    onChangeText={ phoneNumber => setPhoneNumber(phoneNumber) } />
                            </View>
                        </View>
                        <View style={ styles.inputViewName }>
                            <View style={ styles.inputView }>
                                <TextInput
                                    secureTextEntry={ true }
                                    style={ styles.inputText }
                                    placeholder="Password:"
                                    placeholderTextColor="#ffffff"
                                    value={ password }
                                    onChangeText={ password => setPassword(password) } />
                            </View>
                            <View style={ styles.inputView }>
                                <TextInput
                                    secureTextEntry={ true }
                                    style={ styles.inputText }
                                    placeholder="Verify Password:"
                                    placeholderTextColor="#ffffff"
                                    value={ passwordVerification }
                                    onChangeText={ passwordVerification => setPasswordVerification(passwordVerification) } />
                            </View>
                        </View>
                        <TouchableOpacity onPress={ () => navigation.navigate('Login') } style={ styles.loginBtn2 }>
                            <Text style={ styles.login }>You have an account? Login.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.loginBtn } onPress={ onSubmit }>
                            <Text style={ styles.loginText }>SignUp</Text>
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
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputViewName: {
        width: 270,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
        display: "flex",
        flexDirection: "row",
        top: 20
    },

    inputText: {
        fontSize: 13,
        height: 50,
        color: "white"
    },
    login: {
        color: "black",
        fontSize: 16,
        textDecorationLine: 'underline'
    },
    loginBtn: {
        width: "50%",
        backgroundColor: "#ffffff",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        top: -20
    },
    loginBtn2: {
        width: 250,
        backgroundColor: "#ffffff",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        top: 300
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