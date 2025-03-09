import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text,StyleSheet,TouchableOpacity} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function AdminProjects(navigation ){

    return(
        <>
            <View >
                <Text style={styles.mainContainerTitle}>Administrar Proyecto</Text>
            </View>

            <View style={styles.adminContainer}>
                <Text style={styles.title}>Seleccione proyecto:</Text>
                <Text style={styles.title} >Seleccione usuario:</Text>
                <View style={styles.btnAdminContainer} >
                    <TouchableOpacity >
                        <View style={styles.btnAdmin}>
                            <Icon
                                style={styles.containerIconSetting}
                                name="add-outline"
                                size={30}
                                color="#EE964B"
                            />
                            <Text style={styles.btnAdminText} title="Agregar" >Agregar</Text>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity > 
                        <View style={styles.btnAdmin}>
                            <Icon
                                style={styles.containerIconSetting}
                                name="trash-outline"
                                size={30}
                                color="#EE964B"
                            />
                            
                        <Text style={styles.btnAdminText} title="Eliminar">Eliminar</Text>
                        </View>
                    </TouchableOpacity> 
                </View>

            </View>
        
        </>
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
        letterSpacing:1
    },
    mainContainerTitle:{
        fontSize:20,
        fontWeight:600,
        color:"#EE964B",
        alignSelf:"center",
        paddingTop:20 
    },
    adminContainer:{
        width: wp('90%'),
        alignSelf:"center",
        paddingTop:20
    },

    btnAdminContainer:{
        width: wp('90%'),
        flexDirection:"row",
        justifyContent:'space-around',
        alignSelf:"center",
        paddingTop:30
    },
    btnAdmin:{
        backgroundColor:"#F5F6FB",
        width: wp('40%'),
        paddingRight:10,
        paddingLeft:10,
        paddingBottom:10,
        paddingTop:10,
        borderRadius:8,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        elevation:6

    },
    btnAdminText:{
        color:"#EE964B",
        fontSize:18,
        fontWeight:500
    },
    title:{
        color:"#EE964B",
        fontSize:16,
        fontWeight:400
    }




});