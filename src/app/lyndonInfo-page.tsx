import { Image, StyleSheet, Text, View } from "react-native";

export default function MemberInfoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require("../img/MyIMG.jpg")} style={styles.frame} />

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
            Currently a 4th year Bachelor of Science in Information Technology
            (BSIT) student, still building up coding skills.
          </Text>
        </View>
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
    backgroundColor: "#F2F2F7",
  },
  card: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  frame: {
    width: 90,
    height: 90,
    borderRadius: 45, // makes it a circle
    marginBottom: 16,
    backgroundColor: "#eee", // shows while the image loads, or if it fails
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
