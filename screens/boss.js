import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,Image } from 'react-native';
import { globalStyles } from '../styles/global';



export default function Boss ({ navigation }) {
    return (
        <View style={globalStyles.container}>
        <Image source={require('../assets/mudur.png')} style={styles.image} />
        <TextInput 
            maxLength={30}
            style={styles.input}
            placeholder='Kullanıcı Adı'
            placeholderTextColor='#8999a6'
            keyboardAppearance='dark'
        />
        <TextInput 
            maxLength={30}
            style={styles.input}
            placeholder='Şifre'
            placeholderTextColor='#8999a6'
            keyboardAppearance='dark'
        />
    
         <Button onPress={() => navigation.navigate("Jobs")}             
                        title="Giriş Yap"
                        color='#8999a6'
        /> 
        </View>
    );
}

const styles = StyleSheet.create({
   
    input:{
        borderWidth: 1,
        borderColor: '#B00020',
        padding: 10,
        fontSize: 18,
        color:'#ffffff',
        borderRadius: 20,
        marginBottom:20,
        
    },
    image :{
        resizeMode:'center',
        width:'50%',
        height:'30%',
        alignSelf:'center',
        marginBottom:15
    }
    
})