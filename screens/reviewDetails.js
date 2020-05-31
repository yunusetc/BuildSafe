import React from 'react';
import { StyleSheet, Text, View, Image  } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';


export default function ReviewDetails ( { navigation } ) {
    const rating = navigation.getParam('rating');
  
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={styles.yazi}>{ navigation.getParam('title')}</Text>
                <Text style={styles.yazi2}>{ navigation.getParam('body') }</Text>
                <View style={globalStyles.rating}>
                    <Text style={styles.yazi3}>Çalışma Koşullarından Memnuniyet </Text>
                    <Image source={images.ratings[rating]} style={styles.resim} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    yazi: {
        fontSize:22,
        color:'#ffffff',

    },
    yazi2: {
        fontSize:16,
        color:'#ffffff',
    },
    yazi3: {
        fontSize:13,
        color:'#b5b5b5',
    },
    resim:{
        alignSelf:'center'
    }
})