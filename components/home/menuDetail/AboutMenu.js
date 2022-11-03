import React from "react";
import { View, Text, Image } from "react-native";

const image =
  "https://images-gmi-pmc.edge-generalmills.com/54d32041-4035-440a-9a16-4a4373344537.jpg";

const title = "Appetizers";

const description = "Mexican Appetizers with Seasoning Mix ~ $ ~ 4.6 ( 500+ )";
export default function AboutMenu(props) {
  
  return (
    <View>
      <MenuImage image={image} />
      <MenuTitle title={title} />
      <MenuDescription description={description} />
    </View>
  );
}

const MenuImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const MenuTitle = (props) => (
  <Text
    style={{
      fontSize: 30,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 20,
    }}
  >
    {props.title}
  </Text>
);

const MenuDescription = (props) => (
  <Text
    style={{
      fontWeight: "300",
      marginTop: 10,
      marginHorizontal: 20,
      fontSize: 15,
    }}
  >
    {props.description}
  </Text>
);
