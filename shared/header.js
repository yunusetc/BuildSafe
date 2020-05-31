import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header ({ title, navigation }) {
    
    const openMenu = () => {
        navigation.openDrawer();
    }
    
    return (
        <ImageBackground source={require('../assets/insaat.png')} style={styles.header}>
            <MaterialIcons name='menu' size={25} onpress={openMenu} style={styles.icon}/>
                <View style={styles.headerTitle}>
                    <Text style={styles.headerText}>{ title }</Text>
                </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',  
        borderWidth: 1,
        borderColor: '#283543',
        
    },
    headerText: {
        fontWeight: 'normal',
        fontSize: 20,
        color: '#ffffff',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
        color:'#ffffff'
      },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 15,
        resizeMode:'center'
    },
    headerTitle: {
        flexDirection: 'row',
    },
    
});