import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";

const DetailCard = ({ detail, onSelect }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: detail.strMealThumb }} />
            <View >
                <Text style={styles.baslik}>{detail.strMeal}</Text>
                <Text style={styles.detailArea} >{detail.strArea}</Text>
            </View>
            <View style={styles.seperator}></View>
            <Text style={styles.icerik}>{detail.strInstructions}</Text>
            <TouchableOpacity onPress={onSelect} style={styles.button}>
                <Text style={styles.button_text}>Watch on Youtube</Text>
            </TouchableOpacity>
        </View>
    );
}

export default DetailCard;

const styles = StyleSheet.create({
    image: {
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width - 20,
        // resizeMode: 'contain',
        borderRadius: 20,
        margin: 10,
    },
    button: {
        borderWidth: 1,
        backgroundColor: 'red',
        margin: 6,
        padding: 4,
        height: 40,
        borderColor: 'red',
        borderRadius: 6,
    },
    button_text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',

    },
    container: {
        flex: 1,
        backgroundColor: '#F1EFDC',
    },
    baslik: {
        margin:5,
        fontSize:25,
        fontWeight:'bold',
        color:'#820000',
        
    },
    detailArea: {
        color:'#820000',
        fontSize:18,
        margin:5,
        marginTop:0,
        fontWeight:'bold',

    },
    icerik: {
        // backgroundColor: 'yellow',
        margin:5,
        fontSize:18,
        textAlign:'justify', 
    
    },
    seperator:{
        borderColor:'#CFD2CF',
        borderWidth:1,
        marginTop:3,
        marginBottom:3,
    }
})