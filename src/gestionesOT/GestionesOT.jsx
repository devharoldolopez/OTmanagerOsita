import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text,StyleSheet,FlatList,TouchableOpacity} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Input from "../components/InputSearch";
import { useEffect, useState } from "react";



export default function GestionesOT({ route,navigation }){

    const { projectName } = route.params;
    const [gestiones,setGestiones] = useState([]);


        useEffect(()=>{
            const gestionesExample = [
                {
                    id:"1",
                    name:"OT 1",
                    createdAt:"2025-02-18 01:09:494"
                },
                {
                    id:"2",
                    name:"OT 2",
                    createdAt:"2025-02-18 02:09:494"
                },
                {
                    id:"3",
                    name:"OT 2",
                    createdAt:"2025-02-18 02:09:494"
                },
                {
                    id:"4",
                    name:"OT 2",
                    createdAt:"2025-02-18 02:09:494"
                },            {
                    id:"5",
                    name:"OT 2",
                    createdAt:"2025-02-18 02:09:494"
                },            {
                    id:"6",
                    name:"OT 2",
                    createdAt:"2025-02-18 02:09:494"
                }
    
            ]
            setGestiones(gestionesExample)
        },[])
    
        const renderItem = ({item}) => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate("Editor OT",{otName:item.name})}>
                    <View style={styles.listaContainerItem} >
                    <View style={styles.banda}></View>
                        <View>
                            <Text style={styles.listaContainerItemNombre}>{item.name}</Text>
                            <Text style={styles.listaContainerItemFecha}>Fecha de creación:</Text>
                            <Text style={styles.listaContainerItemInfo}>{item.createdAt}</Text>
                        </View>
                    </View>

                </TouchableOpacity>
                
            )
        }

    return(
        <View style={styles.container}>
            <View style={styles.container90}>

                <Text style={styles.containerText} >OT del proyecto {projectName} </Text>

                <View style={styles.containerProyectos}>
                    <View style={styles.containerProyectosBuscar}>
                        <Input title={"Buscar OT"} style={styles.containerProyectosInput}></Input>
                    </View>
                    <View style={styles.containerListado}>
                        <FlatList
                            data={gestiones}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
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
        justifyContent:"spaceBetween",
        paddingTop:40
    },
    container90:{
        width: wp('90%')
    },



    containerText:{
        fontSize:20,
        height:70,
        marginTop:10,
        color:"#06BCC1",
        fontWeight:500, 
        alignSelf:"center",
        letterSpacing:1
    },

    containerListado:{
        backgroundColor:"#F5F6FB",
        width: wp('90%'),
        height:550,
        borderRadius: 12,
        paddingTop:10,
        paddingBottom:10
    },
    listaContainerItem:{
        width: wp('80%'),
        backgroundColor:"white",
        alignSelf:"center",
        marginTop:5,
        marginBottom:5,
        padding:10,
        borderRadius: 10,
        elevation:3,
        flexDirection:"row",
    },
    listaContainerItemNombre:{
        fontWeight:600,
        fontSize:18,
        color:"#06BCC1",
        letterSpacing:0.5
    },
    listaContainerItemFecha:{
        fontWeight:400,
        fontSize:15,
        color:"#011C27"
    },
    listaContainerItemInfo:{
        fontWeight:400,
        fontSize:13,
        color:"#06BCC1",
        alignSelf:"flex-end"
    },
    iconBack:{
        alignSelf:"flex-start",

        marginTop:20
    },
    banda:{
        backgroundColor:"#06BCC1",
        width:10,
        borderRadius:10,
        marginRight:15
    }






});