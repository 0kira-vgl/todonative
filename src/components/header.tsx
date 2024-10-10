import { View, Image } from "react-native";

export function Header() {
  return (
    <View className="bg-black h-52 flex items-center justify-center">
      <Image source={require("../../assets/logo.png")} />
    </View>
  );
}
