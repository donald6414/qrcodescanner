import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import Source from "./src";
import { PaperProvider, Provider } from "react-native-paper";
import { colors } from "./constants/color";
import { MyProvider } from "./hooks/context_provider";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    TwemojiMozilla: require("./assets/font/Poppins-Bold.ttf"),
    "Lato-Bold": require("./assets/font/Lato-Bold.ttf"),
    "Josefin-Bold": require("./assets/font/JosefinSans-Bold.ttf"),
    "Poppins-Regular": require("./assets/font/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/font/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 justify-around flex-col">
        <Text>text</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <PaperProvider>
        <MyProvider>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.background,
            }}
          >
            <Source />
          </View>
        </MyProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}
