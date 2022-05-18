import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useContext } from "react";
import { EventContext } from "../EventProvider";

export default function AccessGranted({ navigation: { goBack } }) {
  const { currentAttendee } = useContext(EventContext);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>CONFIRME</Text>
        </View>
        <View>
          <Text style={styles.subtitleText}>Identité du participant</Text>
          <Text style={styles.simpleText}>
            Prénom : {currentAttendee.surname}
          </Text>
          <Text style={styles.simpleText}>Nom : {currentAttendee.name}</Text>
        </View>
        <View>
          <Text style={styles.subtitleText}>Rôle du participant: </Text>
          <Text style={styles.simpleText}>{currentAttendee.role.name}</Text>
        </View>
        <View>
          <Text style={styles.subtitleText}>Activité du participant : </Text>
          {currentAttendee.extra_activities.map((activitie) => (
            <Text style={styles.simpleText} key={Math.random()}>
              {activitie.name}
            </Text>
          ))}
        </View>
        <TouchableOpacity onPress={() => goBack()} style={styles.button}>
          <Text style={styles.textButton}>Retour</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "black",
  },

  resultContainer: {
    backgroundColor: "green",
    padding: 50,
    borderRadius: 10,
    marginBottom: 100,
  },

  resultText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },

  subtitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
  },

  simpleText: {
    color: "white",
    marginBottom: 10,
  },

  textButton: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
    padding: 10,
    marginLeft: 20,
    borderRadius: 10,
    width: "50%",
    alignItems: "center",
  },
});
