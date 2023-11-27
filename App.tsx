import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserContextProvider } from "./src/context/userContext";
import { useUser } from "./src/hooks/useUser";
import { RootStackNavigator } from "./src/navigations/root-stack/RootStack";

const queryClient = new QueryClient();

export default function App() {
  const user = useUser();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <UserContextProvider value={user}>
          <RootStackNavigator />
        </UserContextProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
