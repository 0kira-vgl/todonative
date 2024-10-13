import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Feather";

interface ParticipantProps {
  title: string;
  onRemove: () => void;
}

export function Task({ title, onRemove }: ParticipantProps) {
  return (
    <View className="flex-row mb-2 bg-[#262626] p-4 rounded-md border border-[#333333] items-center min-h-20">
      <Pressable className="min-w-[1.125rem] h-[1.125rem] border-[none]">
        <View className="size-full rounded-full border-2 border-solid border-[#4ea8de]" />
      </Pressable>
      <Text className="text-white text-xl mx-5 flex-1">{title}</Text>
      <Pressable onPress={onRemove}>
        <Ionicons name="trash-2" size={20} color="#808080" />
      </Pressable>
    </View>
  );
}
