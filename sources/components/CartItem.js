import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function CartItem( props ){
    const { item, index, onChange } = props;
    const [ amount, setamount ] = useState(item.amount);
    const handleDelete = async ()=> {
        let cartData = await AsyncStorage.getItem("cartData");
        cartData = JSON.parse(cartData);
        let a = [...cartData];
        a.slice(index,1);
        AsyncStorage.setItem("cartData",JSON.stringify(a));
        onChange && onChange(a);
    };
    const handleOnAdd = async () => {
        let cartData = await AsyncStorage.getItem("cartData");
        cartData = JSON.parse(cartData);
        let a = [...cartData];
        a[index].amount = amount + 1;
        AsyncStorage.setItem("cartData",JSON.stringify(a));
        setamount((val) => val + 1);
        onChange && onChange(a);
    }
    const handleOnRemove = async () => {
        let cartData = await AsyncStorage.getItem("cartData");
        cartData = JSON.parse(cartData);
        let a = [...cartData];
        a[index].amount = amount - 1;
        AsyncStorage.setItem("cartData",JSON.stringify(a));
        setamount((val) => val - 1);
        onChange && onChange(a);
    };
    return (
        <View
            style={{
                flexDirection:"row",
                marginBottom:12,
                marginHorizontal:10,
                shadowColor:"#000",
                shadowOffset:{
                    width:0,
                    height:4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                borderRadius: 20,
                backgroundColor: "#fff",
                padding: 6,
            }}
        >
            <Image
                source={{uri:item.image}}
                style={{height: 80, width:80, borderRadius: 20, marginRight: 12 }}
            />
            <View style={{flex: 1}}>
                <View style={{ flexDirection:"row"}}>
                    <Text style={{ fontWeight: "bold"}}>{item.name} - </Text>
                    <Text style={{ fontWeight: "bold", color: "#F99928"}}>
                        {item.owner}
                    </Text>
                </View>
                <View style={{ flexDirection: "row"}}>
                    <View style={{ flex: 1}}>
                        <Text style={{ fontSize: 11}}>Price: {item.price} VND</Text>
                        <Text style={{ fontSize: 11}}>Size: {item.size} VND</Text>
                        <Text style={{ fontSize: 11}}>Ice: {item.ice} VND</Text>
                    </View>
                    <View style={{ alignItems:"center", flexDirection: "row"}}>
                        <TouchableOpacity 
                            onPress={handleOnRemove} 
                            style={{ backgroundColor: "#2FDBBC", borderRadius: 8}}
                        >
                            <Ionicons name="remove" size={24} color="#fff"/>
                        </TouchableOpacity>
                        <Text style={{ fontWeight: "bold", marginHorizontal: 15}}>
                            {amount}
                        </Text>
                        <TouchableOpacity
                            onPress={handleOnAdd}
                            style={{ backgroundColor: "#2FDBBC", borderRadius: 8}}
                        >
                            <Ionicons name="add" size={24} color="#fff"/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={handleDelete}
                        style={{
                            marginLeft: 25,
                            marginRight: 6,
                            justifyContent: "center",
                        }}
                    >
                        <AntDesign name="delete" size={24} color="red"></AntDesign>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}