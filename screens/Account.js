import {React, components, useState} from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Button,
  TouchableOpacity,
  ScrollView,
  AppRegistry,
  KeyboardAvoidingView,
  StyleSheet, 
  Alert
  
} from "react-native";
import { auth } from "../firebase";
import {signOut} from "firebase/auth"
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account({ navigation }){
  const handleLogOut = () =>{
    signOut(auth).then(() => {
      console.log('Signed out')
      navigation.navigate("LoginBox")
      Alert.alert("You are signed out Please Login again. ")
    })
    .catch(error => alert(error.message))
   }

  return (
    <SafeAreaView> 
    <ScrollView>
       <Button style={{}} 
            title="Sign Out" 
            color="#a89a32"
            onPress={handleLogOut} 
            />
    </ScrollView>
    </SafeAreaView>
  )}






  


