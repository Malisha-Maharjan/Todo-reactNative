import { createStackNavigator } from "@react-navigation/stack";
import { useUserContext } from "../../context/userContext";
import { LoginScreen } from "../../screens/Login/LoginScreen";
import { BottomTabNavigator } from "../bottom/BottomTab";
import { RootParamsList } from "./RootStack.type";

const RootStack = createStackNavigator<RootParamsList>();

const { Navigator, Screen } = RootStack;

export const RootStackNavigator = () => {
  const { token } = useUserContext();
  console.log(`this is token ${token}`);
  return (
    <Navigator>
      {!token ? (
        <>
          <Screen name="Login" component={LoginScreen} />
        </>
      ) : (
        <>
          <Screen
            name="BottomTab"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Navigator>
  );
};
