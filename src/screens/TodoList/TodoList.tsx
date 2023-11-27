import { AntDesign } from "@expo/vector-icons";
import { ScrollView, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { Todo } from "../../helpers/types";
import { useFetchTodo } from "../../hooks/useTodoApi";

export const TodoList = () => {
  const { data: response, isLoading } = useFetchTodo();
  // const { username } = useUserContext();
  // console.log(username);

  const data = response?.data;
  console.log("Thisw is todo");
  console.log(data);

  if (isLoading)
    return (
      <>
        <View>
          <Text>Loading Todos...</Text>
        </View>
      </>
    );
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {data.map((todo: Todo) => (
          <View key={todo.id}>
            <Card style={{ margin: 5 }} mode="contained">
              <Card.Content
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 20 }}>{todo.task}</Text>

                <AntDesign name="delete" size={24} color="black" />
              </Card.Content>
            </Card>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
