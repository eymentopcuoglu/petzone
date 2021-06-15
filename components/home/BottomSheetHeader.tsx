import * as React from 'react';
import { StyleSheet, View } from 'react-native';


export default function BottomSheetHeader() {
    return (
        <View style={ styles.header }>
            <View style={ styles.panelHeader }>
                <View style={ styles.panelHandle } />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
