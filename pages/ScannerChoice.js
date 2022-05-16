import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useContext } from "react";
import { EventContext } from "../EventProvider";

export default function ScannerChoice({ navigation }) {
  const { activities } = useContext(EventContext);
  const [localActivitie, setLocalActivitie] = useState();
  const { currentActivitie, setCurrentActivitie } = useContext(EventContext);

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
        <Picker
          selectedValue={currentActivitie}
          onValueChange={(itemValue, itemIndex) =>
            setCurrentActivitie(itemValue)
          }
        >
          {activities.map((activitie) => {
            return (
              <Picker.Item
                label={activitie.name}
                value={activitie._id}
                key={activitie._id}
              />
            );
          })}
        </Picker>
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
