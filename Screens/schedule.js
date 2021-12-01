import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';

export default class Schedule extends React.Component {

    render() {
        const width = Dimensions.get('window').width;

        return <View style={styles.container}>
            <View style={styles.row}>
                <View style={{ flex: 1, marginLeft: 10}}>
                    <Text style={styles.h1}>2</Text>
                    <Text style={styles.text}>Sep</Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ flex:5, justifyContent: 'center', }}>
                <View style={styles.eventRow1}>
                        <View style={{flex: 2}}>
                            <Text style={styles.specialEventText}>HR Onboarding</Text>
                        </View>
                        <View style={styles.timeRow}>
                            <Text style={styles.SpecialTimeText}>8:00 AM</Text>
                        </View>
                    </View>
                    <View style={styles.eventRow}>
                        <View style={{flex: 2}}>
                            <Text style={styles.eventText}>Visit to Bank - For Account Opening</Text>
                        </View>
                        <View style={styles.timeRow}>
                            <Text style={styles.timeText}>3:00 PM</Text>
                        </View>
                    </View>
                    <View style={styles.eventRow}>
                        <View style={{flex: 2}}>
                            <Text style={styles.eventText}>Contract Signing</Text>
                        </View>
                        <View style={styles.timeRow}>
                            <Text style={styles.timeText}>6:00 PM</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* 2nd Day */}
            <View style={styles.row}>
                <View style={{ flex: 1, marginLeft: 10}}>
                    <Text style={styles.h1}>17</Text>
                    <Text style={styles.text}>Sep</Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ flex:5, justifyContent: 'center', }}>
                <View style={styles.eventRow2}>
                        <View style={{flex: 2}}>
                            <Text style={styles.specialEventText}>Mavenlink Training</Text>
                        </View>
                        <View style={styles.timeRow}>
                            <Text style={styles.SpecialTimeText}>11:00 AM</Text>
                        </View>
                    </View>
                    <View style={styles.eventRow}>
                        <View style={{flex: 2}}>
                            <Text style={styles.eventText}>Catch up Android Team</Text>
                        </View>
                        <View style={styles.timeRow}>
                            <Text style={styles.timeText}>5:00 PM</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* 2nd Day */}
            <View style={styles.row}>
                <View style={{ flex: 1, marginLeft: 10}}>
                    <Text style={styles.h1}>29</Text>
                    <Text style={styles.text}>Sep</Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ flex:5, justifyContent: 'center', }}>
                <View style={styles.eventRow3}>
                        <View style={{flex: 2}}>
                            <Text style={styles.specialEventText}>Annual Picnic</Text>
                        </View>
                        <View style={styles.timeRow}>
                            <Text style={styles.timeText}></Text>
                        </View>
                    </View>
                    <View style={styles.eventRow}>
                        <View style={{flex: 2}}>
                            <Text style={styles.eventText}>Departure</Text>
                        </View>
                        <View style={styles.timeRow}>
                            <Text style={styles.timeText}>9:00 AM</Text>
                        </View>
                    </View>
                    <View style={styles.eventRow}>
                        <View style={{flex: 2}}>
                            <Text style={styles.eventText}>Arrival</Text>
                        </View>
                        <View style={styles.timeRow}>
                            <Text style={styles.timeText}>11:00 PM</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* 2nd Day */}
            <View style={styles.row}>
                <View style={{ flex: 1, marginLeft: 10}}>
                    <Text style={styles.h1}>31</Text>
                    <Text style={styles.text}>Sep</Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ flex:5, justifyContent: 'center', }}>
                <View style={styles.eventRow4}>
                        <View style={{flex: 2}}>
                            <Text style={styles.specialEventText}>Global Meeting</Text>
                        </View>
                        <View style={styles.timeRow}>
                            <Text style={styles.SpecialTimeText}>4:30 PM</Text>
                        </View>
                    </View>
                    
                </View>
            </View>

        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
        // width: Dimensions.get('window').width / 1.1,
    },
    line:{
        backgroundColor: '#d0cdd1',
        marginRight: 10,
        width: 1,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    timeRow: {
        justifyContent: 'center',
    },
    eventRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: '#cfccce',
        padding: 15,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },
    eventRow1: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: '#bd56f0',
        padding: 15,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },
    eventRow2: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: '#f09235',
        padding: 15,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },
    eventRow3: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: '#067d46',
        padding: 15,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },
    eventRow4: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: '#7d064f',
        padding: 15,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },
    eventText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#545354',
        borderRadius: 20,
    },
    specialEventText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        borderRadius: 20,
    },
    timeText: {
        fontWeight: '800',
        color: '#545354',
        fontSize: 11,
    },
    SpecialTimeText: {
        fontWeight: '800',
        color: 'white',
        fontSize: 11,
    },
    text: {
        fontWeight: '800',
        color: 'grey',
        fontSize: 16,
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