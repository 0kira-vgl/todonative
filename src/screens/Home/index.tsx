import Plus from "@expo/vector-icons/AntDesign";
import { Task } from "../../components/task";
import {
  TextInput,
  View,
  Pressable,
  FlatList,
  Alert,
  Text,
} from "react-native";
import { useState } from "react";
import { ClipboardList } from "lucide-react-native";
import { ProgressCounter } from "../../components/progressCounter";

export function Home() {
  const [tasks, setTask] = useState<string[]>([]); // "<string[]>" diz que é um array de string
  const [taskName, setTaskName] = useState("");

  function handleTaskAdd() {
    if (taskName.trim() === "") {
      // verifica se o input está vazio
      return Alert.alert("Ops!", "O preenchimento da tarefa é obrigatório");
    }

    if (tasks.includes(taskName)) {
      // verica se essa tarefas já existe
      return Alert.alert("Tarefa já existente", "Está tarefa já existe");
    }

    // desestrutura o prevState (um array) e add a tarefas
    setTask((prevState) => [...prevState, taskName]);
    setTaskName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Romover tarefa", `Deseja remover a tarefa?`, [
      {
        text: "Sim",
        style: "destructive",
        onPress: () =>
          setTask((prevState) =>
            prevState.filter((participant) => participant !== name)
          ), // pega o estado atual de tarefas e filtra para a tarefa excluida não aparecer
      },

      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View className="h-full bg-[#1A1A1A] p-6">
      <View className="flex-row gap-2.5 -translate-y-14">
        <TextInput
          onChangeText={setTaskName} // pega o texto digitado no input para add uma task
          value={taskName} // seta o valor do input com a taskName atual e limpa o input
          placeholder="Adicione uma nova tarefa"
          className="h-16 flex-1 p-4 text-zinc-50 text-xl bg-[#262626] border border-black rounded-lg"
          placeholderTextColor="#808080"
        />

        <Pressable
          onPress={handleTaskAdd}
          className="size-16 rounded-md bg-[#1E6F9F] flex items-center justify-center"
        >
          <Plus name="pluscircleo" size={22} color="#fff" />
        </Pressable>
      </View>

      <ProgressCounter />

      <FlatList
        showsVerticalScrollIndicator={false} // remover scroll
        data={tasks}
        keyExtractor={(item) => item} // key
        renderItem={({ item }) => (
          <Task
            key={item}
            title={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => {
          return (
            <View className="flex justify-center items-center mt-12">
              <ClipboardList size={56} color="#3D3D3D" />

              <Text className="text-[#808080] text-lg font-bold mt-4">
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text className="text-[#808080] text-lg">
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
