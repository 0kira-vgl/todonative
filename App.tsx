import "./global.css";
import { StatusBar, View } from "react-native";
import { Home } from "./src/screens/Home";
import { Header } from "./src/components/header";

export default function App() {
  return (
    <View className="bg-zinc-800">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <Home />
    </View>
  );
}
