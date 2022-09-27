import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Login(){
    return (
        <View style = {{marginTop: 15, marginLeft: 300, width: 500, alignItems: 'center' }}>

                  <GooglePlacesAutocomplete
                        placeholder='email address or ph no.'
                        styles={{
                              textInput: {                                    
                                    backgroundColor: "#eee",
                                    borderRadius: 20, 
                                    fontWeight: '700',
                                    marginTop: 7
                              },
                              textInputContainer: {
                                    backgroundColor: "#eee",
                                    borderRadius: 50,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginRight: 10
                              
                              },
                        }}

                  />
            </View>
      )
}