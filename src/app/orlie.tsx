import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";

const resume = {
  name: "JUAN DELA CRUZ",
  title: "Software Developer",
  contact: "juan@email.com | +63 900 000 0000 | Davao City, PH",
  summary:
    "Detail-oriented developer with 3+ years of experience building mobile and web applications.",
  skills: [
    { label: "Languages", value: "JavaScript, TypeScript, Python" },
    { label: "Frameworks", value: "React Native, Expo, React, Node.js" },
    { label: "Tools", value: "Git, Figma, Postman, SQLite" },
  ],
  experience: [
    {
      role: "Mobile Developer",
      company: "Tech Company Inc.",
      period: "2023 - Present",
      points: [
        "Built and shipped a cross-platform app used by 5,000+ users",
        "Implemented offline-first data sync",
        "Reduced app load time by 35%",
      ],
    },
    {
      role: "Junior Web Developer",
      company: "Startup Studio",
      period: "2021 - 2023",
      points: ["Developed responsive websites for 10+ clients"],
    },
  ],
  education: [
    {
      degree: "BS in Information Technology",
      school: "University of Southeastern Philippines",
      period: "2017 - 2021",
    },
  ],
};

const Divider = () => <View style={styles.divider} />;

const SectionTitle = ({ children }: { children: string }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{children.toUpperCase()}</Text>
    <Divider />
  </View>
);

export default function ResumeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.name}>{resume.name}</Text>
      <Text style={styles.center}>{resume.title}</Text>
      <Text style={styles.center}>{resume.contact}</Text>
      <Divider />

      {/* Summary */}
      <SectionTitle>Summary</SectionTitle>
      <Text style={styles.text}>{resume.summary}</Text>

      {/* Skills */}
      <SectionTitle>Skills</SectionTitle>
      {resume.skills.map((s) => (
        <Text key={s.label} style={styles.text}>
          {s.label}: {s.value}
        </Text>
      ))}

      {/* Experience */}
      <SectionTitle>Experience</SectionTitle>
      {resume.experience.map((job) => (
        <View key={job.role} style={styles.block}>
          <Text style={styles.bold}>
            {job.role} - {job.company}
          </Text>
          <Text style={styles.text}>{job.period}</Text>
          {job.points.map((p) => (
            <Text key={p} style={styles.text}>
              * {p}
            </Text>
          ))}
        </View>
      ))}

      {/* Education */}
      <SectionTitle>Education</SectionTitle>
      {resume.education.map((edu) => (
        <View key={edu.degree} style={styles.block}>
          <Text style={styles.bold}>{edu.degree}</Text>
          <Text style={styles.text}>
            {edu.school} ({edu.period})
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const mono = Platform.select({ ios: "Courier", android: "monospace" });

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60, backgroundColor: "#fff" },
  name: {
    fontFamily: mono,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  center: { fontFamily: mono, fontSize: 13, textAlign: "center" },
  divider: {
    height: 1,
    backgroundColor: "#000",
    marginVertical: 6,
  },
  section: { marginTop: 18 },
  sectionTitle: { fontFamily: mono, fontSize: 15, fontWeight: "bold" },
  text: { fontFamily: mono, fontSize: 13, lineHeight: 20, color: "#111" },
  bold: { fontFamily: mono, fontSize: 13, fontWeight: "bold" },
  block: { marginBottom: 12 },
});
