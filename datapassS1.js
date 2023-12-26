import react, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const s1 = ({ navigation }) => {
  const [name, setName] = useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        style={{ borderWidth: 2 }}
        placeholder="Enter Name"
        value={name}
        onChangeText={(name) => setName(name)}
      />
      <Button
        title="Submit"
        onPress={() => navigation.navigate("s2", { name })}
      ></Button>
    </View>
  );
};
export default s1;
