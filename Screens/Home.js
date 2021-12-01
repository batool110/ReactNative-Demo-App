
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Share, ScrollView, SafeAreaView } from 'react-native';
import Rate, { AndroidMarket } from 'react-native-rate'

export default class Home extends React.Component {

    constructor(props) {
        super(props)

        this.moveScreen = this.moveScreen.bind(this)
        this.moveToAbout = this.moveToAbout.bind(this)
        this.moveToSchedule = this.moveToSchedule.bind(this)
        this.moveToAlaram = this.moveToAlaram.bind(this)
        this.moveToPostAPI = this.moveToPostAPI.bind(this)
        this.moveToGetAPI = this.moveToGetAPI.bind(this)
    }

    moveScreen() {
        let item = {
            name: this.props.navigation.state.params.item.name,
            email: this.props.navigation.state.params.item.email
        }
        this.props.navigation.navigate("Profile", { item: item });
    }

    moveToAbout() {
        this.props.navigation.navigate("About");
    }

    moveToSchedule() {
        this.props.navigation.navigate("Schedule");
    }

    moveToAlaram() {
        this.props.navigation.navigate("Alaram");
    }

    moveToPostAPI() {
        this.props.navigation.navigate("PostAPI");
    }

    moveToGetAPI() {
        this.props.navigation.navigate("APICall");
    }

    rateUs = () => {
        const options = {
            AppleAppID: "2193813192",
            GooglePackageName: "ae.sharjah24.mobile",
            AmazonPackageName: "com.mywebsite.myapp",
            OtherAndroidURL: "http://www.randomappstore.com/app/47172391",
            preferredAndroidMarket: AndroidMarket.Google,
            preferInApp: false,
            openAppStoreIfInAppFails: true,
            fallbackPlatformURL: "http://www.mywebsite.com/myapp.html",
        }
        Rate.rate(options, (success, errorMessage) => {
            if (success) {
                // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
                this.setState({ rated: true })
            }
            if (errorMessage) {
                // errorMessage comes from the native code. Useful for debugging, but probably not for users to view
                console.error(`Example page Rate.rate() error: ${errorMessage}`)
            }
        })
    }

    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'The standard Lorem Ipsum passage, used since the 1500s.',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>

                        <View View style={styles.row}>
                            <View style={styles.avatar}>
                                <View style={styles.avatar2}>
                                    <Image
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbpkF0b9eFan4Bx2zVo1w-nUFbWYi0woJRAnFHg_v9AXKciq5B0jr-bIWQuMEkhy8nZ8&usqp=CAU' }}
                                        style={{ width: 80, height: 80, borderRadius: 40 }}
                                    />
                                </View>
                            </View>
                            <View style={{ margin: 20 }}>
                                <Text style={styles.h1}>{this.props.navigation.state.params.item.name}</Text>
                                <Text style={styles.h3}>Flutter Developer</Text>
                            </View>

                        </View>

                        <View style={styles.row}>
                            <TouchableOpacity onPress={this.moveScreen}>
                                <View style={styles.box}>
                                    <Image
                                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png' }}
                                        style={{ width: 80, height: 80 }}
                                    />
                                    <Text style={styles.text}>Profile</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.moveToAbout}>
                                <View style={styles.box}>
                                    <Image
                                        source={{ uri: 'https://as2.ftcdn.net/v2/jpg/02/02/23/29/500_F_202232906_fVfquuX6FgAheB6YZOzjAa8PxDM7jE3E.jpg' }}
                                        style={{ width: 80, height: 80 }}
                                    />
                                    <Text style={styles.text}>About</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.row}>
                            <TouchableOpacity onPress={this.moveToSchedule}>
                                <View style={styles.box}>
                                    <Image
                                        source={{ uri: 'https://as1.ftcdn.net/v2/jpg/01/44/85/80/500_F_144858067_WIv2QXeEFDPXhIigh6nqMDLDAUBiTynq.jpg' }}
                                        style={{ width: 80, height: 80 }}
                                    />
                                    <Text style={styles.text}>Schedule</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.moveToAlaram}>
                                <View style={styles.box}>
                                    <Image
                                        source={{ uri: 'https://as1.ftcdn.net/v2/jpg/02/65/47/34/500_F_265473454_2JKTdzD2lDNt9XvsBaZODzWLXDXkQaLI.jpg' }}
                                        style={{ width: 90, height: 90 }}
                                    />
                                    <Text style={styles.text}>Alarams</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.row}>
                            <TouchableOpacity onPress={this.moveToGetAPI}>
                                <View style={styles.box}>
                                    <Image
                                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2906/2906274.png' }}
                                        style={{ width: 80, height: 80 }}
                                    />
                                    <Text style={styles.text}>GET API</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.moveToPostAPI}>
                                <View style={styles.box}>
                                    <Image
                                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2920/2920231.png' }}
                                        style={{ width: 80, height: 80 }}
                                    />
                                    <Text style={styles.text}>POST API</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.row}>
                            <TouchableOpacity onPress={this.rateUs}>
                                <View style={styles.box}>
                                    <Image
                                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1484/1484560.png' }}
                                        style={{ width: 80, height: 80 }}
                                    />
                                    <Text style={styles.text}>Rate Us</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.onShare}>
                                <View style={styles.box}>
                                    <Image
                                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5894/5894371.png' }}
                                        style={{ width: 80, height: 80 }}
                                    />
                                    <Text style={styles.text}>Share Us</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 70,
        overflow: 'hidden',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    avatar2: {
        width: 95,
        height: 95,
        borderRadius: 70,
        overflow: 'hidden',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 150,
        padding: 20,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        // marginTop: 170,
    },
    text: {
        fontWeight: '800',
        color: 'grey',
        fontSize: 18,
        marginTop: 20,
    },
    h1: {
        fontSize: 22,
        fontWeight: '700',
        // margin: 20,
    },
    h3: {
        fontSize: 17,
        fontWeight: '700',
        color: 'grey',
        // marginTop: 20,
        // marginBottom: 20,
    },
});
