import { TouchableOpacity,StyleSheet,Text} from 'react-native';
import {useHistory} from "react-router-native"

export default function Button({style,title}){
    const buttonStyles = [
        styles.btn,
        style
    ]
    const history = useHistory();

    return(
        <TouchableOpacity style={buttonStyles} onPress={()=>history.push("/gestionesOT") }>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "red",
        color:"white",
        padding: 15,
        borderRadius:10
    },
    btnText:{
        color:"white",
        textAlign:"center",
        fontSize:18
    }
});
