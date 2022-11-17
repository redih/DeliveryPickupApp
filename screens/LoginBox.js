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
  StyleSheet
  
} from "react-native";
import { auth } from "../firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import { useEffect } from "react";




// constructor(props) {  
//   super(props);  
//   this.state = {text: ''};  
// }



const image =
  "https://media.discordapp.net/attachments/1011779060592033812/1014291034668290080/download_6.png";









// const LoginBox = () => {

//   const[email, setEmail]= useState('')
//   const[pwd, setpwd]= useState('')


//   return (
//     <KeyboardAvoidingView
//     style = {styles.container}
//     behavior = "padding"
//     >
//       <View style = {styles.inputContainer}>
//         <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText = {text =>setEmail(text) }
//           style = {styles.input}        
        
//         />


//         <TextInput
//           placeholder="PassWord"
//           value={pwd}
//           onChangeText = {text => setpwd(text)}
//           style = {styles.input}  
//           secureTextEntry   
        
//         />
//       </View>

//       <View style = {styles.buttonContainer}>
//         <TouchableOpacity
//         onPress={() => { }}
//         style = {styles.button}>
//         <Text style = {styles.button}>Login
//         </Text>
//         </TouchableOpacity>



//         <TouchableOpacity
//         onPress={() => { }}
//         style = {[styles.button, styles.buttonOutline]}>
//         <Text style = {styles.buttonOutlineText}>Register
//         </Text>
//         </TouchableOpacity>
//       </View>


//       <Text>
//         Login Screen
//       </Text>

//       </KeyboardAvoidingView>
//   ) 

// }
// export default LoginBox




export default function LoginBox ({ navigation }) {

   const[email, setEmail]= useState('')
   const[pwd, setpwd]= useState('')

   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user =>{
      if (user) {
        navigation.navigate("Home")
      }

    })
    return unsubscribe

   },[])

   const handleSignUp = () =>{
    
    createUserWithEmailAndPassword(auth,email,pwd)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Regestered logged in with: ',user.email)
    })
    .catch(error => alert(error.message))
   }

   const handleLoginin = () =>{
    
    signInWithEmailAndPassword(auth, email, pwd)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Succesfully logged in with: ',user.email)
      
      navigation.navigate("Home")

    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });





   }


  
 


  return (
    <ScrollView>
    <ImageBackground
      alignItems="center"
      source={{ uri: image }}
      blurRadius={1}
      backgroundPosition="center"
      style={{ width: "100%", height: "100%" }}
    >
      
      <View
        style={{
          paddingLeft: 5,
          marginTop: 180,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Welcome to our store
          {"\n\n"}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Email:</Text>
        

        <TextInput
          style={{
            height: 45,
            width: "45%",
            borderColor: "black",
            borderWidth: 2,
            width: "100%",
          
          }}
          
          Value={email}
          // Adding hint in TextInput using Placeholder option.
          placeholder={" Enter Your username/email"}
           onChangeText = {text =>setEmail(text) } 
          
          

          // Making the Under line Transparent.
        />
        
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          {"\n"}
          Password:
        </Text>
        <TextInput style = {{
            height: 45,
            width: "45%",
            borderColor: "black",
            borderWidth: 2,
            width: "100%",


        }}          
          // Adding hint in TextInput using Placeholder option.
          placeholder=" Enter Your Password"
          value={pwd}
          secureTextEntry={true}
          onChangeText = {text => setpwd(text)} 
          
        />
        <Text>{"\n"}</Text>
        {/* // <Button style={{}} title="Lets Dig In" onPress={pressHandler} /> */}
        <Text>{"\n"}</Text>
        <View>
          <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            <Button
              onPress={handleLoginin}
              style={{}}
              title="Sign in"
              color="#a89a32"
            />
            <Text>{"\n"}</Text>
            <Button style={{}} title="Forgot Password" color="#a89a32" />
            <Text>{"\n"}</Text>
            <Button style={{}} 
            title="Sign Up" 
            color="#a89a32"
            onPress={handleSignUp} 
            />
            

            
           
            
            
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
    </ScrollView>
  );
}





// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'

//   },
//   inputContainer:{
//     width:"80%"

//   },
//   input:{
//     backgroundColor: "white",
//     paddingHorizontal:15,
//     paddingVertical: 10,
//     borderradius: 10,
//     marginTop: 5,
//   },
//   buttonContainer:{
//     width:"60%",
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 40,
//   },
//   button:{
//     backgroundColor: '#0782F9',
//     width:'100%',
//     padding:15,
//     borderRadius:10,
//     alignItems:'center',


//   },
//   buttonOutline:{
//     borderColor:'white',
//     marginTop:5,
//     borderColor: '#0782f9',
//     borderWidth:2,



//   },
//   buttonText:{
//     color:'white',
//     fontWeight:'700',
//     fontSize:16,

//   },
//   buttonOutlineText:{
//     color:'#0782f9',
//     fontWeight: '700',
//     fontSize:16,


//   }



// })

