import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const name = "Evewin Colita";
const initials = name
  .split(" ")
  .map((w) => w[0])
  .join("");

const skills = [
  { label: "React Native", level: 0.85 },
  { label: "TypeScript", level: 0.75 },
  { label: "JavaScript", level: 0.8 },
  { label: "Expo", level: 0.8 },
  { label: "Git", level: 0.7 },
];

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionLine} />
    {children}
  </View>
);

const TimelineItem = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <View style={styles.timelineRow}>
    <View style={styles.dot} />
    <View style={{ flex: 1 }}>
      <Text style={styles.bold}>{title}</Text>
      <Text style={styles.muted}>{subtitle}</Text>
    </View>
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
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.title}>Software Developer</Text>
        </View>
      </View>

      {/* Contact */}
      <View style={styles.contactRow}>
        <Text style={styles.contact}>📍 Catmon, Cebu</Text>
        <Text style={styles.contact}>✉️ evewincolita69@gmail.com</Text>
        <Text style={styles.contact}>📞 09949511344</Text>
      </View>

      <Section title="About Me">
        <Text style={styles.text}>
          Motivated developer who enjoys creating simple, useful mobile apps
          with React Native. I love learning new technologies and turning ideas
          into working projects.
        </Text>
      </Section>

      <Section title="Skills">
        {skills.map((skill) => (
          <View key={skill.label} style={styles.skillRow}>
            <View style={styles.skillHeader}>
              <Text style={styles.text}>{skill.label}</Text>
              <Text style={styles.muted}>{Math.round(skill.level * 100)}%</Text>
            </View>
            <View style={styles.barBg}>
              <View
                style={[styles.barFill, { width: `${skill.level * 100}%` }]}
              />
            </View>
          </View>
        ))}
      </Section>

      <Section title="Experience">
        <TimelineItem
          title="Mobile Developer"
          subtitle="Cebu Digital Solutions Inc. | 2025 - Present"
        />
      </Section>

      <Section title="Education">
        <TimelineItem
          title="BS in Information Technology"
          subtitle="Northeastern Cebu Colleges | 2023 - 2027"
        />
      </Section>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const PURPLE = "#7C3AED";
const DARK = "#2E1065";

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FAF5FF" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: PURPLE,
    paddingTop: 70,
    paddingBottom: 28,
    paddingHorizontal: 20,
    borderBottomRightRadius: 60,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  avatarText: { color: PURPLE, fontSize: 26, fontWeight: "800" },
  name: { color: "#FFFFFF", fontSize: 26, fontWeight: "800" },
  title: { color: "#DDD6FE", fontSize: 15, marginTop: 2 },

  contactRow: { paddingHorizontal: 20, paddingTop: 16, gap: 4 },
  contact: { color: DARK, fontSize: 13 },

  section: { marginHorizontal: 20, marginTop: 24 },
  sectionTitle: {
    color: PURPLE,
    fontSize: 17,
    fontWeight: "800",
  },
  sectionLine: {
    width: 40,
    height: 3,
    borderRadius: 2,
    backgroundColor: PURPLE,
    marginTop: 4,
    marginBottom: 12,
  },

  text: { color: DARK, fontSize: 14, lineHeight: 21 },
  bold: { color: DARK, fontSize: 15, fontWeight: "700" },
  muted: { color: "#6D28D9", fontSize: 13, marginTop: 2 },

  skillRow: { marginBottom: 10 },
  skillHeader: { flexDirection: "row", justifyContent: "space-between" },
  barBg: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#EDE9FE",
    marginTop: 4,
  },
  barFill: { height: 8, borderRadius: 4, backgroundColor: PURPLE },

  timelineRow: { flexDirection: "row", alignItems: "flex-start" },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: PURPLE,
    marginTop: 5,
    marginRight: 12,
  },
});
