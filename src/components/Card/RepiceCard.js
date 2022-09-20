import React from "react";
import { View, TouchableWithoutFeedback, Image, Text, StyleSheet, Dimensions } from "react-native";

const RepiceCard = ({ meal, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.card}  >
                    <Image
                        style={styles.image}
                        source={{ uri: meal.strMealThumb }}
                    />
                    <View style={styles.yaziContainer}>
                    <Text style={styles.yazi} > {meal.strMeal}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback  >

    );
}

export default RepiceCard;


const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'space-around',

    },
    container: {

        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    image: {
        height: Dimensions.get('window').height/3,
        width: Dimensions.get('window').width - 20,
        resizeMode: 'contain',
        borderRadius: 20,
    },
    yazi: {
        margin:2,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        // backgroundColor:'#EEEEEE',
     
    },
    yaziContainer:{
        flex: 1,
       height:50,
       backgroundColor:'rgba(0,0,0,0.2)' ,
       bottom: 60,
       
    }
})