import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png';
import {MaterialIcons,AntDesign} from '@expo/vector-icons';
import { themas } from "../../global/themes";

export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    function getLogin(){
        try {
            setLoading(true)

            if(!email || !password){
                return Alert.alert('Atenção','Informe os campos obrigatorios')
            }
            setTimeout(()=>{
                if(email =='Pedroguilherme@gmail.com' && password == '123456'){
                    Alert.alert('Logado com  sucesso')
                }else{
                    Alert.alert('Ususario não encontrado!')
                }
                setLoading(false)
            
            },3000)

            
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain" 
                    />
                <Text style={style.text}> Bem vindo de volta </Text>
                </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO DE EMAIL</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input} 
                        value={email}
                        onChangeText={setEmail}
                        />
                    <MaterialIcons
                    nome='email'
                    size={20}
                    color={themas.colors.gray}
                    />
                </View>
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        onChangeText={setPassword} 
                        />
                    <MaterialIcons
                    nome='remove-red-eye'
                    size={20}
                    color={themas.colors.gray}
                    />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={()=getLogin()}>
                    {
                        loading?
                        <ActivityIndicator color={'#FFFF'} size={"small"}/>
                    <Text style={style.textButton}>ENTRAR</Text>
                    }
                    </TouchableOpacity>
            </View>
            <Text style={style.textBottom}>Não tem conta? <Text style={{color:themas.colors.primary}}>Crie agora!</Text></Text>
        </View>
    )
}
function setLoading(arg0: boolean) {
    throw new Error("Function not implemented.");
}

