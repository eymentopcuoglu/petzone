import * as React from 'react';
import { Alert, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import * as Location from "expo-location";
import api from '../../api';
import { useAppSelector } from "../../hooks";

type NotificationFormProps = {
    location: Location.LocationObject | null
}

export default function NotificationForm({ location }: NotificationFormProps) {
    const [postType, setPostType] = useState<'Food' | 'Water' | 'Food and Water' | 'Need of help' | ''>('');
    const [noOfPets, setNoOfPets] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [petType, setPetType] = useState<string>('');

    const { isAuthenticated, userId, token } = useAppSelector(state => state.auth);

    const handleSubmit = async () => {
        if (isAuthenticated) {
            if (location) {
                try {
                    const response = await api.post.createNotificationPost(userId, description, title, petType, postType, location.coords.longitude, location.coords.latitude, noOfPets, token);
                } catch (e) {
                    Alert.alert('Error', 'Please try again');
                }
            } else {
                Alert.alert('Location does not present', 'Please enable location services to submit a new post');
            }
        } else {
            Alert.alert('Authentication', 'You must login to submit a new post');
        }
    }

    return (
        <View style={ styles.panel }>
            <ScrollView
                contentContainerStyle={ { flexGrow: 1 } }
                keyboardShouldPersistTaps='handled'
            >
                <Text style={ styles.panelTitle }>Notification Form</Text>

                <Text style={ styles.label }>Post type</Text>
                <RNPickerSelect
                    onValueChange={ (value) => setPostType(value) }
                    items={ [
                        { key: 'F', label: 'Food', value: 'F' },
                        { key: 'W', label: 'Water', value: 'W' },
                        { key: 'FW', label: 'Food and Water', value: 'FW' },
                        { key: 'NH', label: 'Need of help', value: 'NH' },
                    ] }
                    placeholder={ {
                        key: 'Place Holder',
                        label: 'Select a post type...',
                        value: null,
                        color: '#9EA0A4',
                    } }
                    style={ styles }
                />

                <Text style={ styles.label }>Number of Pets</Text>
                <TextInput
                    style={
                        Platform.OS === 'ios'
                            ? styles.inputIOS
                            : styles.inputAndroid
                    }
                    onChangeText={ (value) => setNoOfPets(parseInt(value)) }
                    value={ noOfPets ? noOfPets.toString() : '' }
                    placeholder="Number of Pets"
                    keyboardType="numeric"
                />

                <Text style={ styles.label }>Title</Text>
                <TextInput
                    style={
                        Platform.OS === 'ios'
                            ? styles.inputIOS
                            : styles.inputAndroid
                    }
                    onChangeText={ (value) => setTitle(value) }
                    value={ title }
                    placeholder="Title"
                />

                <Text style={ styles.label }>Description</Text>
                <TextInput
                    style={
                        Platform.OS === 'ios'
                            ? styles.inputIOS
                            : styles.inputAndroid
                    }
                    onChangeText={ (value) => setDescription(value) }
                    value={ description }
                    placeholder="Description"
                />

                <Text style={ styles.label }>Type of Pet</Text>
                <TextInput
                    style={
                        Platform.OS === 'ios'
                            ? styles.inputIOS
                            : styles.inputAndroid
                    }
                    onChangeText={ (value) => setPetType(value) }
                    value={ petType }
                    placeholder="Type of Pet"
                />

                <TouchableOpacity style={ styles.submitButton } onPress={ handleSubmit }>
                    <Text style={ styles.submitButtonText }>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    panel: {
        height: 600,
        padding: 20,
        backgroundColor: '#f7f5eee8'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    panelTitle: { fontSize: 27, height: 35, },
    input: { height: 40, margin: 12, borderWidth: 1, },
    label: { color: '#707070', marginTop: 20 },
    submitButton: {
        alignItems: "center",
        justifyContent: 'center',
        width: 135,
        height: 45,
        borderRadius: 23,
        backgroundColor: '#071a52',
        marginTop: 20
    },
    submitButtonText: {
        color: 'white'
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});
