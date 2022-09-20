import React from "react";
import { View ,Text,TouchableOpacity,StyleSheet} from "react-native";

const Button=()=>{
 return(
    <View>
        <TouchableOpacity>
            <Text style={styles.button}>Watch on Youtube</Text>
        </TouchableOpacity>
    </View>
 )   
}

export default Button;

const styles=StyleSheet.create({
button:{
    justifyContent: 'center',
    alignItems: 'center',
    height:50,
    backgroundColor:'red',
    margin:20,
}
})