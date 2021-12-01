import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import axios from 'axios';

export default class APICall extends React.Component {
    _isMounted = false;

    constructor() {
        super();

        this.state = {
            dataList: []
        }
    }

    componentDidMount() {
        this._isMounted = true;

        this.apiCall();
    }

    async apiCall() {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // handle success
                //   alert(JSON.stringify(response.data));

                const data = response.data;
                this.setState({ dataList: data });

            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            });
        // .finally(function () {
        //     // always executed
        //     alert('Finally called');
        // });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return <View style={{ height: 700, }}>

            <FlatList
                data={this.state.dataList}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.listItem}>
                            <View style={styles.row}>
                                <View style={styles.avatar}>

                                    <Image
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbpkF0b9eFan4Bx2zVo1w-nUFbWYi0woJRAnFHg_v9AXKciq5B0jr-bIWQuMEkhy8nZ8&usqp=CAU' }}
                                        style={{ width: 50, height: 50, borderRadius: 68 }}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.h1}>{item.name}</Text>
                                    <Text>Email: {item.email}</Text>
                                    <Text>Phone: {item.phone}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
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