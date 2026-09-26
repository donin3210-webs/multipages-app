import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function MembersScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Members</Text>

      <Text style={styles.m} onPress={() => router.push("/lyndonInfo-page")}>
        Lyndon Colonia
      </Text>
      <Text style={styles.m}>Krishna Paul Quisora</Text>
      <Text style={styles.m}>Evewin Colita</Text>
      <Text style={styles.m}>Harry Dorong</Text>
      <Text style={styles.m}>Orlie Dela Pena</Text>
      <Text style={styles.m}>Cristian Ortega</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    padding: 30,
    marginBottom: 40,
    fontWeight: "bold",
  },
  m: {
    fontSize: 20,
    padding: 20,
    marginBottom: 15,
    backgroundColor: "#ffffff",
  },
});
