import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text,StyleSheet,FlatList, TouchableOpacity, Alert, Image} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from "react";

export default function AdjuntosOT({route,navigation }){
    const [projects,setProjects] = useState([]);

    const btnLoginStyles = [
        styles.btn
    ]
    const btnLoginStyles2 = [
        styles.btn2
    ]

    const img = '../assets/images/foto.jpg'

    const handleDelete = () => {
        Alert.alert(
            "Confirmar eliminación",
            "¿Estás seguro de que deseas eliminarlo?",
            [
            { text: "Cancelar", style: "cancel" },
            { text: "Sí", onPress: () => console.log("Elemento eliminado") }
            ]
        );
    }


    const { otName } = route.params;

    useEffect(()=>{
        const projetsExample = [
            {
                id:"1",
                name:"Foto 1",
                createdAt:"2025-02-18 01:09:494",
                state:"Cargado"
            },
            {
                id:"2",
                name:"Foto 2",
                createdAt:"2025-02-18 02:09:494",
                state:"Pendiente de carga"
            },
            {
                id:"3",
                name:"Foto 3",
                createdAt:"2025-02-18 02:09:494",
                state:"Cargado"
            },
            {
                id:"4",
                name:"Foto 4",
                createdAt:"2025-02-18 02:09:494",
                state:"Cargado"
            },            {
                id:"5",
                name:"Foto 5",
                createdAt:"2025-02-18 02:09:494",
                state:"Pendiente de carga"
            },            {
                id:"6",
                name:"Foto 6",
                createdAt:"2025-02-18 02:09:494",
                state:"Cargado"
            }

        ]
        setProjects(projetsExample)
    },[])

    const renderItem = ({item}) => {
        return (
            <View style={styles.listaContainerItem} >
                <View style={styles.listaContainerItemDiv1}>
                    <Image source={require(img)} style={{ width: 90, height: 90 }} />
                </View>
                <View style={styles.listaContainerItemDiv2}>

                    <Text style={styles.listaContainerItemFecha}>Fecha de creación:</Text>
                    <Text style={styles.listaContainerItemInfo}>{item.createdAt}</Text>
                    <Text style={styles.listaContainerItemFecha}>Estado del archivo:</Text>
                    <Text style={styles.listaContainerItemInfo}>{item.state}</Text>
                </View>
                <View style={styles.listaContainerItemDiv3}>
                    <TouchableOpacity onPress={() => navigation.navigate('Administración de proyectos')}>
                        <View style={styles.iconItem2} >
                            <Icon
                                name="cloud-upload"
                                size={20}
                                color="white"
                                
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDelete}>
                        <View style={styles.iconItemTrash} >
                            <Icon
                                name="trash"
                                size={20}
                                color="white"
                            />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Archivos {otName}</Text>
            <View style={styles.containerIcons}>
                <TouchableOpacity onPress={() => navigation.navigate('Administración de proyectos')}>
                    <View style={styles.iconItem} >
                        <Icon
                            name="document"
                            size={40}
                            color="white"
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Administración de proyectos')}>
                    <View style={styles.iconItem} >
                        <Icon
                            name="camera"
                            size={40}
                            color="white"
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Administración de proyectos')}>
                    <View style={styles.iconItem} >
                        <Icon
                            name="scan-circle"
                            size={40}
                            color="white"
                        />
                    </View>
                </TouchableOpacity>

                {/* <Button style={btnLoginStyles} title={<Icon name="document" size={30} color="white" style={styles.icon} />}></Button>
                <Button style={btnLoginStyles} title={<Icon name="camera" size={30} color="white" style={styles.icon} />}></Button>
                <Button style={btnLoginStyles} title={<Icon name="scan-circle" size={30} color="white" style={styles.icon} />}></Button> */}
            </View>
            <View style={styles.containerData}>
                <View style={styles.containerListado}>
                    <FlatList
                        data={projects}
                        renderItem={renderItem}
                    />
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
        justifyContent:"start",
        paddingTop:40

    },
    containerIcons:{
        flexDirection:"row",
        width: wp('60%'),
        justifyContent:"space-around",
        paddingTop:30
    },
    iconItem:{
        backgroundColor:"#06BCC1",
        borderRadius:5,
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        elevation:3
        
    },
    iconItem2:{
        backgroundColor:"#06BCC1",
        borderRadius:5,
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:2,
        elevation:2
        
    },

    iconItemTrash:{
        backgroundColor:"#EF476F",
        borderRadius:5,
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        elevation:2
    },

    containerData:{
        width: wp('90%'), 

    },
    btn: {
        backgroundColor:"#FCB07E",
        width: 60,
        borderRadius:10,
        height:60,
        marginLeft:10,
        alignSelf:"center"
    },
    btn2: {
        backgroundColor:"white",
        width: 55,
        borderRadius:10,
        height:50,
        alignSelf:"flex-end",

    },
    icon:{
        alignSelf:"center"
    },

    title:{
        fontSize:20,
        alignSelf:"center",
        paddingLeft:20,
        fontWeight:500,
        letterSpacing:1,
        color:"#06BCC1"
    },
    containerListado:{
        backgroundColor:"#F5F6FB",
        width: wp('90%'),
        height:550,
        borderRadius: 20,
        paddingTop:10,
        paddingBottom:10,
        marginTop:40
    },

    listaContainerItem:{
        width: wp('85%'),
        backgroundColor:"white",
        alignSelf:"center",
        marginTop:5,
        marginBottom:5,
        padding:10,
        borderRadius: 10,
        elevation:2,
        flexDirection:"row",
    },
    listaContainerItemNombre:{
        fontWeight:600,
        fontSize:18,
        color:"white",
        alignSelf:"center"
    },
    listaContainerItemFecha:{
        fontWeight:500,
        fontSize:15,
        color:"#06BCC1",
        paddingTop:7,
        letterSpacing:0.5
    },
    listaContainerItemInfo:{
        fontWeight:400,
        fontSize:13,
        color:"#14110F",
        alignSelf:"flex-start"
    },
    listaContainerItemDiv1:{
        width:wp('25%'),
        justifyContent:"center",
        alignItems:"flex-start"
    },
    listaContainerItemDiv2:{
        width:wp('40%'),
        justifyContent:"center",
        alignItems:"flex-start"
    },
    listaContainerItemDiv3:{
        width:wp('20%'),
        flexDirection:"column",
        justifyContent: 'space-between',
    

    },


});