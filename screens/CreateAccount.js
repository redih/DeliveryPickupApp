import { React, components, useState } from "react";
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
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";



const image =
  "https://media.discordapp.net/attachments/1011779060592033812/1014291034668290080/download_6.png";


export default function LoginBox({ navigation }) {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const [Pwd, setPwd] = useState("");
  const [ConfirmPwd, setConfirmPwd] = useState("");
  

  const handleCreateAccount = () => {
    if(Pwd == ConfirmPwd){
    createUserWithEmailAndPassword(auth, email, Pwd)
      .then((userCredential) => {
        
        const user = userCredential.user;
        console.log("Registered logged in with: ", user.email);
        updateProfile(auth.currentUser, {
            displayName : FirstName + " " + LastName

        }).then(() => {
            console.log("Registered logged in with: ", user.email);


           // navigation.navigate("LoginBox");
        }).catch((error) => alert(error.message));
      })
    
      .catch((error) => alert(error.message));
  }
    else{
        Alert.alert("Password does not match try again")
    }    
};


  return (
    <SafeAreaView>
    <ScrollView>
      <ImageBackground
        alignItems="center"
        source={{ uri: image }}
        blurRadius={10}
        backgroundPosition="center"
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            paddingLeft: 5,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            Create Account
            {"\n"}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>First Name:</Text>

          <TextInput
            style={{

              height: 45,
              width: "45%",
              borderColor: "black",
              borderWidth: 2,
              width: "100%",
            }}
            Value={FirstName}
            // Adding hint in TextInput using Placeholder option.
            placeholder={"First Name"}
            onChangeText={(text) => setFirstName(text)}
            
           
            

            // Making the Under line Transparent.
          />
          
          <Text>{"\n"}</Text>


            <Text style={{ fontWeight: "bold", fontSize: 20 }}>last Name:</Text>


                    <TextInput
            style={{

              height: 45,
              width: "45%",
              borderColor: "black",
              borderWidth: 2,
              width: "100%",
            }}
            Value={LastName}
            // Adding hint in TextInput using Placeholder option.
            placeholder={"Last Name"}
            onChangeText={(text) => setLastName(text)}

            // Making the Under line Transparent.
          />
          <Text>{"\n"}</Text>
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
            placeholder={"Email"}
            onChangeText={(text) => setEmail(text)}
            />
            <Text>{"\n"}</Text>

            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Create Password</Text>

            <TextInput
            style={{

                height: 45,
                width: "45%",
                borderColor: "black",
                borderWidth: 2,
                width: "100%",
            }}
            Value={Pwd}
            // Adding hint in TextInput using Placeholder option.
            placeholder={"Create PassWord"}
            secureTextEntry={true}
            onChangeText={(text) => setPwd(text)}
            />
            <Text>{"\n"}</Text>

          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {"\n"}
            Confirm Password:
          </Text>
          <TextInput
            style={{
              height: 45,
              width: "45%",
              borderColor: "black",
              borderWidth: 2,
              width: "100%",
            }}
            // Adding hint in TextInput using Placeholder option.
            placeholder=" Confirm Password:"
            value={ConfirmPwd}
            secureTextEntry={true}
            onChangeText={(text) => setConfirmPwd(text)}
          />
          <Text>{"\n"}</Text>
          {/* // <Button style={{}} title="Lets Dig In" onPress={pressHandler} /> */}
          <Text>{"\n"}</Text>
          <View>
            <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
              <Button style={{}} 
              title="Create Account" 
              color="#a89a32"
              onPress = {handleCreateAccount}
               />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
    </SafeAreaView>
  );
}

