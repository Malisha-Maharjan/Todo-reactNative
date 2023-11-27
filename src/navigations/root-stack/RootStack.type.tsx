import { StackNavigationProp } from "@react-navigation/stack";

export type RootParamsList = {
  Login: undefined;
  BottomTab: undefined;
  TopTab: undefined;
};

export type RootNavigationProps = StackNavigationProp<RootParamsList>;
