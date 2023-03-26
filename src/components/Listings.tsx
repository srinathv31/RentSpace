import { FlatList, View } from "react-native";
import listingImages from "../../assets/images/images";
import ListingCard from "./ListingCard";

interface Listing {
    id: number,
    name: string,
    adddress: string,
    price: string,
    feature: string,
    picture: any
}

export default function Listings(): JSX.Element {

    const ListingData: Listing[] = [
        { id: 0, name: "Condo", adddress: "123 Sesame Street, NY", price: "500", feature: "3 Bedroom - 2 Bath", picture: listingImages.condo },
        { id: 2, name: "House", adddress: "123 Sesame Street, NY", price: "500", feature: "3 Bedroom - 2 Bath", picture: listingImages.interior  },
        { id: 3, name: "Pool House", adddress: "123 Sesame Street, NY", price: "500", feature: "3 Bedroom - 2 Bath", picture: listingImages.pool },
        { id: 4, name: "House", adddress: "123 Sesame Street, NY", price: "500", feature: "3 Bedroom - 2 Bath", picture: listingImages.porch },
        { id: 5, name: "Apartment", adddress: "123 Sesame Street, NY", price: "500", feature: "3 Bedroom - 2 Bath", picture: listingImages.town },
    ];

    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <FlatList 
                data={ListingData}
                renderItem={({ item }) => <ListingCard listing={item}/>}
                style={{
                    width:"100%",
                }}
            />
        </View>
    );
}
