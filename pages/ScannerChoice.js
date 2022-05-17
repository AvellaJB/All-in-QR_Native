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
  const { activities, event } = useContext(EventContext);
  const { currentActivitie, setCurrentActivitie } = useContext(EventContext);

  return (
    <View style={styles.container}>
      <View style={styles.secondary}>
        <View style={styles.topText}>
          <Text style={styles.welcomeText}>Bienvenue sur l'évènement</Text>
          <Text style={styles.eventText}>{event.name}</Text>
          <Text style={styles.codeText}>Code: {event._id}</Text>
        </View>
        <Text style={styles.textColor}>
          Merci de sélectionner quel scanner vous souhaitez utiliser sur
          l'évènement.
        </Text>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate("EntranceScanner")}
        >
          <Text style={styles.textButton}>Scanner l'entrée</Text>
        </TouchableOpacity>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={currentActivitie}
            dropdownIconColor="white"
            dropdownIconRippleColor="white"
            style={styles.picker}
            prompt="Choisir une activité"
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
        </View>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("ActivitiesScanner")}
        >
          <Text style={styles.textButton}>Scanner cette activité</Text>
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
    backgroundColor: "black",
  },

  topText: {
    marginBottom: 70,
    marginLeft: 20,
    marginRight: 20,
  },

  welcomeText: {
    fontSize: 25,
    color: "#565656",
    fontWeight: "bold",
  },

  eventText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },

  codeText: {
    fontSize: 12,
    color: "#565656",
    fontWeight: "bold",
  },

  textColor: {
    color: "white",
    margin: 20,
    fontSize: 15,
  },

  picker: {
    backgroundColor: "#202020",
    color: "white",
  },

  pickerContainer: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  button1: {
    padding: 15,
    borderWidth: 2,
    backgroundColor: "white",
    margin: 20,
    borderRadius: 10,
  },

  button2: {
    padding: 15,
    borderWidth: 2,
    backgroundColor: "white",
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },

  textButton: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
});
