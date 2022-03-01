import { Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from "react";
import { archiveService } from "../services/archive";
import ArchiveItem from "../components/ArchiveItem";

function Home({ navigation }) {

    const [previousSearches, setPreviousSearches] = useState([]);

    useEffect(() => {
        (async () => {
            let response = await archiveService.getSearch("@search");
            if (response) {
                setPreviousSearches(response);
            }
        })();
    }, []);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LinearGradient
                colors={['#8360c3', '#2ebf91']}
                style={{ width: "100%", flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                <View style={{ width: "90%", marginLeft: "auto", marginRight: "auto", backgroundColor: "white", borderRadius: 10, height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "#8360c3", fontSize: 32, fontWeight: "bold" }}>Home</Text>
                </View>
                <View style={{ width: "90%", marginLeft: "auto", marginRight: "auto", marginTop: 24 }}>
                    <Text style={{ color: "white", fontSize: 20, marginBottom: 16 }}>Search history</Text>
                    {!!previousSearches ?
                        previousSearches.map((search, index) => <View style={{marginBottom: 8}}><ArchiveItem key={index} item={search} navigation={navigation}/></View>)
                        : <Text>No history</Text>
                    }
                </View>
            </LinearGradient>
        </View >
    );
}

export default Home;