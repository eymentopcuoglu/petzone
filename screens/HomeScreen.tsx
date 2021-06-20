import * as React from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView, { Circle, PROVIDER_GOOGLE } from 'react-native-maps';
import { useEffect, useState, useRef } from "react";
import BottomSheet from 'reanimated-bottom-sheet';
import BottomSheetBehavior from "reanimated-bottom-sheet";
import NotificationForm from '../components/home/NotificationForm';
import * as Location from 'expo-location';
import api from '../api';
import { NotificationPost } from "../types";
import BottomSheetHeader from "../components/home/BottomSheetHeader";
import LoginScreen from "./LoginScreen";

type CircleProp = {
    latitude: number,
    longitude: number,
    fillColor: string
}

export default function HomeScreen() {

    const [circles, setCircles] = useState<CircleProp[]>();
    const [notificationPosts, setNotificationPosts] = useState<NotificationPost[]>([]);

    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string>('');

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const sheetRef = useRef<BottomSheetBehavior>(null);
    const mapRef = useRef<MapView>(null);

    const onPressHandler = () => {
        if (sheetRef && sheetRef.current)
            sheetRef.current.snapTo(0);
    }

    const addNewPost = (post: NotificationPost) => {
        setNotificationPosts([...notificationPosts, post]);
    }

    useEffect(() => {
        setIsLoading(true);
        // Get the location of the user and animate towards it
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            // if (mapRef && mapRef.current)
            //     mapRef.current.animateToRegion({
            //         latitude: location.coords.latitude,
            //         longitude: location.coords.longitude,
            //         latitudeDelta: 0.001,
            //         longitudeDelta: 0.001,
            //     }, 1000);

            const notificationPosts = await api.post.getNotificationPosts();
            setNotificationPosts([...notificationPosts]);
            setIsLoading(false);
        })();

    }, []);

    return (
        <>
            {
                isLoading || location === null ? <ActivityIndicator /> :
                    <>
                        <View style={ styles.container }>
                            <MapView provider={ PROVIDER_GOOGLE }
                                     style={ styles.map }
                                     ref={ mapRef }
                                     showsUserLocation={ true }
                                     showsMyLocationButton={ true }
                                     initialRegion={ {
                                         latitude: location.coords.latitude,
                                         longitude: location.coords.longitude,
                                         latitudeDelta: 0.001,
                                         longitudeDelta: 0.001,
                                     } }>
                                { notificationPosts?.map((notificationPost, index) => <Circle
                                    key={ index }
                                    center={ {
                                        latitude: notificationPost.latitude,
                                        longitude: notificationPost.longitude
                                    } }
                                    radius={ 100 }
                                    strokeColor={ '#FFFFFF' }
                                    fillColor={ 'rgba(0,255,0,0.2)' } />
                                ) }
                            </MapView>
                            <TouchableOpacity
                                style={ styles.notifyButton }
                                onPress={ onPressHandler }
                            >
                                <Text style={ styles.notifyButtonText }>Notify</Text>
                            </TouchableOpacity>
                        </View>
                        <BottomSheet
                            // @ts-ignore
                            ref={ sheetRef }
                            snapPoints={ [500, 250, 0] }
                            renderContent={ () => <NotificationForm location={ location } addNewPost={ addNewPost } /> }
                            renderHeader={ BottomSheetHeader }
                            initialSnap={ 2 }
                        />
                    </>
            }
        </>
    );
}


//TODO: Style of the BottomSheet should be changed
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    map: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    notifyButton: {
        position: "absolute",
        bottom: Dimensions.get('window').height * 0.1,
        alignItems: "center",
        justifyContent: 'center',
        width: 135,
        height: 45,
        borderRadius: 23,
        backgroundColor: '#071a52'
    },
    notifyButtonText: {
        color: 'white'
    },
    panel: {
        height: 600,
        padding: 20,
        backgroundColor: '#f7f5eee8'
    },
    header: {
        backgroundColor: '#f7f5eee8',
        shadowColor: '#000000',
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    }
});