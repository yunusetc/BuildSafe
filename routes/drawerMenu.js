import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class drawerMenu extends Component {
    navigateToScreen =(route) => () => {
        this.props.navigation.navigate(route)

    };

  render() {
    return (
      <View style={styles.container}>
          <Image source={require('../assets/menuIcon.png')} style={styles.image} />
              <TouchableOpacity onPress={this.navigateToScreen('AnaSayfa')} style={styles.menuItem}>
                  <Text style={styles.itemText}>Ana Sayfa</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.navigateToScreen('Kontrol')} style={styles.menuItem}>
                  <Text style={styles.itemText}>Kontrol Paneli</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.navigateToScreen('Mudur')} style={styles.menuItem}>
                  <Text style={styles.itemText}>Ustabaşı Girişi</Text>
              </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Build Safe</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#15202b',
        paddingVertical:40,
    },
    footer : {
        position:'absolute',
        left:0,
        bottom:0,
        width:'100%',
        paddingVertical:10,
    },
    footerText:{
        textAlign:'center',
        fontSize:13,
        color:'#9c9c9c'
    },
    menuItem: {
        backgroundColor:'#263341',
        padding:10,
        marginBottom:10,
    },
    itemText: {
        fontSize:15,
        color:'#ffffff',
        marginLeft:5
    },
    image :{
        resizeMode:'center',
        width:'50%',
        height:'30%',
        alignSelf:'center',
        marginBottom:10
    }

});