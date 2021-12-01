import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import { TextInput, Button } from 'react-native-paper';
import moment from "moment";

export default class PostAPI extends React.Component {
    state = {
        name: '',
        data: {},
        resName: '',
        job: '',
        resJob: '',
    }

    handleName = (text) => {
        this.setState({ 
            name: text  
        })
     }

     handleJob = (text) => {
        this.setState({ 
            job: text  
        })
     }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
            job: this.state.job
        };

        axios.post(`https://reqres.in/api/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
                const resData = res.data;

                this.setState({ data: resData, resName: resData.user});

            })
    }

    render() {
        return (
            <View style={{margin: 30}}>
                <TextInput style={styles.inputStyle}
                    label="Name"
                    onChangeText = {this.handleName}
                    theme={{ colors: { primary: 'red', background: 'white' } }}
                />
                <TextInput style={styles.inputStyle, {marginBottom: 40}}
                    label="Job"
                    onChangeText = {this.handleJob}
                    theme={{ colors: { primary: 'red', background: 'white' } }}
                />

                <Button styles={{with: 100}} color='red' onPress={this.handleSubmit}> Submit </Button>

                
                <Text style={{marginTop: 40}}>ID: {this.state.data.id}</Text>
                <Text>Name: {this.state.resName.name}</Text>
                <Text>Job Title: {this.state.resName.job}</Text>
                <Text>Created At: {moment(this.state.data.createdAt).utc().format('MMMM Do YYYY, h:mm:ss a')}</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 20,
    },
    h1: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 6,
        alignSelf: 'flex-start',
        color: 'red',
    },
    inputStyle: {
        underlineColor: 'red',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
    },
    listItem: {
        padding: 10,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: 'white',
    }
})