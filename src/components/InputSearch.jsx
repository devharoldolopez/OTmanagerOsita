import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const Input = ({ style, title }) => {
    const [text, setText] = useState('');

    const inputStyles = [
        styles.input,
        style
    ]

    return (
        <View style={styles.container}>
            <Icon name="search" size={25} color="white" style={styles.icon} />
            <TextInput
                style={inputStyles}
                placeholder={title}
                placeholderTextColor="#D3D8EE"
                value={text}
                onChangeText={setText} // Actualiza el estado con el valor ingresado
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 55,
        flexDirection:"row",
        width: wp('90%'),
        backgroundColor:'#F5F6FB',
        borderRadius: 12,
        marginBottom:30,
        elevation:3

    },
    input: {
        height: 50,
        borderColor: '#F5F6FB',
        borderWidth: 2,
        paddingHorizontal: 10,
        flex:2,
        backgroundColor:'#F5F6FB',
        borderRadius: 12,
        fontSize:16


    },
    result: {
        marginTop: 10,
        fontSize: 16,
    },
    icon: {
        marginRight: 5,
        alignSelf:"center",
        marginLeft:10,
        borderRadius:1000,
        borderWidth:1,
        padding:5,
        backgroundColor:"#06BCC1",
        borderColor:"#06BCC1"
    }
});

export default Input;
