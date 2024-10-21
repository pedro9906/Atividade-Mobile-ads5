import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    boxTop:{
        heigth:Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor: 'red',

    },  
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%' ,
        backgroundColor:'green'

    },
    boxBottom:{
        heigth:Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor:'blue'
    }  
})