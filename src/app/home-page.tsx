// app/index.tsx
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Group 1</Text>

      <Text style={styles.title2}>👻Team Spirit</Text>

      <Text style={styles.title3}>
        Welcome to our Simple Multipage Application
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/members-page")}
      >
        <Text style={styles.buttonText}>View Members</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title1: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
  },
  title2: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  title3: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    marginTop: 250,
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
