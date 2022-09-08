import React from "react";
import { FlatList, Text, View } from "react-native";
import { API_LINK } from '@env'


const Categories = () => {
    const renderCategori=({item})=>null;

    return (
        <FlatList
        data={null}
        renderItem={renderCategori}
        />
    )
}

export default Categories;