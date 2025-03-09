import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { View,Text,StyleSheet,Image, Button} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Stack = createStackNavigator();


export default function Login({navigation}){


    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Text style={styles.mainContainerText}>Bienvenido</Text>
                <Image source={require('../assets/images/login.png')} style={{ width: 250, height: 250 }} />

                    <View >
                        <Text style={styles.btnLogin} title="Iniciar Sesión" onPress={() => navigation.navigate('Projects')}>Iniciar Sesión</Text>
                    </View>

                <Text style={styles.mainContainerTitle} >O+M Plus</Text>
            </View>
        </View>

    )
}



const styles = StyleSheet.create({
    container: {
        width: wp('100%'), 
        height: hp('100%'),
        display:"flex",
        flexFlow:"column",
        alignItems:"center",
        justifyContent:"center"

    },

    mainContainer:{
        width:"80%",
        height:"80%",
        display:"flex",
        flexFlow:"column",
        alignItems:"center",
        justifyContent:"space-between"
    },
    mainContainerText:{
        fontSize:20,
        fontStyle:"i",
        fontWeight:500,
        letterSpacing:0.5
    },
    mainContainerTitle:{
        fontSize:20,
        fontWeight:600,
        color:"#1E1E24",
        letterSpacing:0.5
    },
    btnLogin:{
        backgroundColor:"#06BCC1",
        paddingRight:70,
        paddingLeft:70,
        paddingBottom:20,
        paddingTop:20,
        borderRadius:8,
        color:"white",
        fontSize:18,
        elevation:6,
        letterSpacing:0.5

    },




});
