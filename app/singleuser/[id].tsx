import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Image } from "expo-image";

interface ItemData {
  firstName: string;
  id: number;
  image: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  bloodGroup: string;
  birthDate: string;
  address: {
    address: string;
    city: string;
  };
}

const SingleUser = () => {
  const { id } = useLocalSearchParams();
  const [singleUser, setSingleUser] = useState<ItemData | null>(null);
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        const data = await response.json();
        setSingleUser(data); // Update state with fetched user data
        navigation.setOptions({
          title: `${data.firstName} ${data.lastName}`, // Set the dynamic title
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, [id]); // Add 'id' as a dependency

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ); // Display loading indicator
  }

  if (!singleUser) {
    return (
      <View style={styles.container}>
        <Text>No user found!</Text>
      </View>
    ); // Handle case where no user is found
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: singleUser.image }}
        style={{ width: 100, height: 100 }}
        contentFit="fill"
        transition={1000}
      />
      <Text style={styles.name}>
        {singleUser.firstName} {singleUser.lastName}
      </Text>
      <Text>Email: {singleUser.email}</Text>
      <Text>Age: {singleUser.age}</Text>
      <Text>Gender: {singleUser.gender}</Text>
      <Text>Phone: {singleUser.phone}</Text>
      <Text>Blood Group: {singleUser.bloodGroup}</Text>
      <Text>Birth Date: {singleUser.birthDate}</Text>
      <Text>Address: {singleUser.address.address}</Text>
      <Text>City: {singleUser.address.city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    elevation: 2,
    borderWidth: 2,
    shadowColor: "#000",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default SingleUser;
