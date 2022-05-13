import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.secondary}>
        <Text>LOGO</Text>
        <Text>
          Renseignez votre code évènement pour commencer à scanner vos
          participants.
        </Text>
        <TextInput style={styles.inputText} placeholder="Code Evènement" />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ScannerChoice")}
        >
          <Text>Suivant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 30,
  },

  button: {
    padding: 10,
    borderWidth: 2,
  },
});
