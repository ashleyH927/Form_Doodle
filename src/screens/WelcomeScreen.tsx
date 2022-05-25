import { Image, StyleSheet, Text, View } from "react-native"
import Button from "../components/atoms/Button"

function WelcomeScreen({ navigation }) {
  function pressHandler() {
    navigation.navigate("Form")
  }

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Welcome to Im2Lazy Delivery Service</Text>
      <View style={styles.lessTextContainer}>
        <Text style={styles.lesserText}>
          We deliver your food, with a good attitude
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/carRide.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button disable={false} onPress={pressHandler}>
          Click Here to Begin
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
  },
  titleText: {
    textAlign: "center",
    fontSize: 65,
    color: "blue",
    marginBottom: 12,
  },
  image: {
    width: 200,
    height: 200,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "baseline",
    marginTop: 24,
  },
  lessTextContainer: {
    alignItems: "center",
  },
  lesserText: {
    fontSize: 40,
    color: "red",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 12,
  },
})

export default WelcomeScreen
