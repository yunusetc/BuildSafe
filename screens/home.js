import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm'
import { TextInput } from 'react-native-gesture-handler';


export default function Home ({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        });
         //setModalOpen(false);
    }

    return (
    <View style={globalStyles.container}>
        <Modal visible={modalOpen} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    <View style={styles.container2}>
                        <MaterialIcons
                            name= 'close'
                            size= {24}
                            style={{...styles.modalClose}}
                            onPress= {() => setModalOpen(false)}
                        />
                        </View>
                    <ReviewForm addReview={addReview} />
                </View>
                
            </TouchableWithoutFeedback>    
        </Modal>
                <TextInput style={styles.baslik}>
                    Lütfen Bugünün Özetini Ekleyiniz
                </TextInput>
                <MaterialIcons
                    name= 'add'
                    size= {24}
                    style={styles.modalToggle}
                    onPress= {() => setModalOpen(true)}
                />
                <FlatList 
                    data={reviews}
                    renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                    )}

                />
    </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        backgroundColor: '#fdac35',
        borderRadius: 10,
        padding: 10,
        overflow:'hidden',
        alignSelf: 'center',
    },
    modalClose: {
        marginTop:30,
        marginBottom: 10,
        marginRight:10,
        borderWidth: 1,
        backgroundColor: '#7950c1',
        borderRadius: 10,
        padding: 5,
        overflow:'hidden',
        alignSelf: 'flex-end',
        
    },
    modalContent: {
        flex: 1,  
    },
    baslik:{
        alignSelf:'center',
        marginBottom: 20,
        marginTop: 5,
        color:'#f5f5f5',
        fontSize: 22
    },
    container2:{
        backgroundColor:'#15202b'
    }
})