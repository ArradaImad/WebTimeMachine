import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { LinearGradient } from 'expo-linear-gradient';
import { archiveService } from "../services/archive";
import ArchiveItem from "../components/ArchiveItem";

function Search({ navigation }) {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [url, setUrl] = useState("");
    const [results, setResults] = useState(null);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    const handleSubmit = async () => {
        let response = await archiveService.getArchive(url,archiveService.cleanTimestamp(date));
        if (response) {
            setResults(response);
            await archiveService.saveSearch("@search", response);
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LinearGradient
                colors={['#8360c3', '#2ebf91']}
                style={{ width: "100%", flex: 1, justifyContent: 'center', alignItems: 'center'  }}
            >
                <View style={{ width: "100%", marginTop: 32 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 4, width: "100%", borderColor: "white", borderRadius: 50, borderWidth: 2 }}>
                        <TouchableOpacity
                            onPress={showDatepicker}
                            style={{ backgroundColor: "white", borderTopLeftRadius: 50, borderBottomLeftRadius: 50, padding: 14, width: 80, alignItems: 'center', marginRight: 16 }}
                        >

                            <Text style={{ color: "gray" }}>Date</Text>

                        </TouchableOpacity>
                        <Text style={{ color: 'white' }}>{date.toLocaleString()}</Text>
                    </View>
                    {show && <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                    }
                </View>
                <View style={{ width: "100%", marginTop: 16 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 4, width: "100%", borderColor: "white", borderRadius: 50, borderWidth: 2 }}>
                        <Text
                            style={{ color: 'gray', textAlign: 'center', backgroundColor: "white", borderTopLeftRadius: 50, borderBottomLeftRadius: 50, padding: 14, width: 80, alignItems: 'center', marginRight: 16 }}
                        >
                            Https
                        </Text>
                        <TextInput 
                            value={url}
                            onChangeText={setUrl}
                            textContentType="URL"
                            style={{ color: 'white', width: '100%' }}
                        />
                    </View>
                </View>
                <View style={{ width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
                    <TouchableOpacity 
                        onPress={handleSubmit}
                        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 4, width: 128, backgroundColor: "white", borderRadius: 50 }}
                    >
                        <Text style={{ padding: 16, textAlign: 'center'}}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>

                {results && <View style={{flex: 1, padding: 16}}>
                    <ArchiveItem item={results} navigation={navigation}/>
                </View>}
            </LinearGradient>
        </View >
    );
}

export default Search;