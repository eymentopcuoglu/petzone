import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Container, Thumbnail,Card, Body, CardItem, Content, ListItem, Radio, Right, Left, Icon } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function AuthenticatedProfile() {
    return (
        <View style={styles.container}>
        <LinearGradient
        // Button Linear Gradient
        colors={['#a7ff83', '#17b978','#a7ff83']}
        style={styles.circle}>
        </LinearGradient>
        <LinearGradient
        // Button Linear Gradient
        colors={['#071a52','#071a52' , '#086972', '#17b978', '#a7ff83']}
        style={styles.circle2}>
        </LinearGradient>
        <Text style={styles.lostText}> Welcome to Profile Screen </Text>
       
      
        <View>
            <Thumbnail source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1200px-Gnome-stock_person.svg.png'}} style={styles.photo} />
        </View>
        <View>
            <Text style={styles.personText}> Name Surname </Text>
        </View> 
        <View>
            <Text style={styles.mailText}> Mail: examplemail@mail.com </Text>
        </View>
        <View>
            <Text style={styles.phoneText}> Phone: 0505 555 55 55 </Text>
        </View>  
        <View>   
                <TouchableOpacity style={styles.contBtn}>
                    <Text style={styles.continue}>Edit Profile</Text>
                </TouchableOpacity>
        
        </View>
        <View>   
            <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 16, top: -120}}> Posts </Text>
        </View>

        
        </View>
    );
}

const styles = StyleSheet.create({
    photo: {
        width: 100,
        height: 100,
        top: -240,
       
      },
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
      backgroundColor:"#000000",
      borderRadius:5,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:10
    },
    inputView2:{
        width:"80%",
        backgroundColor:"#000000",
        borderRadius:5,
        height:150,
        marginBottom:20,
        padding:10
      },
    inputText:{
      height:50,
      color:"white"
    },
    inputText2:{
        height:50,
        color:"white",
        top: -20
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
    imageBtn:{
        width:50,
        backgroundColor:"#ffffff",
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        
      },
    contBtn:{
        width:"50%",
        backgroundColor:"#a7ff83",
        borderRadius:25,
        height:35,
        alignItems:"center",
        justifyContent:"center",
        position: 'absolute',
        top: -190,
        left: -100
      },
    lostText:{
      color:"#ffffff",
      top: 0,
      fontSize: 20,
      position: "absolute",
      fontWeight: 'bold'
    },
    continue:{
        fontSize: 12,
        color:"#086972",
        fontWeight: 'bold'
    },
    personText:{
        fontSize: 18,
        color:"#ffffff",
        fontWeight: 'bold',
        top: -220
    },
    mailText:{
        fontSize: 14,
        color:"#ffffff",
        top: -200,
        left: -90
    },
    phoneText:{
        fontSize: 14,
        color:"#ffffff",
        top: -218,
        left: 100
    }
  });