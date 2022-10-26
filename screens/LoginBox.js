import React, { useState } from 'react'
import { Component } from 'react'
import { View, Text,  ImageBackground, Button, Image } from 'react-native'
import { TextInput, } from 'react-native'








export default function LoginBox ({navigation, props})   { 

    const [name, setName] = useState('');
    const[pass, setPass] = useState('');

    
    const pressHandler = () => {
        navigation.navigate('Home');


    }




     



    return(
        <ImageBackground    
        alignItems = "center"
            
        source={require("../assets/images/logo.png")}
        blurRadius={10}
        backgroundPosition = "center"
        > 
        <View
            style = {{

                //alignItems: "center",
                paddingLeft: 10,
                marginTop: 125,
                // backgroundImage: `url(${image})` ,
                // backgroundPosition:'top',
                // backgroundRepeat: "no-repeat",
            }}
            >
            
                 
            <Text 
            style = {{
                fontWeight: 'bold',
                fontSize: 30
                
            }} >

            Welcome to our store  
            {"\n\n"}  
            </Text>
            
            <Text style = {{fontWeight: 'bold', fontSize: 20}}>
                Email: 
                
            </Text>
            
            <TextInput
                id = "email"
                style={{height: 45,width: "45%",borderColor: "gray",borderWidth: 2,width: "95%"}}
                // Adding hint in TextInput using Placeholder option.
                placeholder=" Enter Your username/email"    
                onChangeText={ (val) => setName(val)}   
                      
                // Making the Under line Transparent.
                

                
            />
            <Text style = {{fontWeight: 'bold', fontSize: 20}}>
            {"\n"}
            
                Password:
                          
            </Text>
            <TextInput
                id = "pass"
                style={{height: 45,width: "45%",borderColor: "gray",borderWidth: 2, width: "90%"}}
                // Adding hint in TextInput using Placeholder option.
                placeholder=" Enter Your Password"          
                secureTextEntry={true}
            />
            <Text>
            {"\n"}         
            </Text>
            <Button
                style = {{
                    
                }}
                
                title = "Lets Dig In"
                onPress={pressHandler}
            />
            <Text>
            {"\n"}         
            </Text>

            <Button
                style = {{
                    
                }}
                title = "Sign me up"
            />
            <Text>
            {"\n"}         
            </Text>

            <Button
                style = {{
                    
                }}
                title = "Forgot Password"
            />

        </View>
        </ImageBackground>    
       );      
}



      
    




