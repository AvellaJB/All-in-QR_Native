import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import servicesAPI from "../api/servicesAPI";
import { useForm, Controller } from "react-hook-form";
import { useContext } from "react";
import { EventContext } from "../EventProvider";

export default function Home({ navigation }) {
  const { setEvent } = useContext(EventContext);
  const { setActivities } = useContext(EventContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      eventID: "",
    },
  });
  const onSubmit = (data) => {
    servicesAPI.listActivities(data.eventID).then((res) => {
      setActivities(res);
    });
    servicesAPI.getOneEvent(data.eventID).then((res) => {
      setEvent(res);
      navigation.navigate("ScannerChoice");
    });
  };

  return (
    <View style={styles.formcontainer}>
      <View>
        <Text style={styles.text}>
          Renseignez votre code évènement pour commencer à scanner vos
          participants
        </Text>
      </View>
      {errors.firstName && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputText}
            onBlur={onBlur}
            placeholderTextColor="white"
            onChangeText={onChange}
            value={value}
            placeholder="Code évènement."
          />
        )}
        name="eventID"
      />

      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text style={styles.textButton}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formcontainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },

  inputText: {
    borderWidth: 2,
    borderColor: "white",
    width: "90%",
    padding: 10,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 15,
    marginRight: 20,
    color: "white",
    backgroundColor: "#202020",
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

  textButton: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },

  text: {
    color: "white",
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
  },
});
