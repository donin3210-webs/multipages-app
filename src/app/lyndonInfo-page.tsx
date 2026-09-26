import { Image, StyleSheet, Text, View } from "react-native";

export default function MemberInfoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.accentBar} />

        <View style={styles.frameWrap}>
          <Image source={require("../img/MyIMG.jpg")} style={styles.frame} />
        </View>

        <Text style={styles.name}>Lyndon Colonia</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Leader</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Education</Text>
          <Text style={styles.text}>BSIT, 4th Year</Text>
          <Text style={styles.subText}>Northeastern Cebu Colleges (NCC)</Text>
        </View>

        <View style={[styles.section, styles.sectionDivider]}>
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

const INK = "#16211f";
const PAPER = "#f3f0e8";
const MOSS = "#2c4a41";
const MOSS_DEEP = "#16241f";
const GOLD = "#c9a24a";
const GOLD_SOFT = "#e4d4a8";
const LINE = "rgba(22,33,31,0.14)";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#0e1a17",
  },
  card: {
    width: "100%",
    alignItems: "center",
    backgroundColor: PAPER,
    borderRadius: 22,
    paddingTop: 40,
    paddingBottom: 28,
    paddingHorizontal: 28,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 8,
  },
  accentBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 6,
    backgroundColor: GOLD,
  },
  frameWrap: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: GOLD,
    padding: 3,
    marginBottom: 16,
  },
  frame: {
    width: "100%",
    height: "100%",
    borderRadius: 45,
    backgroundColor: "#eee",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: MOSS_DEEP,
    marginBottom: 10,
  },
  badge: {
    backgroundColor: GOLD_SOFT,
    borderRadius: 999,
    paddingVertical: 5,
    paddingHorizontal: 14,
    marginBottom: 22,
  },
  badgeText: {
    fontSize: 12.5,
    fontWeight: "700",
    color: MOSS_DEEP,
    letterSpacing: 0.3,
  },
  section: {
    width: "100%",
    paddingVertical: 14,
  },
  sectionDivider: {
    borderTopWidth: 1,
    borderTopColor: LINE,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: MOSS,
    letterSpacing: 0.3,
    marginBottom: 6,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    color: INK,
    lineHeight: 20,
  },
  subText: {
    fontSize: 13.5,
    color: "#5a6560",
    marginTop: 2,
  },
});
