import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const name = "Harry Dorong";
const initials = name
  .split(" ")
  .map((w) => w[0])
  .join("");
const skills = ["JavaScript", "TypeScript", "React Native", "Expo", "Git"];

const Section = ({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <View style={styles.iconBox}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
    <View style={styles.sectionBody}>{children}</View>
  </View>
);

export default function ResumeScreen() {
  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>Software Developer</Text>
      </View>

      {/* Contact card overlapping the header */}
      <View style={styles.contactCard}>
        <Text style={styles.contact}>📍 Dawis Norte, Carmen, Cebu</Text>
        <Text style={styles.contact}>✉️ harrydorong573@gmail.com</Text>
        <Text style={styles.contact}>📞 09505219076</Text>
      </View>

      <Section icon="👤" title="About Me">
        <Text style={styles.text}>
          Aspiring software developer who loves building mobile apps with React
          Native. I enjoy solving problems, learning new tools, and turning
          ideas into clean, user-friendly apps.
        </Text>
      </Section>

      <Section icon="⚡" title="Skills">
        <View style={styles.chipRow}>
          {skills.map((skill) => (
            <View key={skill} style={styles.chip}>
              <Text style={styles.chipText}>{skill}</Text>
            </View>
          ))}
        </View>
      </Section>

      <Section icon="💼" title="Experience">
        <Text style={styles.bold}>Mobile Developer</Text>
        <Text style={styles.muted}>Mitsumi Company Inc. | 2028 - Present</Text>
      </Section>

      <Section icon="🎓" title="Education">
        <Text style={styles.bold}>BS in Information Technology</Text>
        <Text style={styles.muted}>
          Northeastern Cebu Colleges | 2023 - 2027
        </Text>
      </Section>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FFF7ED" },

  header: {
    backgroundColor: "#F97316",
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 70,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    transform: [{ rotate: "-6deg" }],
  },
  avatarText: { color: "#F97316", fontSize: 30, fontWeight: "800" },
  name: { color: "#FFFFFF", fontSize: 26, fontWeight: "800" },
  title: { color: "#FFEDD5", fontSize: 15, marginTop: 4 },

  contactCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: -45,
    padding: 16,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  contact: { color: "#431407", fontSize: 13, lineHeight: 24 },

  section: { marginHorizontal: 20, marginTop: 22 },
  sectionHeader: { flexDirection: "row", alignItems: "center" },
  iconBox: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#FFEDD5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  icon: { fontSize: 16 },
  sectionTitle: { color: "#9A3412", fontSize: 16, fontWeight: "800" },
  sectionBody: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    marginTop: 10,
  },

  text: { color: "#431407", fontSize: 14, lineHeight: 21 },
  bold: { color: "#431407", fontSize: 15, fontWeight: "700" },
  muted: { color: "#9A3412", fontSize: 13, marginTop: 2 },

  chipRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: {
    backgroundColor: "#FFEDD5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  chipText: { color: "#C2410C", fontSize: 12, fontWeight: "700" },
});
