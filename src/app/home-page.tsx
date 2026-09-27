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

      <View style={styles.card}>
        <View style={styles.accentBar} />
        <Text style={styles.description}>
          Team Spirit is a group of Bachelor of Science in Information
          Technology(BSIT) students collaborating on projects, sharing ideas,
          and building skills together as we work towards becoming better
          developers.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/members-page")}
      >
        <Text style={styles.buttonText}>View Members</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerLabel}>Contact Us</Text>
        <Text style={styles.footerText}>teamspirit.group1@gmail.com</Text>
        <Text style={styles.footerText}>
          Northeastern Cebu Colleges — 4rth Year College(BSIT)
        </Text>
      </View>
    </View>
  );
}

const PAPER = "#f3f0e8";
const MOSS = "#2c4a41";
const MOSS_DEEP = "#16241f";
const GOLD = "#c9a24a";
const GOLD_SOFT = "#e4d4a8";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: MOSS_DEEP,
  },
  title1: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "uppercase",
    textAlign: "center",
    color: GOLD_SOFT,
    marginBottom: 6,
  },
  title2: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    color: PAPER,
    marginBottom: 14,
  },
  title3: {
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
    color: "rgba(243,240,232,0.75)",
    marginBottom: 24,
  },
  card: {
    backgroundColor: PAPER,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    width: "100%",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  accentBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: GOLD,
  },
  description: {
    fontSize: 14,
    color: MOSS_DEEP,
    textAlign: "center",
    lineHeight: 20,
    marginTop: 6,
  },
  button: {
    marginTop: 24,
    backgroundColor: GOLD,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 999,
  },
  buttonText: {
    color: MOSS_DEEP,
    fontSize: 16,
    fontWeight: "700",
  },
  footer: {
    marginTop: 30,
    alignItems: "center",
  },
  footerLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: GOLD_SOFT,
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  footerText: {
    fontSize: 13,
    color: "rgba(243,240,232,0.7)",
    textAlign: "center",
  },
});
