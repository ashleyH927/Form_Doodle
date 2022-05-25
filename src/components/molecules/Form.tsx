import { useState } from "react"
import { Alert, StyleSheet, Text, View } from "react-native"
import Button from "../atoms/Button"
import Input from "../atoms/Input"

const Form = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verifyPassword: "",
  })

  const [password, setPassword] = useState("")
  const [verifyPassword, setVerifyPassword] = useState("")
  console.log(password, verifyPassword)

  // const handleChange = (e) => {
  //   console.log(e.target.value)
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   })
  // }
  // tried localecompare but it did not work
  function comparePasswords() {
    if (values.password === values.verifyPassword) {
      console.log("Submitted")
    } else if (values.password !== values.verifyPassword) {
      console.log("You have entered a different password.")
    } else {
      console.log("Something went wrong")
    }
  }

  // Buttons logic
  function submitHandler(values: { password: any; verifyPassword: any }) {
    if (values.password !== values.verifyPassword) {
      Alert.alert("Your passwords do not match", "Please try again")
    }
    console.log("Submit worked!")
  }

  // function cancelHandler() {
  //   //set the values back to ""
  // }

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Please fill out the form below to enter the contest.
        </Text>
      </View>

      <View style={styles.formContainer}>
        <Input
          value={values.firstName}
          onChangeText={(text: string) =>
            setValues({ ...values, firstName: text })
          }
          placeholder="First Name"
        />
        <Input
          value={values.lastName}
          onChangeText={(text: string) =>
            setValues({ ...values, lastName: text })
          }
          placeholder="Last Name"
        />
        <Input
          value={values.email}
          onChangeText={(text: string) => setValues({ ...values, email: text })}
          placeholder="Email"
        />
        <Input
          value={values.password}
          onChangeText={(text: string) =>
            setValues({ ...values, password: text })
          }
          placeholder="Password"
        />
        <Input
          value={values.verifyPassword}
          onChangeText={(text: string) =>
            setValues({ ...values, verifyPassword: text })
          }
          placeholder="Verify Password"
        />
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.eachButton}>
          <Button disable={false} onPress={comparePasswords}>
            Reset
          </Button>
        </View>
        <View style={styles.eachButton}>
          <Button
            disable={values.password === values.verifyPassword}
            onPress={comparePasswords}
          >
            Submit
          </Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    marginTop: 10,
    alignItems: "center",
    paddingVertical: 3,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 24,
  },
  formContainer: {
    margin: 36,
    alignItems: "center",
    // flex: 6,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    // marginBottom: 20,
  },
  eachButton: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
    marginRight: 12,
  },
  // eachButton: {
  //   borderColor: "black",
  //   borderWidth: 2,
  //   margin: 10,
  //   fontSize: 50,
  //   height: 40,
  //   width: 120,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
})

export default Form
