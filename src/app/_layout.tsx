import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="home-page" options={{ title: "Home" }} />
      <Stack.Screen name="members-page" options={{ title: "Members" }} />
      <Stack.Screen name="lyndonInfo-page" options={{ title: "Lyndon-Info" }} />
      <Stack.Screen name="kp" options={{ title: "Krishna-Info" }} />
      <Stack.Screen name="orlie" options={{ title: "Orlie-Info" }} />
      <Stack.Screen name="evewin" options={{ title: "Evewin-Info" }} />
      <Stack.Screen name="christian" options={{ title: "Christian-Info" }} />
      <Stack.Screen name="harry" options={{ title: "Harry-Info" }} />
    </Stack>
  );
}
