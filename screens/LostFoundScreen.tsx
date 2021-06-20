import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Left, Body, Right } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { Grid } from 'react-native-easy-grid';
import { ImagedPost } from "../types";
import api from "../api";

export default function LostFoundScreen({ navigation }: any) {
    const [lostAndFoundPosts, setLostAndFoundPosts] = useState<ImagedPost[]>([]);

    useEffect(() => {
        (async () => {
            const response = await api.post.getLostAndFoundsPosts();
            setLostAndFoundPosts([...response]);
        })();
    }, []);

    return (
        <Container style={ styles.container }>

            <LinearGradient
                colors={ ['#a7ff83', '#17b978', '#a7ff83'] }
                style={ styles.circle }>
            </LinearGradient>

            <LinearGradient
                colors={ ['#071a52', '#071a52', '#086972', '#17b978', '#a7ff83'] }
                style={ styles.circle2 }>
            </LinearGradient>

            <Text style={ styles.lostText }> Lost & Found </Text>


            <Content>

                <TouchableOpacity style={ styles.contBtn } onPress={ () => navigation.navigate('CreatePost') }>
                    <Text style={ styles.continue }>Create a Post</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.contBtn } onPress={ () => navigation.navigate('CreatePost') }>
                    <Text style={ styles.continue }>Create a Post</Text>
                </TouchableOpacity>
                { lostAndFoundPosts.map(lostAndFoundPost =>
                    <Card style={ { flex: 0, width: 380, top: 180, height: 360, marginBottom: 50 } }>
                        <CardItem>
                            <Left>
                                <Thumbnail
                                    source={ { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1200px-Gnome-stock_person.svg.png' } } />
                                <Body>
                                    <Text>Person Name</Text>
                                    <Text>{ lostAndFoundPost.createdAt }</Text>
                                </Body>
                            </Left>

                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                        <CardItem cardBody>
                            <Grid>
                                <Image
                                    source={ { uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/C1F7/production/_118555694_cats_02.jpg' } }
                                    style={ { height: 200, width: 200, flex: 1 } } />
                            </Grid>
                        </CardItem>

                        <CardItem style={ { marginBottom: -10 } }>
                            <Text style={ { fontWeight: "bold", fontSize: 16 } }>
                                { lostAndFoundPost.description }
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text style={ { fontSize: 13 } }>
                                { lostAndFoundPost.title }
                            </Text>
                        </CardItem>
                    </Card>
                ) }
            </Content>
        </Container>
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
        fontWeight: 'bold'
    },
    continue: {
        fontSize: 16,
        color: "#086972",
        fontWeight: 'bold'
    },

});
