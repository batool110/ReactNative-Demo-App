import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper'

import auth from '@react-native-firebase/auth';

class Login extends React.Component {
    // const [text, setText] = React.useState('');
    // const [password, setPassword] = React.useState('');
    // const [name, setName] = React.useState('');

    constructor() {
        super();

        this.moveScreen = this.moveScreen.bind(this)
        this.moveToRegister = this.moveToRegister.bind(this)
    }

    moveScreen(fname, email, pass) {

        auth()
            .signInWithEmailAndPassword(email, pass)
            .then(() => {
                console.log('User account created!');
                let item = {
                    name: fname,
                    email: email,
                }
                this.props.navigation.navigate("Home", { item: item });
            })
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    alert('The email address is not in our record!');
                } else if (error.code === 'auth/wrong-password') {
                    alert('Invalid Password!');
                } else{
                    alert(error);
                }
                // alert(error.message);
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

    moveToRegister() {
        this.props.navigation.navigate("Register");
    }

    // onFormSubmit() {
    //     console.log("Form Submitted");
    // }

    state = {
        fname: '',
        email: '',
        password: ''
    }
    handleName = (text) => {
        this.setState({ fname: text })
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
                    label="Full Name"
                    // value={this.state.name}
                    onChangeText={this.handleName}
                    theme={{ colors: { primary: 'red', background: 'white' } }}
                />

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
                onPress={() => this.moveScreen(this.state.fname, this.state.email, this.state.password)}
            >
                Login
            </Button>
            <View style={styles.row}>
                <Text>Don't have an account?? </Text>
                <TouchableOpacity onPress={this.moveToRegister}>
                    <Text style={{ color: '#0384fc' }}>Register here</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    }
}

export default Login

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
        marginBottom: 260,
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
