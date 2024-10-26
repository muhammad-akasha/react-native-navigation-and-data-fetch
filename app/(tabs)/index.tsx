import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>Home</Text>
      {/* <Link style={{ margin: 20 }} href={"/about"}>  // this code is for stack navigation
        <Text style={styles.aboutTxt}>About</Text>
      </Link>
      <Link style={{ margin: 20 }} href={"/contact"}>
        <Text style={styles.aboutTxt}>Contact</Text>
      </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  aboutTxt: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
    backgroundColor: "black",
  },
});
