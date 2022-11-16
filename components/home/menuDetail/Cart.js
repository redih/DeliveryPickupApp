import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


export default function Cart({}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        // position: "absolute",
        bottom: 80,
        zIndex: 999,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "#a89a32",
            alignItems: "center",
            // flexDirection: "row",
            // justifyContent: "center",
            padding: 15,
            borderRadius: 50,
            width: 200,
            position: "relative",
          }}
        >
          <Text style={{ color: "black", fontSize: 15 }}> Cart </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
