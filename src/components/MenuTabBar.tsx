import { TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import useClientStore from "../zustand/clientStore";

export default function MenuTabBar(): JSX.Element {
    const index = useClientStore(state => state.index);
    const updateIndex = useClientStore(state => state.updateIndex);
    
    return(
        <View style={{ paddingVertical: 10, marginHorizontal: 0, flexDirection: "row", alignItems: "center", justifyContent: "center", borderTopWidth: 1, borderColor: "black" }}>
            <TouchableOpacity onPress={() => updateIndex(0)} style={{ paddingTop: 15, width: "25%", alignItems: "center" }}>
                <Ionicons name={index === 0 ? "home" : "home-outline"} size={32}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => updateIndex(1)} style={{ paddingTop: 15, width: "25%", alignItems: "center" }}>
                <Ionicons name={index === 1 ? "calendar" : "calendar-sharp"} size={32}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => updateIndex(2)} style={{ paddingTop: 15, width: "25%", alignItems: "center" }}>
                <Ionicons name={index === 2 ? "bar-chart" : "bar-chart-outline"} size={32}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => updateIndex(3)} style={{ paddingTop: 15, width: "25%", alignItems: "center" }}>
                <Ionicons name={index === 3 ? "person-circle" : "person-circle-outline"} size={32}/>
            </TouchableOpacity>
        </View>
    );
}
