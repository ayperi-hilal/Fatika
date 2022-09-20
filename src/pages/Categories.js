import React, { useEffect, useState } from "react";
import { FlatList, Text, View, SafeAreaView, StyleSheet, ActivityIndicator } from "react-native";
import { API_LINK } from '@env'
import { API_CATEGORIES } from '@env'
import axios from "axios";
import CategoriesCard from "../components/Card/CategoriesCard";
// import Loading from "../assets/Loading";
// import Error from "../assets/Error";


const Categories = ({ navigation }) => {
    /**{navigation} */
    const [loading, setLoading] = useState(true); //işlem başarılı olduğunda
    const [error, setError] = useState(null);//işlem olmadığında
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(API_CATEGORIES);
            setData(responseData);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(true);
        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    // const{loading,data,error}=(API_CATEGORIES);

    const handleCategorySelect=strCategory=>{
        navigation.navigate('Tarif',{strCategory});
    };

    const renderCategori = ({ item }) => (
        <CategoriesCard

            category={item}
            onSelect={()=>handleCategorySelect(item.strCategory)}
        />
    )
    /**ilk başta burasını 
    const renderCategori = ({ item }) => null;
    olarak tanımlamıştık fakat yukarıdaki tanımlamaarı yaptıktan sonra bu hale geldi.
     */



    


    if (loading) {
        return <ActivityIndicator size="large" />
        //    return <Loading/>
    }
    if (error) {
        return <Text>error</Text>
    }
    return (

        <SafeAreaView style={styles.arka}>
            <FlatList
                data={data.categories}/**  {data} buradaki data yukarıda kullanılan const [data, setData] = useState([]); dır */
                keyExtractor={item => item.idCategory}
                renderItem={renderCategori}
            />
        </SafeAreaView>
    );
};

export default Categories;

const styles = StyleSheet.create({
    arka: { backgroundColor: 'orange' }
})