import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native";

const image =
  "https://media.discordapp.net/attachments/1011779060592033812/1014291034668290080/download_6.png";
export default function LoginBox({ navigation }) {
  //   const pressHandler = () => {
  //     navigation.navigate("Home");
  //   };

  return (
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
          id="email"
          style={{
            height: 45,
            width: "45%",
            borderColor: "black",
            borderWidth: 2,
            width: "100%",
          }}
          // Adding hint in TextInput using Placeholder option.
          placeholder=" Enter Your username/email"

          // Making the Under line Transparent.
        />
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          {"\n"}
          Password:
        </Text>
        <TextInput
          id="pass"
          style={{
            height: 45,
            width: "45%",
            borderColor: "black",
            borderWidth: 2,
            width: "100%",
          }}
          // Adding hint in TextInput using Placeholder option.
          placeholder=" Enter Your Password"
          secureTextEntry={true}
        />
        <Text>{"\n"}</Text>
        {/* // <Button style={{}} title="Lets Dig In" onPress={pressHandler} /> */}
        <Text>{"\n"}</Text>
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
          <Button
            onPress={() => navigation.navigate("Home")}
            style={{}}
            title="Sign in"
            color="#a89a32"
          />
          <Text>{"\n"}</Text>
          <Button style={{}} title="Forgot Password" color="#a89a32" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
