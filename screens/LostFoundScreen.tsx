import  React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';

export default function LostFoundScreen() {
    return (
      <Container style={styles.container}>
        
          <LinearGradient
            colors={['#a7ff83', '#17b978','#a7ff83']}
            style={styles.circle}>
          </LinearGradient>

          <LinearGradient
            colors={['#071a52','#071a52' , '#086972', '#17b978', '#a7ff83']}
            style={styles.circle2}>
          </LinearGradient>
          <Text style={styles.lostText}> Lost & Found </Text>
          <TouchableOpacity style={styles.contBtn}>
            <Text style={styles.continue}>Create a Post</Text>
          </TouchableOpacity>
          
          <Content>
          <Card style={{flex: 0, width:380, top: 180, height:550}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1200px-Gnome-stock_person.svg.png'}} />
                <Body>
                  <Text>Person Name</Text>
                  <Text>DD/MM/YY</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem >
              <Body>
              <Grid>
                <Image source={{uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/C1F7/production/_118555694_cats_02.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                <Image source={{uri: 'https://www.yarrah.com/en/wp-content/uploads/sites/10/2019/03/CAT_header-2.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
              </Grid> 
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor dui in orci suscipit pellentesque.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="paw" />
                  <Text>699 Paws</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
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
    logo:{
      width: 240,
      height: 194,
      position: 'absolute',
      top: -200
    },
    inputView:{
      width:"80%",
      backgroundColor:"#086972",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      width:"50%",
      backgroundColor:"#ffffff",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    contBtn:{
        width:"50%",
        backgroundColor:"#a7ff83",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        position: 'absolute',
        top: 70
      },
    lostText:{
      color:"#ffffff",
      top: 20,
      fontSize: 20,
      position: "absolute",
      fontWeight: 'bold'
    },
    continue:{
        fontSize: 16,
        color:"#086972",
        fontWeight: 'bold'
    },
    
  });
