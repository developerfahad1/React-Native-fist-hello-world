import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  // alert('fahad');
  return (
    <>
    <View style={{
      backgroundColor: "red",
      flex: 1,
      justifyContent : "center",
      alignItems: "center"
    }}>
     
      <Text style={{
        color : "white",
        fontSize: 30
      }}>Home</Text>
      <Link href={'about'} style={{
        fontSize : 20
      }}>About</Link>

      <Link href={'contact'} style={{
        fontSize : 20
      }}>Contact</Link>

      <Link href={'services'} style={{
        fontSize : 20
      }}>Services</Link>

   
      
    </View>
    </>
  )
}

export default index