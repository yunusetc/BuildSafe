import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderWidth:1,
        borderColor:'#fdac35',
        borderRadius: 20,
        elevation: 5,
        backgroundColor: '#192734',
        marginHorizontal: 4,
        marginVertical: 8,
    },
    cardContent:{
        marginHorizontal: 18,
        marginVertical: 10,
        alignItems:'center',

    },
})