import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../shared/card';


export default function Jobs ({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.baslik} >Ustabaşı Ana Menu</Text>
            <ScrollView>
            <Card>
                <Text style={styles.yazi}>Müge</Text>
                <View style={globalStyles.rating}>
                    <Text style={styles.yazi2}>Baret: Takılı</Text>
                    <Text style={styles.yazi2}>Yelek: Giyilmiş </Text>
                    <Text style={styles.yazi2}>Botlar: Giyilmiş </Text>
                    <Text style={styles.yazi2}>İş Eldivenleri: Kullanıyor </Text>
                    <Text style={styles.yazi2}>Koruyucu Gözlük: Kullanıyor </Text>
                </View>
            </Card>
            <Card>
                <Text style={styles.yazi}>Enes</Text>
                <View style={globalStyles.rating}>
                <Text style={styles.yazi2}>Baret: Takılı</Text>
                    <Text style={styles.yazi2}>Yelek: Giyilmiş </Text>
                    <Text style={styles.yazi2}>Botlar: Giyilmemiş </Text>
                    <Text style={styles.yazi2}>İş Eldivenleri: Kullanıyor </Text>
                    <Text style={styles.yazi2}>Koruyucu Gözlük: Kullanıyor </Text>
                </View>
            </Card>
            <Card>
                <Text style={styles.yazi}>Berkin</Text>
                <View style={globalStyles.rating}>
                <Text style={styles.yazi2}>Baret: Takılı</Text>
                    <Text style={styles.yazi2}>Yelek: Giyilmemiş </Text>
                    <Text style={styles.yazi2}>Botlar: Giyilmemiş </Text>
                    <Text style={styles.yazi2}>İş Eldivenleri: Kullanıyor </Text>
                    <Text style={styles.yazi2}>Koruyucu Gözlük: Kullanılmıyor </Text>
                </View>
            </Card>
            <Card>
                <Text style={styles.yazi}>Asiye</Text>
                <View style={globalStyles.rating}>
                <Text style={styles.yazi2}>Baret: Takılı</Text>
                    <Text style={styles.yazi2}>Yelek: Giyilmiş </Text>
                    <Text style={styles.yazi2}>Botlar: Giyilmemiş </Text>
                    <Text style={styles.yazi2}>İş Eldivenleri: Kullanıyor </Text>
                    <Text style={styles.yazi2}>Koruyucu Gözlük: Kullanıyor </Text>
                </View>
            </Card>
            <Card>
                <Text style={styles.yazi}>Yunus Emre</Text>
                <View style={globalStyles.rating}>
                <Text style={styles.yazi2}>Baret: Takılmamış</Text>
                    <Text style={styles.yazi2}>Yelek: Giyilmiş </Text>
                    <Text style={styles.yazi2}>Botlar: Kullanıyor </Text>
                    <Text style={styles.yazi2}>İş Eldivenleri: Kullanılmıyor </Text>
                    <Text style={styles.yazi2}>Koruyucu Gözlük: Kullanıyor </Text>
                </View>
            </Card>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    baslik:{
        alignSelf:'center',
        marginBottom: 20,
        marginTop: 5,
        color:'#f5f5f5',
        fontSize: 22
    },
    yazi: {
        fontSize:22,
        color:'#ffffff',

    },
    yazi2: {
        fontSize:13,
        color:'#b5b5b5',
    },
    
})