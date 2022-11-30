import react from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTab() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 5,
        marginHorizontal: 5,
        justifyContent: "space-between",
        backgroundColor: "#eee",
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="shopping-cart" text="Cart" />
      <Icon icon="receipt" text="Orders" />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={20}
        style={{
          marginBottotm: 3,
          alignSelf: "center",
          color: "#a89a32",
        }}
      />

      <Text> {props.text} </Text>
    </View>
  </TouchableOpacity>
);
