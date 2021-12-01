import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';
import { Button } from 'react-native-paper'

export default class Aalaram extends React.Component {

    render() {
        return <View style={styles.container}>
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1182/1182718.png' }}
                style={{ width: 120, height: 120 }}
            />
            <Text style={styles.h1}>Nothing Here!!...</Text>
            <Text style={styles.text}>Tap the notifications settings button below and check again.</Text>
            <Button
                color='red'
                style={{ width: Dimensions.get('window').width / 1.3, marginTop: 70, marginBottom: 7 }} mode="contained"
                onPress={() => alert('Button Pressed..')}
            >Notification Settings</Button>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        fontSize: 22,
        fontWeight: '700',
        marginTop: 25,
        color: 'grey'
    },
    text: {
        fontSize: 14,
        margin: 25,
        color: 'grey',
        textAlign: 'center',
        marginLeft: 40,
        marginRight: 40
    }
})