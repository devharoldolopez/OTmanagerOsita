import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text,StyleSheet,FlatList, Button, TouchableOpacity} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Input from "../components/InputSearch";
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from "react";

export default function Projects({ navigation }) {
    const Stack = createStackNavigator();
    const [projects, setProjects] = useState([]);

    const btnLoginStyles = [styles.btnLogin];

    useEffect(() => {
        const projectsExample = [
            {
                id: "1",
                name: "Proyecto Oso",
                createdAt: "2025-02-18 01:09:494",
            },
            {
                id: "2",
                name: "Proyecto 2",
                createdAt: "2025-02-18 02:09:494",
            },
            {
                id: "3",
                name: "proyecto 3",
                createdAt: "2025-02-18 02:09:494",
            },
            {
                id: "4",
                name: "proyecto 4",
                createdAt: "2025-02-18 02:09:494",
            },
            {
                id: "5",
                name: "proyecto 5",
                createdAt: "2025-02-18 02:09:494",
            },
            {
                id: "6",
                name: "proyecto 6",
                createdAt: "2025-02-18 02:09:494",
            },
        ];
        setProjects(projectsExample);
    }, []);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("Lista de OT's",{projectName:item.name })}>
                <View style={styles.listaContainerItem}  >
                    <View style={styles.banda}></View>
                    <View>
                        <Text style={styles.listaContainerItemNombre}>{item.name}</Text>
                        <Text style={styles.listaContainerItemFecha}>Fecha de creación:</Text>
                        <Text style={styles.listaContainerItemInfo}>{item.createdAt}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.container90}>
                <View style={styles.containerProyectos}>
                    <View style={styles.containerProyectosBuscar}>
                        <Input title={"Buscar proyecto"} style={styles.containerProyectosInput}></Input>
                    </View>

                    <View style={styles.containerListado}>
                        <FlatList data={projects} renderItem={renderItem} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: wp('100%'), 
        height: hp('100%'),
        display:"flex",
        flexFlow:"column",
        alignItems:"center",
        justifyContent:"spaceBetween",
        paddingTop:50,

    },
    container90:{
        width: wp('90%')
    },
    containerIcon:{
        height:60,
        justifyContent:"space-between",
        alignItems:"flex-start",
        width: wp('90%'),
        flexDirection:"row"

    },

    btnLogin: {
        flex:1,
        backgroundColor:"#00CECB",

    },
    containerListaTitle:{
        color:"#F2F4F8",
        fontSize:16,
        fontWeight:400,
        alignSelf:"center",
        paddingBottom:20,
        paddingTop:20
    
    },
    containerListado:{
        backgroundColor:"#F5F6FB",
        width: wp('90%'),
        height:600,
        borderRadius: 12,
        paddingTop:10,
        paddingBottom:10,


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
        fontWeight:500,
        fontSize:18,
        color:"#06BCC1",
        letterSpacing:0.5
    },
    listaContainerItemFecha:{
        fontWeight:400,
        fontSize:15,
        color:"black",

    },
    listaContainerItemInfo:{
        fontWeight:400,
        fontSize:13,
        color:"#06BCC1",
        alignSelf:"flex-start"
    },
    banda:{
        backgroundColor:"#06BCC1",
        width:10,
        borderRadius:10,
        marginRight:15
    }






});