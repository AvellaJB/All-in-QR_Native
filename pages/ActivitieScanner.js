import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import servicesAPI from "../api/servicesAPI";
import { useContext } from "react";
import { EventContext } from "../EventProvider";
import { useIsFocused } from "@react-navigation/native";

export default function ActivitieScanner({ navigation }) {
  const { currentActivitie } = useContext(EventContext);
  const { setCurrentAttendee } = useContext(EventContext);
  const isFocused = useIsFocused();

  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    let result = data.slice(1, -1);
    servicesAPI.checkEntrance(result).then((res) => {
      setCurrentAttendee(res);
      let extraIDs = res.extra_activities.map((activitie) => activitie._id);
      servicesAPI.listActivitiesByRoleID({ id: res.role._id }).then((res) => {
        let roleActivites = res.data.map((activitie) => activitie._id);
        let combined = extraIDs.concat(roleActivites);
        const found = combined.some((element) => element === currentActivitie);
        if (found === true) {
          navigation.navigate("AccessGranted");
        } else {
          navigation.navigate("AccessDenied");
        }
      });
    });
  };

  if (hasPermission === null) {
    return <Text>Requestion for camera persommission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {isFocused ? (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      ) : (
        <Text>Lol</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "black",
  },

  scanAgain: {
    flex: 1,
  },
});
