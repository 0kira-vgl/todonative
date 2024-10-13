import { Trash2 } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

interface ParticipantProps {
  title: string;
  onRemove: () => void;
}

export function Task({ title, onRemove }: ParticipantProps) {
  return (
    <View className="flex-row mb-2 bg-[#262626] p-4 rounded-md border border-[#333333] items-center min-h-20">
      <Pressable className="size-5">
        <View className="size-full rounded-full border-2 border-solid border-[#4ea8de]" />
      </Pressable>
      <Text className="text-white text-xl mx-5 flex-1">{title}</Text>
      <Pressable onPress={onRemove}>
        <Trash2 size={20} color="#808080" />
      </Pressable>
    </View>
  );
}
