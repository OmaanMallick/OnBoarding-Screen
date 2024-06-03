import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SplashScrn() {
  return (
    <View style={styles.conatiner}>
      <View>
        <ImageBackground source={require('../assets/images/cars.jpg')}
        style={
            {height:'100%',
             width:'100%',           
             }}
        resizeMode='cover'>
            
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})