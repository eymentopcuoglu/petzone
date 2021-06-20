import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from "react";
import api from "../api";
import RNPickerSelect from "react-native-picker-select";
import { useAppSelector } from "../hooks";

export default function CreatePostScreen({ route, navigation }: any) {

    const { fetchPosts } = route.params;

    const [image, setImage] = useState<string>('');
    const [postType, setPostType] = useState<'A' | 'LF' | ''>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [petType, setPetType] = useState<string>('');

    const { isAuthenticated, user, token } = useAppSelector(state => state.auth);

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const onSubmit = async () => {
        try {
            const response = await api.post.createImagedPost(user.id, description, title, petType, postType, image, false, token);
            console.log(image);
            Alert.alert('Success', 'Successfully shared!');
            fetchPosts();
        } catch (e) {
            Alert.alert('Error', 'Please try again');
        }
    }

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
            <Text style={ styles.lostText }> Create a Post </Text>

            <View style={ styles.inputViewName }>
                <View style={ styles.inputViewSmall }>
                    <RNPickerSelect
                        onValueChange={ (value) => setPostType(value) }
                        items={ [
                            { key: 'A', label: 'Adoption', value: 'A' },
                            { key: 'LF', label: 'Lost and Found', value: 'LF' }
                        ] }
                        placeholder={ {
                            key: 'Place Holder',
                            label: 'Select a post type...',
                            value: null,
                            color: '#9EA0A4',
                        } }
                    />
                </View>

                <View style={ styles.inputViewSmall }>
                    <TextInput
                        style={ styles.inputText }
                        placeholder="Pet Type:"
                        placeholderTextColor="#000000"
                        value={ petType }
                        onChangeText={ petType => setPetType(petType) }
                    />
                </View>
            </View>

            <View style={ styles.inputView }>
                <TextInput
                    style={ styles.inputText }
                    placeholder="Title:"
                    placeholderTextColor="#000000"
                    value={ title }
                    onChangeText={ title => setTitle(title) }
                />
            </View>
            <View style={ styles.inputView2 }>
                <TextInput
                    style={ styles.inputText2 }
                    placeholder="Description:"
                    placeholderTextColor="#000000"
                    value={ description }
                    onChangeText={ description => setDescription(description) }
                />
            </View>

            <TouchableOpacity style={ styles.imageBtn } onPress={ pickImage }>
                <Icon name='image' />
            </TouchableOpacity>

            <TouchableOpacity style={ styles.loginBtn } onPress={ onSubmit }>
                <Text>Submit</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
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
        backgroundColor: "#ffffff",
        borderRadius: 5,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 10
    },
    inputViewSmall: {
        width: 158,
        backgroundColor: "#ffffff",
        borderRadius: 5,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 10
    },
    inputViewName: {
        width: 236,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
        display: "flex",
        flexDirection: "row",
        top: -20,
    },
    inputView2: {
        width: "80%",
        backgroundColor: "#ffffff",
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
        color: "black",
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
        fontWeight: 'bold'
    },
    continue: {
        fontSize: 16,
        color: "#086972",
        fontWeight: 'bold'
    }
});
