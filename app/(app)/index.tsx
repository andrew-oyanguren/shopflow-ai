import { Text, View } from "react-native";

// Home screen once authenticated
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Screen After Auth</Text>
    </View>
  );
}
