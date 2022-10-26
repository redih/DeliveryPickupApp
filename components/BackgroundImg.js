import React from 'react';
import { Text, View, TextInput, ImageBackground, 
    StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
  
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
  
const BackgroundImg = () => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: 
'https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3.png',
        }}
        resizeMode="stretch"
        style={styles.img}>
      </ImageBackground>
    </View>
  );
};

export default function BackgroundImg() {

    return 
    <SafeAreaView>
        <BackgroundImg/>


        </SafeAreaView>

    
}