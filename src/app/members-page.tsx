import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MembersScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>👻Team Spirit</Text>

        <Text style={styles.sectionLabel}>Leader</Text>
        <TouchableOpacity
          style={[styles.card, styles.leaderCard]}
          onPress={() => router.push("/lyndonInfo-page")}
        >
          <View style={styles.leaderAvatar}>
            <Text style={styles.leaderAvatarText}>LC</Text>
          </View>
          <View style={styles.rowText}>
            <Text style={styles.m}>Lyndon Colonia</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Leader</Text>
            </View>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionLabel}>Members</Text>

        <View style={styles.card}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>KQ</Text>
          </View>
          <Text style={styles.m}>Krishna Paul Quisora</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>EC</Text>
          </View>
          <Text style={styles.m}>Evewin Colita</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>HD</Text>
          </View>
          <Text style={styles.m}>Harry Dorong</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>OD</Text>
          </View>
          <Text style={styles.m}>Orlie Dela Pena</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>CO</Text>
          </View>
          <Text style={styles.m}>Cristian Ortega</Text>
        </View>
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
    backgroundColor: "#16241f",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: PAPER,
    marginBottom: 28,
    letterSpacing: 0.2,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: GOLD_SOFT,
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 10,
    marginLeft: 4,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: PAPER,
    borderRadius: 16,
    marginBottom: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  leaderCard: {
    marginBottom: 24,
    borderWidth: 1.5,
    borderColor: GOLD,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: MOSS,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  avatarText: {
    fontSize: 13,
    fontWeight: "700",
    color: GOLD_SOFT,
  },
  leaderAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: MOSS_DEEP,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    borderWidth: 1.5,
    borderColor: GOLD,
  },
  leaderAvatarText: {
    fontSize: 15,
    fontWeight: "700",
    color: GOLD_SOFT,
  },
  rowText: {
    flex: 1,
  },
  m: {
    fontSize: 17,
    fontWeight: "500",
    color: MOSS_DEEP,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: GOLD_SOFT,
    borderRadius: 999,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginTop: 4,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: MOSS_DEEP,
  },
});
