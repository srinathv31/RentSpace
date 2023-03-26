import React from "react";
import { SafeAreaView, useWindowDimensions } from "react-native";
import { Route, TabView } from "react-native-tab-view";
import Account from "./screens/Account";
import Explore from "./screens/Explore";
import ForRent from "./screens/ForRent";
import Rentals from "./screens/Rentals";

export default function Index(): JSX.Element {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "explore", title: "Explore" },
        { key: "rentals", title: "Rentals" },
        { key: "forRent", title: "ForRent" },
        { key: "account", title: "Account" },
    ]);
    
    const renderScene = ({ route }: {
		route: Route
	}) => {
        switch (route.key) {
        case "explore":
            return <Explore />;
        case "rentals":
            return <Rentals />;
        case "forRent":
            return <ForRent />;
        case "account":
            return <Account />;
        default:
            return null;
        }
    };

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                tabBarPosition="bottom"
            />
        </SafeAreaView>
    );
}
