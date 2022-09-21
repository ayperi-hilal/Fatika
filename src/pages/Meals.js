import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList ,StyleSheet} from "react-native";
import { API_MEALS } from '@env';
import RepiceCard from "../components/Card/RepiceCard";

const Meals = ({ navigation,route }) => {

    const [loading, setLoading] = useState(true); //işlem başarılı olduğunda
    const [error, setError] = useState(null);//işlem olmadığında
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, []);


    const {strCategory}=route.params;

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(`${API_MEALS}${strCategory}`);
            setData(responseData);
            setLoading(false);
        } catch (err) {
            setData(err.message);
            setLoading(true);
        }
    }

    
    const handleRepiceSelect = idMeal => {
        navigation.navigate('Detay', { idMeal });
    }

    const renderMaels = ({ item }) => (
        <RepiceCard
            meal={item}
            onSelect={() => handleRepiceSelect(item.idMeal)}
        />
    )
    

    if (loading) {
        return <ActivityIndicator size="large" />
    }
    if (error) {
        return <Text>Error</Text>
    }
    return (
        <View style={styles.arka}>
            <FlatList
                data={data.meals}
                // keyExtractor={repice=>repice.idMeal}
                renderItem={renderMaels}
            />
        </View>
    )
}


export default Meals;

const styles = StyleSheet.create({
    arka: { backgroundColor: 'orange' }
})