import { StyleSheet, Text, View } from "react-native";

export default function MemberInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Lyndon Colonia</Text>
      <Text style={styles.role}>Leader</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Education</Text>
        <Text style={styles.text}>
          BSIT, 4th Year — Northeastern Cebu Colleges (NCC)
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>About</Text>
        <Text style={styles.text}>
          Currently a 4th year Bachelor of Science in Infomation
          Technology(BSIT) student, still building up coding skills.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
  },
  role: {
    fontSize: 16,
    color: "#555",
    marginBottom: 24,
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#888",
    marginBottom: 4,
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
  },
});
