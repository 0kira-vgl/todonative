import { View, Text } from "react-native";
import { Task } from "../screens/Home";

interface ProgressCounterProps {
  taskCreate: () => Task[]; // agora retorna Task[]
}

export function ProgressCounter({ taskCreate }: ProgressCounterProps) {
  const tasks = taskCreate(); // chamando a função para obter as tarefas
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <View className="flex-row -translate-y-4 items-center justify-between mb-4">
      <View className="flex-row gap-[0.8rem] items-center">
        <Text className=" text-[#4EA8DE] text-lg font-bold">Criadas</Text>
        <View className="bg-[#333333] p-1 px-[9px] py-[3px] rounded-full">
          <Text className="text-[0.75rem] text-[#d9d9d9] font-bold">
            {tasks.length}
          </Text>
        </View>
      </View>

      <View className="flex-row gap-[0.8rem] items-center">
        <Text className="text-[#8284FA] text-lg font-bold">Concluídas</Text>
        <View className="bg-[#333333] p-1 px-[9px] py-[3px] rounded-full">
          <Text className="text-[0.75rem] text-[#d9d9d9] font-bold">
            {completedTasks} de {tasks.length}
          </Text>
        </View>
      </View>
    </View>
  );
}
