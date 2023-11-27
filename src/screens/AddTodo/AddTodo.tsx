import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { Button, Snackbar, TextInput } from "react-native-paper";
import { useAddTodo } from "../../hooks/useTodoApi";

export const AddTodo = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [scheduled_at, setScheduledAt] = useState("");
  const [visibility, setVisibility] = useState(false);

  const { mutateAsync: addTodo, error } = useAddTodo();

  const handlePress = async () => {
    await addTodo({ task, description, scheduled_at });
    setTask("");
    setDescription("");
    setScheduledAt("");
    setVisibility(!visibility);
  };
  const onDismissSnackBar = () => setVisibility(false);
  return (
    <>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View style={style.form}>
          <TextInput
            mode="outlined"
            label="Task"
            placeholder="Add New Task"
            value={task}
            onChangeText={(task) => setTask(task)}
          />

          <TextInput
            mode="outlined"
            label="Description"
            placeholder="Description"
            value={description}
            onChangeText={(description) => setDescription(description)}
            style={{
              minHeight: 100,
              textAlignVertical: "top",
            }}
            multiline
          />
          <Calendar
            onDayPress={(day) => {
              setScheduledAt(day.dateString);
              console.log(day);
              console.log(scheduled_at);
            }}
            markedDates={{
              [scheduled_at]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: "orange",
              },
            }}
          />
          <Button mode="contained" onPress={handlePress}>
            Create Task
          </Button>
        </View>
        <View>
          <Snackbar visible={visibility} onDismiss={onDismissSnackBar}>
            Task Added
          </Snackbar>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  form: {
    rowGap: 10,
    padding: 10,
  },
});
