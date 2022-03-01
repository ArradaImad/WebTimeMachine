import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function Login({ login }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>Login</Text>
            <TextInput placeholder="Username or email" textContentType='username' style={styles.input} value={username} onChangeText={setUsername}/>
            <TextInput placeholder="Password" textContentType='password' secureTextEntry={true} style={styles.input} value={password} onChangeText={setPassword}/>
            <TouchableOpacity style={styles.submit} onPress={() => {login(true)}}>
                <Text style={styles.submitText}>Sign in</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        marginBottom: 24
    },
    input: {
        backgroundColor: "#eee",
        width: 260,
        height: 48,
        borderRadius: 6,
        paddingHorizontal: 12,
        marginBottom: 16
    },
    submit: {
        marginTop: 6,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#2ebf91',
    },
    submitText: {
        color: 'white',
        fontSize: 20
    }
});

export default Login;