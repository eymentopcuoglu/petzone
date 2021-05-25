import * as React from 'react';
import { StyleSheet, View, Dimensions, Button, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import { useEffect, useState, useRef } from "react";
import BottomSheet from 'reanimated-bottom-sheet';
import BottomSheetBehavior from "reanimated-bottom-sheet";

type CircleProp = {
    latitude: number,
    longitude: number,
    fillColor: string
}

export default function HomeScreen() {


    const [circles, setCircles] = useState<CircleProp[]>();
    const sheetRef = useRef<BottomSheetBehavior>(null);

    const onPressHandler = () => {
        if (sheetRef && sheetRef.current)
            sheetRef.current.snapTo(0);
    }

    const renderInner = () => (
        <View style={ styles.panel }>
            <Text style={ styles.panelTitle }>Notification Form</Text>
        </View>
    )

    const renderHeader = () => (
        <View style={ styles.header }>
            <View style={ styles.panelHeader }>
                <View style={ styles.panelHandle } />
            </View>
        </View>
    )

    useEffect(() => {
        setCircles([
            { latitude: 40.977438, longitude: 37.892084, fillColor: 'rgba(0,255,0,0.2)' },
            { latitude: 40.977122, longitude: 37.894220, fillColor: 'rgba(255,0,0,0.2)' }
        ])
    }, []);

    return (
        <>
            <View style={ styles.container }>
                <MapView style={ styles.map }
                         initialRegion={ {
                             latitude: 40.978649,
                             longitude: 37.892981,
                             latitudeDelta: 0.001,
                             longitudeDelta: 0.001,
                         } }>
                    { circles?.map((circle, index) => <Circle
                        key={ index }
                        center={ { latitude: circle.latitude, longitude: circle.longitude } }
                        radius={ 50 }
                        fillColor={ circle.fillColor } />
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
                renderContent={ renderInner }
                renderHeader={ renderHeader }
                initialSnap={ 2 }
            />
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
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
        backgroundColor: '#f7f5eee8',
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
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