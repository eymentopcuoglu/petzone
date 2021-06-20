import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Content, ListItem, Radio, Right, Left, Icon } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function EditProfileScreen() {

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
        <Text style={styles.lostText}> Edit Profile </Text>
       
        <View style={styles.inputViewName}>
        <View style={styles.inputViewSmall}>
            <TextInput
                        style={ styles.inputText }
                        placeholder="Name:"
                        placeholderTextColor="#000000"
                        // onChangeText={ text => setState({ email: text }) }
                    />
        </View>

        <View style={styles.inputViewSmall}>
            <TextInput
                        style={ styles.inputText }
                        placeholder="Surname:"
                        placeholderTextColor="#000000"
                        // onChangeText={ text => setState({ email: text }) }
                    />
        </View>
        </View>

        <View style={styles.inputView}>
            <TextInput
                        style={ styles.inputText }
                        placeholder="Phone Number:"
                        placeholderTextColor="#000000"
                        // onChangeText={ text => setState({ email: text }) }
                    />
        </View>

        <TouchableOpacity style={ styles.imageBtn }>
             <Icon name='image' />
        </TouchableOpacity>

        <TouchableOpacity style={ styles.contBtn }>
                    <Text>Change Password</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={ styles.loginBtn }>
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
    logo:{
      width: 240,
      height: 194,
      position: 'absolute',
      top: -200
    },
    inputView:{
      width:"80%",
      backgroundColor:"#ffffff",
      borderRadius:5,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:10
    },
    inputViewSmall:{
      width: 158,
      backgroundColor:"#ffffff",
      borderRadius:5,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:10
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
    inputView2:{
        width:"80%",
        backgroundColor:"#ffffff",
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
        color:"black",
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
        height:50,
        alignItems:"center",
        justifyContent:"center",
        top: 20
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
    notifyButton: {
        alignItems: "center",
        justifyContent: 'center',
        width: 135,
        height: 45,
        borderRadius: 23,
        backgroundColor: '#071a52',
        marginTop: 50
    },
  });
