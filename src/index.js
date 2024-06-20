import React, { useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { colors } from "../constants/color";
import Qr_scanner from "./qr_scanner";
import Report from "./report";

const Stack = createStackNavigator();

export default function Source() {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        width: "100%",
        backgroundColor: colors.background,
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="qrscanner" component={Qr_scanner} />
        <Stack.Screen name="report" component={Report} />
      </Stack.Navigator>
    </View>
  );
}
