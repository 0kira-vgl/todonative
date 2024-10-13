import { View, Text } from "react-native";

export function ProgressCounter() {
  return (
    <View className="flex-row -translate-y-4 items-center justify-between mb-4">
      <View className="flex-row gap-[0.8rem] items-center">
        <Text className=" text-[#4EA8DE] text-lg font-bold">Criadas</Text>
        <View className="bg-[#333333] p-1 px-[9px] py-[3px] rounded-full">
          <Text className="text-[0.75rem] text-[#d9d9d9] font-bold">4</Text>
        </View>
      </View>

      <View className="flex-row gap-[0.8rem] items-center">
        <Text className="text-[#8284FA] text-lg font-bold">Concluídas</Text>
        <View className="bg-[#333333] p-1 px-[9px] py-[3px] rounded-full">
          <Text className="text-[0.75rem] text-[#d9d9d9] font-bold">
            1 de 4
          </Text>
        </View>
      </View>
    </View>
  );
}
