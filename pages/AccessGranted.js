import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useContext } from "react";
import { EventContext } from "../EventProvider";

export default function AccessGranted() {
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
});
