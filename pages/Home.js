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
    servicesAPI.getOneEvent(data.eventID).then((res) => {
      setEvent(res);
      navigation.navigate("ScannerChoice");
    });
  };

  return (
    <View style={styles.formcontainer}>
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
            onChangeText={onChange}
            value={value}
            placeholder="Code évènement."
          />
        )}
        name="eventID"
      />

      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  inputText: {
    borderWidth: 2,
    width: "90%",
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },

  button: {
    backgroundColor: "#fff",
    color: "black",
    borderWidth: 2,
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
});
