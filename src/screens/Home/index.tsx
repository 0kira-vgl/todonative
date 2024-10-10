import { View, TextInput, Pressable, Text } from "react-native";

export function Home() {
  return (
    <View className="items-center h-full">
      <View className="flex-row gap-2.5 p-4 -translate-y-12">
        <TextInput
          placeholder="Adicione uma nova tarefa"
          className="h-16 flex-1 p-4 text-zinc-50 text-xl bg-[#262626] border border-black rounded-md"
          placeholderTextColor="#808080"
        />

        <Pressable className="size-16 rounded-md bg-[#1E6F9F] flex items-center justify-center">
          <Text className="text-white text-2xl">+</Text>
        </Pressable>
      </View>
    </View>
  );
}
