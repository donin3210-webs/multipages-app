import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function MembersScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Members</Text>

      <View style={styles.card}>
        <Text style={styles.m} onPress={() => router.push("/lyndonInfo-page")}>
          Lyndon Colonia
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.m}>Krishna Paul Quisora</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.m}>Evewin Colita</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.m}>Harry Dorong</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.m}>Orlie Dela Pena</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.m}>Cristian Ortega</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F2F2F7", // matches the home screen background
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    padding: 30,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1C1C1E",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    marginBottom: 15,
    // shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // shadow for Android
    elevation: 3,
  },
  m: {
    fontSize: 20,
    padding: 20,
    color: "#1C1C1E",
  },
});
