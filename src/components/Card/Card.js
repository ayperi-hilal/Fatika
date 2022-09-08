import React from "react";
import { View,Text ,Image} from "react-native";

const Card=({foods})=>{
    return(
        <View>
            <Image
            style={styles.image}
            source={{uri:foods.}}
            />
            <Text>{foods}</Text>
        </View>
    )
}