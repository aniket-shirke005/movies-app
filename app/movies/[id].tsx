import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function MoviesDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Details for movie: {id}</Text>
    </View>
  );
}
