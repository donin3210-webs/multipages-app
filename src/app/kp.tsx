import { Image, StyleSheet, Text, View } from "react-native";

export default function Resume() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../img/img.jpg")}
        style={styles.image}
      />

      <Text style={styles.name}>KRISHNA PAUL QUISORA</Text>
      <Text style={styles.title}>IT Student</Text>

      <Text style={styles.section}>CONTACT</Text>
      <Text>Email: example@gmail.com</Text>
      <Text>Phone: 09063234099</Text>
      <Text>Location: Cebu, Philippines</Text>

      <Text style={styles.section}>ABOUT ME</Text>
      <Text>
        An IT student interested in programming, web development, and
        computer technology.
      </Text>

      <Text style={styles.section}>SKILLS</Text>
      <Text>• React Native</Text>
      <Text>• JavaScript / TypeScript</Text>
      <Text>• HTML & CSS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    color: "gray",
    marginBottom: 20,
  },
  section: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
});