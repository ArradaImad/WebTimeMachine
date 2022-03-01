import { Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function About() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LinearGradient
                colors={['#8360c3', '#2ebf91']}
                style={{ width: "100%", flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                <View style={{ width: "90%", marginLeft: "auto", marginRight: "auto", backgroundColor: "white", borderRadius: 10, height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "#8360c3", fontSize: 32, fontWeight: "bold" }}>About</Text>
                </View>
            </LinearGradient>
        </View >
    );
}

export default About;