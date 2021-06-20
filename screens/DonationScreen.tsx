import * as React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppSelector } from '../hooks';
import { Status } from "../types";

export default function DonationScreen() {

    const { institutions, status } = useAppSelector(state => state.institution);

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
                        colors={ ['#071a52', '#071a52', '#086972', '#17b978', '#a7ff83'] }
                        style={ styles.circle2 }>
                    </LinearGradient>
                    <Text style={ styles.lostText }> Donation </Text>

                    <View style={ styles.container2 }>
                    </View>
                    { institutions.filter(institution => institution.institutionType === 'D').map((institution, index) =>
                        <View key={ index } style={ styles.rectangle }>
                            <Text style={ styles.continue }> { institution.name } </Text>
                            <Text style={ styles.phone }> { institution.phoneNumber } </Text>
                            <Text style={ styles.address }> { institution.address } </Text>
                        </View>
                    ) }
                </>
            }
        </View>
    );
}

const styles = StyleSheet.create({
        rectangle: {
            width: 350, height: 100, backgroundColor: '#ffffff', borderRadius: 20, top: -100, marginBottom: 30
        }
        , circle: {
            width: 500, height: 400, borderRadius: 200, opacity: 0.39, transform: [{
                scaleY: 2
            }
            ], position: 'absolute', top: 20
        }
        , circle2: {
            width: 490, height: 600, borderRadius: 200, opacity: 1, transform: [{
                scaleY: 2
            }
            ], position: 'absolute', top: 0
        }
        , container: {
            flex: 1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center',
        }
        , container2: {
            flex: 1, width: 400, alignItems: 'center', justifyContent: 'center', position: 'absolute'
        }
        , logo: {
            width: 240, height: 194, position: 'absolute', top: -200
        }
        , inputView: {
            width: "80%",
            backgroundColor: "#086972",
            borderRadius: 25,
            height: 50,
            marginBottom: 20,
            justifyContent: "center",
            padding: 20
        }
        , inputText: {
            height: 50, color: "white"
        }
        , forgot: {
            color: "white", fontSize: 11
        }
        , loginBtn: {
            width: "50%",
            backgroundColor: "#ffffff",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
            marginBottom: 10
        }
        , contBtn: {
            width: "50%",
            backgroundColor: "#a7ff83",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            position: 'absolute',
            top: 70
        }
        , lostText: {
            color: "#ffffff", top: 20, fontSize: 20, position: "absolute", fontWeight: 'bold'
        }
        , continue: {
            fontSize: 16, color: "#086972", fontWeight: 'bold', top: 10, left: 5
        }
        , phone: {
            fontSize: 12, color: "black", top: 10, left: 5
        }
        , address: {
            fontSize: 12, color: "black", top: 10, left: 5
        }
    }
);