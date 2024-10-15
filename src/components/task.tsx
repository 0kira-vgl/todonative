import { CircleCheck, Trash2 } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { Tasks } from "../screens/Home";

interface TaskProps {
  task: Tasks;
  onRemove: () => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onRemove, onComplete }: TaskProps) {
  return (
    <View className="flex-row mb-2 bg-[#262626] p-4 rounded-md border border-[#333333] items-center min-h-20">
      <Pressable onPress={() => onComplete(task.id)} className="size-5">
        {task.isCompleted ? (
          <CircleCheck size={18} color="#8284fa" />
        ) : (
          <View className="size-5 rounded-full border-2 border-solid border-[#4ea8de]" />
        )}
      </Pressable>

      <Text
        className={
          task.isCompleted
            ? "text-[#808080] line-through text-xl mx-5 flex-1"
            : "text-[#f2f2f2] text-xl mx-5 flex-1"
        }
      >
        {task.title}
      </Text>
      <Pressable onPress={onRemove}>
        <Trash2 size={20} color="#808080" />
      </Pressable>
    </View>
  );
}
