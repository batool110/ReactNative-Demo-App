import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper'

import auth from '@react-native-firebase/auth';

export default class Register extends React.Component {
    // const [text, setText] = React.useState('');
    // const [password, setPassword] = React.useState('');
    // const [name, setName] = React.useState('');

    constructor() {
        super();

        this.moveScreen = this.moveScreen.bind(this)
        this.moveToLogin = this.moveToLogin.bind(this)
    }

    moveToLogin() {
        this.props.navigation.navigate("Login");
    }

    moveScreen(email, pass) {

        auth()
            .createUserWithEmailAndPassword(email, pass)
            .then(() => {
                console.log('User account created!');
                let item = {
                    email: email,
                }
                this.props.navigation.navigate("Login", { item: item });
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                console.log(error);
            });

        // if (pass == '123456') {
        //     let item = {
        //         name: fname,
        //         email: email,
        //     }
        //     this.props.navigation.navigate("Home", { item: item });
        // } else {
        //     alert('Name: ' + fname + ' email: ' + email + ' password: ' + pass + '\n \n Password should be 123456')
        // }

    }

    // onFormSubmit() {
    //     console.log("Form Submitted");
    // }

    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }

    render() {

        return <SafeAreaView style={styles.container}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968966.png' }}
                style={{ height: 120, width: 120 }} />
            <View style={styles.input}>
                <TextInput style={styles.inputStyle}
                    label="Email"
                    // value={this.state.email}
                    onChangeText={this.handleEmail}
                    theme={{ colors: { primary: 'red', background: 'white' } }}
                />
                <TextInput style={styles.inputStyle}
                    label="Password"
                    // value={this.state.password}
                    secureTextEntry={true}
                    onChangeText={this.handlePassword}
                    theme={{ colors: { primary: 'red', background: 'white' } }}
                />
            </View>
            <Button
                color='red'
                style={{ width: Dimensions.get('window').width / 1.2 }} mode="contained"
                onPress={() => this.moveScreen(this.state.email, this.state.password)}
            >
                Register
            </Button>
            <View style={styles.row}>
                <Text>Already have an account?? </Text>
                <TouchableOpacity onPress={this.moveToLogin}>
                    <Text style={{ color: '#0384fc' }}>Login Here</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        marginTop: 90,
        width: Dimensions.get('window').width / 1.2,
        marginBottom: 190,
    },
    inputStyle: {
        underlineColor: 'red',
        marginBottom: 20,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 30,
        marginBottom: 50,
    },
});
