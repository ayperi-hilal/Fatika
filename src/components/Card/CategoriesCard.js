import React from "react";
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";

const CategoriesCard = ({ category ,onSelect}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container} >
                <View>
                    <Image
                        style={styles.image}
                        source={{ uri: category.strCategoryThumb }} />
                </View>
                <View>
                    <Text style={styles.textContainer} >{category.strCategory}</Text></View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default CategoriesCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEF1FF',
        borderWidth: 1,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        margin: 8,

    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginRight: 10,
        marginLeft: 10,
    },
    textContainer: {
        fontSize: 20,
        marginTop: 40,

    }
})