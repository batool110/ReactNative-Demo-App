// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class Profile extends React.Component {
     

//     constructor(props) {
//         super(props)
        

//         this.state  = {
//             userN : ''
//         }
    
//     }

//     componentDidMount (){
//         const data = this.props.navigation.state.params.item;
        
//         // userN = data.name;
//         // console.log(this.userN)
//     }
//    render() {
//       return (
//          <View style = {styles.container}>
//             <Text>{this.props.navigation.state.params.item.name}</Text>
//          </View>
//       );
//    }
// }

// const styles = StyleSheet.create({
//    container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//    },
// });

import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image } from 'react-native';

class Profile extends React.Component {
    render() {
      return <View style={styles.container}>
        <View style={styles.avatar}>
  
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbpkF0b9eFan4Bx2zVo1w-nUFbWYi0woJRAnFHg_v9AXKciq5B0jr-bIWQuMEkhy8nZ8&usqp=CAU' }}
            style={{ width: 130, height: 130, borderRadius: 68 }}
          />
        </View>
        <Text style={styles.h1}>{this.props.navigation.state.params.item.name}</Text>
        <Text>{this.props.navigation.state.params.item.email}</Text>
        <Text style={styles.h3}>Flutter Developer</Text>
        <View style={styles.textLable}>
          <Text style={{ color: 'white', fontWeight: '700' }}>Hybrid Application</Text>
        </View>
  
        <View style={styles.row}>
          <View style={styles.iconCircleBlue}>
  
            <Image
              source={{ uri: 'https://www.pngkit.com/png/full/14-146161_white-location-icon-png-location-logo-png-white.png' }}
              style={{ width: 22, height: 28 }}
            />
          </View>
          <View style={styles.iconCircleYellow}>
  
            <Image
              source={{ uri: 'https://www.nicepng.com/png/full/34-347733_world-white-icon-png.png' }}
              style={{ width: 27, height: 27 }}
            />
          </View>
          <View style={styles.iconCirclePurple}>
  
            <Image
              source={{ uri: 'https://www.mtctutorials.com/wp-content/uploads/2019/04/call-png-white-icon-logo-294x300.png' }}
              style={{ width: 27, height: 27 }}
            />
          </View>
        </View>
  
      </View>;
    }
  }

  export default Profile;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatar: {
      width: 140,
      height: 140,
      borderRadius: 70,
      overflow: 'hidden',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textLable: {
      width: 200,
      height: 30,
      marginTop: 30,
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    h1: {
      fontSize: 22,
      fontWeight: '700',
      marginTop: 20,
    },
    h3: {
      fontSize: 17,
      fontWeight: '700',
      color: 'grey',
      marginTop: 20,
      marginBottom: 20,
    },
    iconCircleBlue: {
      width: 60,
      height: 60,
      borderRadius: 30,
      overflow: 'hidden',
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      // marginLeft: 20,
    },
    iconCircleYellow: {
      width: 60,
      height: 60,
      borderRadius: 30,
      overflow: 'hidden',
      backgroundColor: 'coral',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 30,
    }, 
    iconCirclePurple: {
      width: 60,
      height: 60,
      borderRadius: 30,
      overflow: 'hidden',
      backgroundColor: 'purple',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 30,
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 170,
    },
  });