import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export function HabitEmpty() {
  const { navigate } = useNavigation();

  return (
    <Text className="text-zinc-400 text-base">
      {" "}
      You're not monitoring any habits yet{" "}
      <Text
        className="text-violet-400 text-base underline active:text-violet-500"
        onPress={() => navigate("new")}
      >
        Click here to create one!
      </Text>
    </Text>
  );
}
