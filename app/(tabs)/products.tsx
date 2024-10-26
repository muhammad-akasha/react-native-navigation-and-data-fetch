import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

interface ItemData {
  firstName: string;
  id: number;
  image: string;
  lastName: string;
  age: number;
}

const Products = () => {
  const [products, setProducts] = useState<ItemData[]>([]);
  const [loading, setLoading] = useState(false);

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setProducts(data.users); // Extract 'users' from the response
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 33 }}>All Users</Text>
      <View style={{ width: "100%" }}>
        <FlatList
          data={products}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.userList}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 100, height: 100 }}
                contentFit="fill"
                transition={1000}
                placeholder={{ blurhash }}
              />
              <Text style={{ fontSize: 22 }}>
                {item.firstName} {item.lastName}
              </Text>
              <Text style={{ fontSize: 18 }}>Age: {item.age}</Text>
              <TouchableOpacity style={styles.btn}>
                {/* Updated the href construction */}
                <Link href={`/singleuser/${item.id}`}>
                  {/* Navigate to the dynamic route */}
                  See More
                </Link>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userList: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    marginTop: 20,
    padding: 10,
    alignItems: "center",
  },
  btn: {
    marginVertical: 15,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 25,
    backgroundColor: "#EEEEEE",
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Products;
