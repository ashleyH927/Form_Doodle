import { View, TextInput, StyleSheet } from "react-native"
import { useState } from "react"
// interface props {
//   placeholder: String,
//   value: String,

// }

const Input = ({ placeholder, onChangeText, value }) => {
  return (
    <View>
      <TextInput
        style={styles.textContainer}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "white",
    width: 210,
    height: 60,
    borderColor: "black",
    borderWidth: 4,
    textAlign: "left",
    padding: 12,
    fontSize: 18,
    margin: 12,
  },
})

export default Input
