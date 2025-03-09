import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text,StyleSheet,FlatList, TouchableOpacity, Alert, Image,Pressable,Modal,TextInput} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from "react";


export default function ModalUser({isVisible,setModalVisible}){
        const [nombre, setNombre] = useState('');
        const [correo, setCorreo] = useState('');

    return(
            <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => setModalVisible(false)} // Cierra con el botón de atrás en Android
        >
            <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.modalText}>Agregar Nuevo Usuario</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Nombre del usuario'
                    placeholderTextColor="#BCC6DC"
                    value={nombre}
                    onChangeText={setNombre} // Actualiza el estado con el valor ingresado
                />

                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#BCC6DC"
                    value={correo}
                    onChangeText={setCorreo} // Actualiza el estado con el valor ingresado
                />
                
                {/* Botón para cerrar el Modal */}
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Guardar</Text>
                </TouchableOpacity>

            </View>
            </View>
        </Modal>
    )
}

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        },
        iconBack: {
        padding: 10,
        },
        modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)', // Fondo oscuro semitransparente
        },
        modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: wp('90%'),
        alignItems: 'center',
        },
        modalText: {
            fontSize: 18,
            marginBottom: 10,
            fontWeight:500,
            letterSpacing:1
        },
        closeButton: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: '#EF476F',
        borderRadius: 5,
        marginTop: 30,
        },
        closeButtonText: {
            color: 'white',
            fontSize: 16,
        
        },
        input: {
            height: 50,
            borderColor: '#F2F4F8',
            borderWidth: 2,
            paddingHorizontal: 10,
            backgroundColor:'#F2F4F8',
            borderRadius: 5,
            width: wp('80%'),
            color:"black",
            marginTop: 15,
    
        },
    });