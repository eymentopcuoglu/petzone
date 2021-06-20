import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppSelector } from "../hooks";

export default function EmergencyScreen() {

    const { institutions, status } = useAppSelector(state => state.institution);

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

            <ScrollView contentContainerStyle={ styles.container2 }>
                <Text style={ styles.lostText }> Emergency Numbers </Text>
                <TouchableOpacity style={ styles.emergency } onPress={ () => Linking.openURL(`tel:${ 153 }`) }>
                    <Text style={ { color: "white", fontWeight: "bold", fontSize: 18 } }>Call 153</Text>
                </TouchableOpacity>

                { institutions.filter(institution => institution.institutionType === 'E').map((institution, index) =>
                    <View key={ index } style={ styles.rectangle }>
                        <Text style={ styles.continue }> { institution.name } </Text>
                        <Text style={ styles.phone }> { institution.phoneNumber } </Text>
                        <Text style={ styles.address }> { institution.address } </Text>
                    </View>
                ) }
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    rectangle: {
        width: 360,
        height: 110,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginTop: 30,
        top: 30
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
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        paddingTop: 50,
        height: 900
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
        top: 70
    },
    lostText: {
        color: "#ffffff",
        top: -40,
        fontSize: 20,
        fontWeight: 'bold',
        left: 80
    },
    continue: {
        fontSize: 16,
        color: "#086972",
        fontWeight: 'bold',
        left: 10,
        top: 5
    },
    phone: {
        fontSize: 14,
        color: "black",
        fontWeight: 'bold',
        left: 10,
        top: 5
    },
    address: {
        width: 350,
        fontSize: 14,
        color: "black",
        left: 10,
        top: 5
    },
    emergency: {
        width: "50%",
        backgroundColor: "red",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        top: 50,
        left: 90,
        marginTop: 10
    }
});
