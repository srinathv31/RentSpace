import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ExploreHeader(): JSX.Element {
    const [selectedOption, setSelectedOption] = useState<number>(0);

    const someData = ["Homes", "Cars", "Spaces", "Apartments", "Condos", "Bikes"];
    
    return(
        <React.Fragment>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ margin: 20 }}>
                    <Text style={styles.heading}>Explore</Text>
                </View>
                <View style={{ margin: 20, flexDirection: "row" }}>
                    <TouchableOpacity style={{ paddingRight: 5 }}>
                        <Ionicons name="ios-search" size={32}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingRight: 5 }}>
                        <Ionicons name="options" size={32}/>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList 
                data={someData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => setSelectedOption(index)} 
                            style={[
                                styles.pill, 
                                selectedOption === index && styles.selectedPill,
                                { marginLeft: index === 0 ? 20 : 5 },
                                { marginRight: index === someData.length-1 ? 20 : 5 },
                            ]}
                        >
                            <Text style={selectedOption === index && styles.selectedText}>{item}</Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 35,
        fontWeight: "bold"
    },
    pill: {
        padding: 5,
        paddingHorizontal: 15,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 100,
    },
    selectedPill: {
        backgroundColor: "black",
    },
    selectedText: {
        color: "white"
    },
});
