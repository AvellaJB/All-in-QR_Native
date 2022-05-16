import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import servicesAPI from "../api/servicesAPI";
import { useContext } from "react";
import { EventContext } from "../EventProvider";

export default function ActivitieScanner({ navigation }) {
  const { currentActivitie } = useContext(EventContext);

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    let result = data.slice(1, -1);
    servicesAPI.checkEntrance(result).then((res) => {
      let extraIDs = res.extra_activities.map((activitie) => activitie._id);
      const found = extraIDs.some((element) => element === currentActivitie);
      if (found === true) {
        navigation.navigate("AccessGranted");
      } else {
        navigation.navigate("AccessDenied");
      }
    });
    setScanned(true);
  };

  if (hasPermission === null) {
    return <Text>Requestion for camera persommission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button
          title={"Tap to scan again"}
          onPress={() => setScanned(false)}
          style={styles.scanAgain}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  scanAgain: {
    flex: 1,
  },
});
