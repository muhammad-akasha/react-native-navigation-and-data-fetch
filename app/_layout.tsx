import "../global.css";

// // stack Navigation ..

// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: "#f4511e",
//         },
//         headerTintColor: "#fff",
//         headerTitleStyle: {
//           fontWeight: "bold",
//         },
//       }}
//     >
//       <Stack.Screen name="index" options={{ title: "home" }} />
//       <Stack.Screen name="about" options={{ title: "about" }} />
//       <Stack.Screen name="contact" options={{ title: "contact" }} />
//     </Stack>
//   );
// }

// Tab Navigation

import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

// tabs folder layout file code
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { Tabs } from "expo-router";

// export default function TabLayout() {
//   return (
//     <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color }) => (
//             <FontAwesome size={28} name="home" color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="contact"
//         options={{
//           title: "contact",
//           tabBarIcon: ({ color }) => (
//             <FontAwesome size={28} name="cog" color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="products"
//         options={{
//           title: "products",
//           tabBarIcon: ({ color }) => (
//             <FontAwesome size={28} name="cog" color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { Drawer } from "expo-router/drawer";

// export default function Layout() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Drawer>
//         <Drawer.Screen
//           name="index" // Must match the page's file name
//           options={{
//             drawerLabel: "Home",
//             title: "Home",
//           }}
//         />
//         <Drawer.Screen
//           name="contact"
//           options={{
//             drawerLabel: "Contact",
//             title: "Contact",
//           }}
//         />
//         <Drawer.Screen
//           name="products"
//           options={{
//             drawerLabel: "Products",
//             title: "Products",
//           }}
//         />
//       </Drawer>
//     </GestureHandlerRootView>
//   );
// }
