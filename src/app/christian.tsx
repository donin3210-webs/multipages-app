import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const skills = ["JavaScript", "TypeScript", "React Native", "Expo", "Git"];

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionBody}>{children}</View>
  </View>
);

export default function ResumeScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>OD</Text>
      </View>
      <Text style={styles.name}>Christan Ortega</Text>
      <Text style={styles.title}>Software Developer</Text>

      <View style={styles.contactBox}>
        <Text style={styles.contact}>Luyang,Carmen,Cebu</Text>
        <Text style={styles.contact}>christianborog@gmail.com</Text>
        <Text style={styles.contact}>09942647321</Text>
      </View>

      <Section title="ABOUT ME">
        <Text style={styles.text}>
          Aspiring software developer who enjoys building mobile apps with React
          Native. I'm eager to learn and improve my skills through real
          projects.
        </Text>
      </Section>

      <Section title="SKILLS">
        <View style={styles.chipRow}>
          {skills.map((skill) => (
            <View key={skill} style={styles.chip}>
              <Text style={styles.chipText}>{skill}</Text>
            </View>
          ))}
        </View>
      </Section>

      <Section title="EXPERIENCE">
        <Text style={styles.bold}>Mobile Developer</Text>
        <Text style={styles.muted}>Mitsumi Company Inc. | 2028 - Present</Text>
      </Section>

      <Section title="EDUCATION">
        <Text style={styles.bold}>BS in Information Technology</Text>
        <Text style={styles.muted}>
          Northeastern Cebu Colleges | 2023 - 2027
        </Text>
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#0F172A" },
  content: { alignItems: "center", paddingTop: 70, paddingBottom: 40 },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: "#10B981",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  avatarText: { color: "#10B981", fontSize: 30, fontWeight: "700" },
  name: { color: "#F8FAFC", fontSize: 26, fontWeight: "700" },
  title: { color: "#10B981", fontSize: 15, marginTop: 4, marginBottom: 16 },

  contactBox: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: "#1E293B",
    marginBottom: 8,
  },
  contact: { color: "#CBD5E1", fontSize: 13, lineHeight: 20 },

  section: { alignSelf: "stretch", marginHorizontal: 20, marginTop: 20 },
  sectionTitle: {
    color: "#10B981",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 2,
  },
  sectionBody: {
    borderLeftWidth: 2,
    borderLeftColor: "#10B981",
    paddingLeft: 12,
    marginTop: 8,
  },

  text: { color: "#E2E8F0", fontSize: 14, lineHeight: 21 },
  bold: { color: "#F8FAFC", fontSize: 15, fontWeight: "700" },
  muted: { color: "#94A3B8", fontSize: 13, marginTop: 2 },

  chipRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: {
    backgroundColor: "#1E293B",
    borderWidth: 1,
    borderColor: "#10B981",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 999,
  },
  chipText: { color: "#A7F3D0", fontSize: 12, fontWeight: "600" },
});
