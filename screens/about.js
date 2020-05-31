import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableHighlight } from 'react-native';
import { globalStyles } from '../styles/global';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { ScrollView } from 'react-native-gesture-handler';


var radio_props = [
    {label: 'Evet', value: 0 },
    {label: 'Hayır', value: 1 }
];

var radio_props2 = [
    {label: 'Evet', value: 0},
    {label: 'Hayır', value: 1 }
];

var radio_props3 = [
    {label: 'Evet', value: 0 },
    {label: 'Hayır', value: 1 }
];

var radio_props4 = [
    {label: 'Evet', value: 0 },
    {label: 'Hayır', value: 1 }
];
export default function About ({ navigation }) {
    const [value, setValue] = useState(0)
    const [value2, setValue2] = useState(0)
    const [value3, setValue3] = useState(0)
    const [value4, setValue4] = useState(0)
    return (
        <View style={globalStyles.container}>
        <Text style={styles.txt}>Çalışanın Adı Soyadı :</Text>
        <TextInput 
                            maxLength={30}
                            style={styles.input}
                            placeholder='Ad Soyad'
                            placeholderTextColor='#6c6c6c'
                            keyboardAppearance='dark'
                        />
            <ScrollView>          
            <Text style={styles.radioName}>Baretinizi Taktınız Mı?</Text>
            <RadioForm
                style={{...styles.radio}}
                radio_props={radio_props}
                initial={0}
                formHorizontal={true}
                labelHorizontal={false}
                labelColor={"#bebebe"}
                selectedLabelColor={"#bebebe"}
                buttonColor={'#213c3e'}
                selectedButtonColor={'#23ab5d'}
                animation={true}
                size={20}
                onPress={val => setValue(val)}
            />
            <Text style={styles.radioName}>Yeleğinizi Giydiniz Mi?</Text>
            <RadioForm
                style={{...styles.radio}}
                radio_props={radio_props2}
                initial={0}
                formHorizontal={true}
                labelHorizontal={false}
                labelColor={"#bebebe"}
                selectedLabelColor={"#bebebe"}
                buttonColor={'#213c3e'}
                selectedButtonColor={'#23ab5d'}
                animation={true}
                onPress={val => setValue2(val)}
                size={20}
            />
            <Text style={styles.radioName}>Botlarınızı Giydiniz Mi?</Text>
            <RadioForm
                style={{...styles.radio}}
                radio_props={radio_props3}
                initial={0}
                formHorizontal={true}
                labelHorizontal={false}
                labelColor={"#bebebe"}
                selectedLabelColor={"#bebebe"}
                buttonColor={'#213c3e'}
                selectedButtonColor={'#23ab5d'}
                animation={true}
                onPress={val => setValue3(val)}
                size={20}
            />
            <Text style={styles.radioName}>İş Eldivenlerinizi Giydiniz Mi?</Text>
            <RadioForm
                style={{...styles.radio}}
                radio_props={radio_props4}
                initial={0}
                formHorizontal={true}
                labelHorizontal={false}
                labelColor={"#bebebe"}
                selectedLabelColor={"#bebebe"}
                buttonColor={'#213c3e'}
                selectedButtonColor={'#23ab5d'}
                animation={true}
                onPress={val => setValue4(val)}
                size={20}
            />
            <Text style={styles.radioName}>Koruyucu Gözlüğünüzü Taktınız Mı?</Text>
            <RadioForm
                style={{...styles.radio}}
                radio_props={radio_props4}
                initial={0}
                formHorizontal={true}
                labelHorizontal={false}
                labelColor={"#bebebe"}
                selectedLabelColor={"#bebebe"}
                buttonColor={'#213c3e'}
                selectedButtonColor={'#23ab5d'}
                animation={true}
                onPress={val => setValue4(val)}
                size={20}
            />
           <TouchableHighlight 
                style ={{
                    height: 40,
                    width:160,
                    borderRadius:10,
                    backgroundColor : '#23ab5d',
                    alignSelf:'center',
                    marginTop:20,
                    alignItems:'center',
                    
                    
                }}>
            <Button onPress={() => navigation.navigate("Home")}             
            title="Tamam"
            color='#ffffff'
          /> 
          </TouchableHighlight> 
           </ScrollView>  
        </View>
    );
}

const styles = StyleSheet.create({
    txt: {
        fontSize:20,
        color:'#ffffff',
        overflow:'hidden',
        marginLeft:5,
        marginBottom: 5,
    },
    radioName:{
        marginTop:10,
        marginBottom:5,
        fontSize:18,
        color:'#ffffff',
        marginLeft:6,
        alignSelf: 'center',
        
    },
    radio:{
        marginLeft:6,
        alignSelf: 'center',
        
    },
    input:{
        borderWidth: 1,
        borderColor: '#27be67',
        padding: 10,
        fontSize: 18,
        color:'#ffffff',
        borderRadius: 20,
    },
    
    
})