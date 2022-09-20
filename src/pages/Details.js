import React, { useEffect, useState } from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'
import Button from "../components/Button/Button";
import {API_DETAIL} from '@env';
import axios from "axios";




const Details = ({route}) => {

    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    conts [data,setData]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        try {
            const {data:responseData}=await axios.get(`${Config.API_DETAIL}${idMeal}`);
            setData(responseData);
            setLoading(false);
        } catch (err) {
            setData(err.message);
            setLoading(true); 
        }
    }
   
    
    const {idMeal}=route.params;


    return (
        <SafeAreaView >
            <View>
                <Image />
                <Text> Details</Text>
            </View>
            <View>
                <Button />
            </View>
        </SafeAreaView>
    )
}

export default Details;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})