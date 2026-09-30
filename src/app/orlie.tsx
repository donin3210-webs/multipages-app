import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View style={styles.card}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

export default function ResumeScreen() {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.name}>Orlie De La Pena</Text>
        <Text style={styles.title}>Software Developer</Text>
        <Text style={styles.contact}>Dawis Norte, Carmen, Cebu</Text>
        <Text style={styles.contact}>orliedelapena62@gmail.com</Text>
        <Text style={styles.contact}>09126391704</Text>
      </View>

      <Section title="Summary">
        <Text style={styles.text}>
          Detail-oriented developer who builds mobile and web applications.
        </Text>
      </Section>

      <Section title="Skills">
        <Text style={styles.text}>
          JavaScript, TypeScript, React Native, Expo, Git
        </Text>
      </Section>

      <Section title="Experience">
        <Text style={styles.bold}>Mobile Developer</Text>
        <Text style={styles.text}>Tech Company Inc. | 2028 - Present</Text>
        <Text style={styles.bold}>Web Developer</Text>
        <Text style={styles.text}>Tech Company Inc. | 2023 - Present</Text>
      </Section>

      <Section title="Education">
        <Text style={styles.bold}>BS in Information Technology</Text>
        <Text style={styles.text}>
          Northeastern Cebu Colleges | 2023 - 2027
        </Text>
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F4F6FA" },
  header: {
    backgroundColor: "#1E3A5F",
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 24,
    marginBottom: 16,
  },
  name: { color: "#fff", fontSize: 26, fontWeight: "700" },
  title: { color: "#BFD7FF", fontSize: 15, marginBottom: 10 },
  contact: { color: "#E5EEFF", fontSize: 13 },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#3B82F6",
    marginBottom: 8,
  },
  text: { fontSize: 14, color: "#1F2937", lineHeight: 21 },
  bold: { fontSize: 15, fontWeight: "700", color: "#1F2937" },
});
