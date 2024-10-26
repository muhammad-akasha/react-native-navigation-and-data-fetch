import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                        backgroundColor: "gray",
                        borderRadius: 20,
                        bottom: 20,
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : null
                }
              >
                <FontAwesome size={28} name="home" color={color} />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          headerStyle: { backgroundColor: "red" },
          title: "Contact",
          tabBarIcon: ({ color, focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                        backgroundColor: "gray",
                        borderRadius: 20,
                        bottom: 20,
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : null
                }
              >
                <FontAwesome size={28} name="cog" color={color} />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Products",
          tabBarIcon: ({ color, focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                        backgroundColor: "gray",
                        borderRadius: 20,
                        bottom: 20,
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : null
                }
              >
                <FontAwesome size={28} name="cog" color={color} />
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
