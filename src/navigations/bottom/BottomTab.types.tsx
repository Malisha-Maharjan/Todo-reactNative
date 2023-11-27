import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type BottomTabParamsList = {
  Profile: undefined;
  TodoList: undefined;
  AddTodo: undefined;
};

export type TabNavigationProps = BottomTabNavigationProp<BottomTabParamsList>;
