import { ImageBackground, View, StyleSheet, Text } from "react-native";

interface Listing {
    id: number,
    name: string,
    adddress: string,
    price: string,
    feature: string,
    picture: any
}

export default function ListingCard({ listing }: {
    listing: Listing
}): JSX.Element {
    return(
        <View style={[styles.card]}>
            <ImageBackground source={listing.picture} style={{ flex: 1, padding: 10, margin: 10, marginHorizontal: 15, borderRadius: 20, overflow: "hidden", justifyContent: "flex-end" }}>
                <Text style={styles.cardText}>{""}</Text>
                <Text style={styles.cardText}>{listing.name}</Text>
            </ImageBackground>
            <View style={{ padding: 10, marginHorizontal: 15 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontWeight: "bold" }}>123 Sesame Street, NY</Text>
                    <Text style={{ fontWeight: "bold" }}>$500</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text>3 Bedroom - 2 Bath</Text>
                    <Text>*****</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 10,
        // },
        // shadowOpacity: 0.51,
        // shadowRadius: 13.16,
        elevation: 20,
        marginVertical: 5,
        flex: 1,
        height: 400
    },
    cardText: {
        color: "white",
        fontSize: 23,
        textAlign: "left",
        padding: 5,
        marginBottom: 5,
        fontWeight: "600"
    }
});
