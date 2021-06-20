import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from "react";
import api from '../api';
import { NotificationPost } from "../types";

export default function LatestRecordsScreen() {
    const [latestRecords, setLatestRecords] = useState<NotificationPost[]>([]);

    useEffect(() => {

        (async () => {
            const response = await api.post.getLatestPosts();
            setLatestRecords([...response]);
        })();
    }, []);

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
            </View>
            <ScrollView contentContainerStyle={ styles.scrollViewContainer }>
                <Text style={ styles.lostText }> Latest Records </Text>
                { latestRecords.map((latestRecord, index) =>
                    <View style={ styles.rectangle } key={ index }>
                        <Text style={ styles.title }> { latestRecord.title }</Text>
                        <Text style={ styles.title2 }> { "Type: " + latestRecord.postType + " - Pet Type: " + latestRecord.petType}</Text>
                        <Text style={ styles.descript }> { latestRecord.description }</Text>
                    </View>
                ) }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    rectangle: {
        width: 360,
        height: 130,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginTop: 30,
        top: -150
    },
    scrollViewContainer: {
        paddingTop: 200
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
        top: 70
    },
    lostText: {
        color: "#ffffff",
        top: 20,
        fontSize: 20,
        position: "absolute",
        fontWeight: 'bold',
        left: 110
    },
    title: {
        fontSize: 16,
        color: "#086972",
        fontWeight: 'bold',
        left: 10,
        top: 5,
        marginBottom: 5
    }
    ,
    title2: {
        fontSize: 16,
        color: "black",
        fontWeight: 'bold',
        left: 7,
        top: 5,
        marginBottom: 5
    }
    , descript: {
        width: 350,
        fontSize: 14,
        color: "black",
        left: 7,
        top: 5
    }

});
