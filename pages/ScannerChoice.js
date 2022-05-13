import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

export default function ScannerChoice({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.secondary}>
        <Text>Bienvenue sur l'évènement</Text>
        <Text>EVENTFROMDB</Text>
        <Text>Code: CODEFROMDB</Text>
        <Text>Vous souhaitez?</Text>
        <Text>
          Merci de sélectionner quel scanner vous souhaitez utiliser sur
          l'évènement.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("EntranceScanner")}
        >
          <Text>Scanner l'entrée</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ActivitiesScanner")}
        >
          <Text>Scanner cette activité</Text>
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

  button: {
    padding: 10,
    borderWidth: 2,
  },
});
