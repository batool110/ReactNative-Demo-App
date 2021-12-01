import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import { connect } from 'react-redux';
import { changeCount } from '../actions/counts';
import env from '../../../src/env';

class Counter extends React.Component {
    // const [text, setText] = React.useState('');
    // const [password, setPassword] = React.useState('');
    // const [name, setName] = React.useState('');

    decrementCount = () => {
        let { count } = this.props;
        count--;
        this.props.componentChange(count);
    }

    incrementCount = () => {
        let { count } = this.props;
        count++;
        this.props.componentChange(count);
    }

    render() {
        const { count } = this.props;

        let envn = __DEV__ ? env.DEV_API_TOKEN : env.PROD_API_TOKEN;

        console.log('__Dev__' + __DEV__)
        console.log(env)

        return <SafeAreaView style={styles.container}>
            <View>
                <Text style={{ fontSize: 20 }}>{envn}</Text>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968966.png' }}
                    style={{ height: 120, width: 120, alignSelf: 'center', }} />
            </View>

            <View style={{ alignSelf: 'center', }}>
                <Text style={{ fontSize: 50 }}>{count}</Text>
            </View>

            <View style={styles.row}>
                <Button
                    color='red'
                    labelStyle={{ color: "white", fontSize: 50 }}
                    style={{ width: 60, height: 80 }} mode="contained"
                    onPress={() => this.incrementCount()}
                >
                    +
                </Button>

                <Button
                    color='red'
                    labelStyle={{ color: "white", fontSize: 50 }}
                    style={{ width: 60, height: 80 }} mode="contained"
                    onPress={() => this.decrementCount()}
                >
                    -
                </Button>
            </View>


        </SafeAreaView>

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
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
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});


// const mapStateToProps = state => ({
//     count: state.count,
//   });

//   const ActionCreators = Object.assign(
//     {},
//     changeCount,
//   );
//   const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(ActionCreators, dispatch),
//   });

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        componentChange: (value) => dispatch(changeCount(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//   export default connect(mapStateToProps, mapDispatchToProps)(Counter)