import { useRoute } from "@react-navigation/native";
import react, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

const s2 = ({ navigation }) => {
  const routes = useRoute();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{routes.params.name}</Text>
    </View>
  );
};
export default s2;
