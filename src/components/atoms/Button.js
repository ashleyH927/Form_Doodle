import { Text, View, StyleSheet, Pressable } from "react-native"

const Button = ({ children, onPress, disable }) => {
  return (
    <View>
      <Pressable
        disable={disable}
        style={({ pressed }) =>
          pressed ? [styles.eachButton, styles.pressed] : styles.eachButton
        }
        onPress={onPress}
      >
        <Text>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  // buttonContainer: {
  //   width: 16,
  //   height: 8,
  //   borderColor: "black",
  //   borderRadius: 4,
  //   borderWidth: 2,
  // },
  pressed: {
    opacity: 0.75,
  },
  buttonContainer: {
    // alignItems: "center",
    // justifyContent: "center",
    // marginBottom: 20,
    flexDirection: "row",
    borderRadius: 28,
    margin: 4,
  },
  eachButton: {
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "red",
    padding: 12,
    // margin: 10,
    // fontSize: 50,
    // height: 40,
    // width: 120,
    // alignItems: "center",
    // justifyContent: "center",
  },
})

export default Button
