import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { height } from "react-native-dimension";
import axios from "axios";

export default function Report({ route, navigation }) {
  const { data } = route.params;

  const qr_id = data.split('.')[0];

  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      axios
        .post(`https://elton.donaldtz.com/api/send_fault_report/${qr_id}`, {
          description: text,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          setText("");
          navigation.navigate("qrscanner");
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View className="flex flex-1 w-full pt-16 justify-center items-center">
      <Text className="text-center font-bold">Fill Report</Text>
      
      <TouchableOpacity onPress={()=>Keyboard.dismiss()}>
        <Text>dismis keyboard</Text>
      </TouchableOpacity>

      <Text className="text-center font-bold">{qr_id}</Text>

      <View className="p-8 w-full">
        <TextInput
          label="Fill form details"
          value={text}
          onChangeText={(text) => setText(text)}
          multiline={true}
          height={height(50)}
        />
      </View>

      <TouchableOpacity>
        <Button mode="contained" onPress={handleSubmit}>
          Submit form
        </Button>
      </TouchableOpacity>
    </View>
  );
}