import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useAppSelector } from "../hooks";
import { LinearGradient } from "expo-linear-gradient";
import { Thumbnail } from "native-base";

export default function ProfileScreen({ navigation }: any) {
    const { isAuthenticated, user } = useAppSelector(state => state.auth);
    return (
        <>
            { isAuthenticated ?
                (
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
                        <Text style={ styles.lostText }> Welcome to Profile Screen </Text>


                        <View>
                            <Thumbnail
                                source={ { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1200px-Gnome-stock_person.svg.png' } }
                                style={ styles.photo } />
                        </View>
                        { !user.isVerified &&
                        <View>
                            <Text style={ styles.warningText }>Your email is not verified! Please check your email and
                                verify by clicking the link </Text>
                        </View> }
                        <View>
                            <Text style={ styles.personText }> { user.name + ' ' + user.surname } </Text>
                        </View>
                        <View>
                            <Text style={ styles.mailText }> Mail: { user.email } </Text>
                        </View>
                        <View>
                            <Text style={ styles.phoneText }> Phone: { user.phoneNumber } </Text>
                        </View>
                        <View>
                            <TouchableOpacity style={ styles.contBtn }
                                              onPress={ () => navigation.push('Edit Profile') }>
                                <Text style={ styles.continue }>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={ styles.logoutBtn }
                                              onPress={ () => navigation.push('Edit Profile') }>
                                <Text style={ styles.continue }>Log Out</Text>
                            </TouchableOpacity>
                        </View>


                        <View>
                            <Text style={ {
                                color: '#ffffff',
                                fontWeight: 'bold',
                                fontSize: 16,
                                top: -80
                            } }> Posts </Text>
                        </View>


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
        top: 60
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
    },
    photo: {
        width: 100,
        height: 100,
        top: -240,

    },
    rectangle: {
        width: 350,
        height: 200,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        top: -100,
    },
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
        height: 600,
        borderRadius: 200,
        opacity: 1,
        transform: [{ scaleY: 2 }],
        position: 'absolute',
        top: 0
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
        backgroundColor: "#000000",
        borderRadius: 5,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 10
    },
    inputView2: {
        width: "80%",
        backgroundColor: "#000000",
        borderRadius: 5,
        height: 150,
        marginBottom: 20,
        padding: 10
    },
    inputText: {
        height: 50,
        color: "white"
    },
    inputText2: {
        height: 50,
        color: "white",
        top: -20
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
    imageBtn: {
        width: 50,
        backgroundColor: "#ffffff",
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",

    },
    contBtn: {
        width: "50%",
        backgroundColor: "#a7ff83",
        borderRadius: 25,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        top: -190,
        left: -100
    },
    logoutBtn: {
        width: "25%",
        backgroundColor: "white",
        borderRadius: 25,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        top: -135,
        left: -50
    },
    lostText: {
        color: "#ffffff",
        top: 0,
        fontSize: 20,
        position: "absolute",
        fontWeight: 'bold'
    },
    continue: {
        fontSize: 12,
        color: "#086972",
        fontWeight: 'bold'
    },
    personText: {
        fontSize: 18,
        color: "#ffffff",
        fontWeight: 'bold',
        top: -220
    },
    warningText: {
        fontSize: 18,
        color: "#FF4C4C",
        fontWeight: 'bold',
        top: -220,
        marginBottom:20,
        left: 15
    },
    mailText: {
        fontSize: 14,
        color: "#ffffff",
        top: -200,
        left: -90
    },
    phoneText: {
        fontSize: 14,
        color: "#ffffff",
        top: -218,
        left: 100
    },
    changePasswordButton: {
        marginTop: 50,
        width: "50%",
        backgroundColor: "#a7ff83",
        borderRadius: 25,
        height: 35,
        alignItems: "center",
        justifyContent: "center"
    }
});
