import { WebView } from 'react-native-webview';
import { Text, View } from "react-native";

// TODO : Debug Webview no error crash : https://javascript.plainenglish.io/4-problems-that-you-need-to-know-before-using-react-native-webview-d1d6ef803347
function Details({ route, navigation }) {
    return (
        <View>
            <Text>{route.params.name}</Text>
            <Text>{JSON.stringify(route.params.item)}</Text>
            {/* <WebView
                style={{ width: 300, height: 400}}
                source={{ uri: route.params.item.archived_snapshots.closest.url }}
            /> */}
        </View>
    );
}

export default Details;