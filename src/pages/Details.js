import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, FlatList, StyleSheet, Dimensions,Linking } from "react-native";
import { API_DETAIL } from '@env'
import DetailCard from "../components/Card/DetailCard";


const Details = ({ route }) => {

    const { idMeal } = route.params;//id yakalandı.

    // console.log(idMeal);//bu noktada id kontrolü yapıldı.

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(`${API_DETAIL}${idMeal}`);
            setData(responseData);
            setLoading(false);
        } catch (err) {
            setData(err.message);
            setLoading(true);
        }
    }

    if (loading) {
        return <ActivityIndicator size="large" />
    }

    if (error) {
        return <Text>Error</Text>
    }

    const renderDetail = ({ item }) => (/**bu kısım eğer ki süslü parantez olur ise görüntü alamazsın dikkat et */
        <DetailCard
            detail={item}
            onSelect={() => Linking.openURL(item.strYoutube)}
        />
    );

    return (
        <View>
            <FlatList data={data.meals} renderItem={renderDetail} />
        </View>


    );
}

export default Details;