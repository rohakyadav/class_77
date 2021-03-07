import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import db from '../config'
import firbase from 'firbase'
export default class WelcomeScreen extends Component{
    constructor(){
        super()
        this.state={
            emailId: '',
            password: '',
        }
    }
    userSignUp=(emailId,password)=>{
        firebase.auth().creatUserWithEmailAndPassword(emailId,password).then((Response)=>{
            return alert("user added successfully")
        }).catch(function(error){
            var errorCode= error.code 
            var errorMessage=error.message
            return alert(errorMessage)
        })
    }
    render(){
    return(
    <View style={Styles.container}>
        <View>
        <Text style={Styles.title}>
            Book Santa
        </Text>

        </View>
        <View>
            <TextInput style= {styles.loginBox}
            placeholder="abc@example.com"
            keyboardType='email.address'
            onChangeText={(text)=>{
                this.setState({
                    emailId:text
                })
            }}/>
                 <TextInput style= {styles.loginBox}
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(text)=>{
                this.setState({
                    password:text
                })
            }}/>
        </View>
        
    </View>
    )  
    }
}