import AsyncStorage from '@react-native-async-storage/async-storage';

export const archiveService = {
    cleanTimestamp: (date) => {
        let timestamp = date.toISOString().replace(/[\/-\s,:T]/g, "").split(".")[0];
        return timestamp;
    },

    getArchive: async (url, timestamp) => {
        const options = {
            method: "GET",
            headers: { "Content-type": "application/json" },
        }
        return fetch(`https://archive.org/wayback/available?url=${url}&timestamp=${timestamp}`, options)
            .then(data => data.json(), (err) => err);
    },

    saveSearch: async (key, value) => {
        try {
            let listOfSearch = await AsyncStorage.getItem(key);
            listOfSearch = JSON.parse(listOfSearch); 
            if (!Array.isArray(listOfSearch)) {
                listOfSearch = [];
            }
            listOfSearch.push(value);
            await AsyncStorage.setItem(key, JSON.stringify(listOfSearch));
        } catch (e) {
            // saving error
            console.log("Error:", e)
        }
    },

    getSearch: async (key) => {
        try {
            const jsonValue = await AsyncStorage.getItem(key)
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
            console.log(e);
        }
    }
}