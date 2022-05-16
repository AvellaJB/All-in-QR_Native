import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import ActivitieScanner from "./pages/ActivitieScanner";
import EntranceScanner from "./pages/EntranceScanner";
import ScannerChoice from "./pages/ScannerChoice";
import AccessDenied from "./pages/AccessDenied";
import AccessGranted from "./pages/AccessGranted";
import EventProvider from "./EventProvider";

const Stack = createStackNavigator();

export default function App() {
  return (
    <EventProvider>
      <NavigationContainer>
        <Stack.Navigator style={styles.container}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ScannerChoice" component={ScannerChoice} />
          <Stack.Screen name="ActivitiesScanner" component={ActivitieScanner} />
          <Stack.Screen name="EntranceScanner" component={EntranceScanner} />
          <Stack.Screen name="AccessGranted" component={AccessGranted} />
          <Stack.Screen name="AccessDenied" component={AccessDenied} />
        </Stack.Navigator>
      </NavigationContainer>
    </EventProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
