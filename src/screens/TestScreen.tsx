import { View, Text } from "react-native";

export default function TestScreen({ label }: {
    label: string
}): JSX.Element {
    return(
        <View style={{ flex: 1 }}>
            <Text>{label}</Text>
        </View>
    );
}
