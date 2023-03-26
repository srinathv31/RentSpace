import { View } from "react-native";
import ExploreHeader from "../components/ExploreHeader";
import Listings from "../components/Listings";

export default function Explore(): JSX.Element {
    return(
        <View style={{ flex: 1 }}>
            <ExploreHeader />
            <Listings />
        </View>
    );
}
