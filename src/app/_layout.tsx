import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="home-page" options={{ title: "Home" }} />
      <Stack.Screen name="members-page" options={{ title: "Members" }} />
      <Stack.Screen name="lyndonInfo-page" options={{ title: "Lyndon-Info" }} />
    </Stack>
  );
}
