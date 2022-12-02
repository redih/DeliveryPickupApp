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
  Alert,
} from "react-native";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect } from "react";

const image =
  "https://media.discordapp.net/attachments/1011779060592033812/1014291034668290080/download_6.png";

export default function LoginBox({ navigation }) {
  const [email, setEmail] = useState("");
  const [pwd, setpwd] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    navigation.navigate("CreateAccount");
  };

  const handleLoginin = () => {
    signInWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Succesfully logged in with: ", user.email);
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
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
            onChangeText={(text) => setEmail(text)}

            // Making the Under line Transparent.
          />

          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {"\n"}
            Password:
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
            placeholder=" Enter Your Password"
            value={pwd}
            secureTextEntry={true}
            onChangeText={(text) => setpwd(text)}
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
              <Button
                style={{}}
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
