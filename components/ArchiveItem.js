import { Button, Text,  View } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function ArchiveItem({ item, navigation }) {

    const handleClickResult = async () => {
        try {
            let res = await WebBrowser.openBrowserAsync(item?.archived_snapshots?.closest?.url);
        } catch {
            console.log("error");
        }
    }

    const handleClickDetails = async () => {
        navigation.push("Details", {name: item.url, item: item});
    };

    let available;
    if (item.archived_snapshots.closest.available) {
        available = <AntDesign name="checkcircle" size={16} color="green" />
    } else {
        available = <Entypo name="circle-with-cross" size={16} color="red" />
    }

    let date = item.timestamp.slice(6,8) + '/' + item.timestamp.slice(4,6) + '/' + item.timestamp.slice(0,4);

    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 24, width: "100%", backgroundColor: "white", borderRadius: 10 }}>
            <AntDesign name="link" size={24} color="gray" style={{ marginRight: 8}} onPress={handleClickDetails}/>
            <Text style={{ marginRight: 8}}>{item.url}</Text>
            <Text style={{ marginRight: 8}}>{date}</Text>
            <Text style={{ marginRight: 8}}>{available}</Text>
            <Feather name="external-link" size={24} color="gray" onPress={handleClickResult}/>
        </View>
    );
}

export default ArchiveItem;