import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AddTodo } from "../../screens/AddTodo/AddTodo";
import { Profile } from "../../screens/Profile/profile";
import { TodoList } from "../../screens/TodoList/TodoList";
import { BottomTabParamsList } from "./BottomTab.types";
const Tab = createBottomTabNavigator<BottomTabParamsList>();

const { Navigator, Screen } = Tab;

export const BottomTabNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: true }}>
      <Screen
        name="TodoList"
        component={TodoList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="today" size={24} color="black" />
          ),
          title: "Todos",
        }}
      ></Screen>
      <Screen
        name="AddTodo"
        component={AddTodo}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle-outline" size={24} color="black" />
          ),
          title: "Add Todo",
        }}
      ></Screen>
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person-circle" size={24} color="black" />
          ),
        }}
      ></Screen>
    </Navigator>
  );
};
