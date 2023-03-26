import { View } from "react-native";
import ExploreHeader from "../components/ExploreHeader";

export default function Explore(): JSX.Element {
    return(
        <View style={{ flex: 1 }}>
            <View style={{ borderBottomWidth: 1, borderBottomColor: "silver", paddingBottom: 20 }}>
                <ExploreHeader />
            </View>
        </View>
    );
}
