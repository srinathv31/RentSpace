import { TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import useClientStore from "../zustand/clientStore";

export default function MenuTabBar(): JSX.Element {
    const index = useClientStore(state => state.index);
    const updateIndex = useClientStore(state => state.updateIndex);
    
    return(
        <View style={{ margin: 20, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15 }}>
            <TouchableOpacity onPress={() => updateIndex(0)} style={{ paddingRight: 5 }}>
                <Ionicons name={index === 0 ? "home" : "home-outline"} size={32}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => updateIndex(1)} style={{ paddingRight: 5 }}>
                <Ionicons name={index === 1 ? "calendar" : "calendar-sharp"} size={32}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => updateIndex(2)} style={{ paddingRight: 5 }}>
                <Ionicons name={index === 2 ? "bar-chart" : "bar-chart-outline"} size={32}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => updateIndex(3)} style={{ paddingRight: 5 }}>
                <Ionicons name={index === 3 ? "person-circle" : "person-circle-outline"} size={32}/>
            </TouchableOpacity>
        </View>
    );
}
