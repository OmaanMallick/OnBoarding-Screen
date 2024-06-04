import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CustomButton({ title, handlePress, containerStyles, textStyles, isLoading }) {
  return (
    <TouchableOpacity 
      style={[styles.button, containerStyles]} 
      onPress={handlePress}
      disabled={isLoading} // Disable the button if it's loading
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    backgroundColor: 'red',
    borderRadius: 10,
    height: 53,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18
  }
});
