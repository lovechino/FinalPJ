import React from "react"
import {  Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import Icon from "react-native-vector-icons/AntDesign"
import { Stories } from "./Components/Stories"
import { ListPost } from "./Components/Posts"
export const HomeScreen = ()=>{
    return(
        <SafeAreaView>
             <View style ={styles.container}>
            <TouchableOpacity>
                <Image style = {styles.logo} source={require('../assets/Images/welcome-img.png')} />
            </TouchableOpacity>
            <View style = {styles.iconContainer}>
            <TouchableOpacity style = {{
                marginLeft : 150
            }}>
                   <Icon name = "heart" color = "red" size = {20}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <View style = {styles.iconValueMess}>
                    <Text style = {styles.valueMess}>22</Text>
                </View>
                <Icon name = "message1" size = {20}/>
            </TouchableOpacity>
        </View>
        <Stories />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container :{
        justifyContent:'space-between',
        alignItems :'center',
        flexDirection :'row',
        marginHorizontal : 20
    }, 
    logo :{
        width : 100,
        height : 50,
        resizeMode :'contain'
    },
    iconContainer :{
        // flexDirection :'row'
    },
    iconValueMess :{
        position :'absolute',
        backgroundColor :'red',
        left : 8,
        bottom : 15,
        width : 25,
        height : 18,
        borderRadius : 25,
        alignItems :'center',
        justifyContent :'center',
        zIndex :100,
    },
    valueMess :{
        color : 'white',
        fontWeight : 600
    }
})




