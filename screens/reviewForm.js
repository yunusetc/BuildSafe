import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,Modal  } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';


const reviewSchema = yup.object({
    title: yup.string()
    .required()
    .min(3),
    body: yup.string()
    .required()
    .min(6),
    rating: yup.string()
    .required()
    .test('is-num-1-5', 'Lütfen 1-5 arasında bir değer giriniz', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })

});



export default function ReviewForm({ addReview }) {

    return(
    
        <View style= {globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                addReview(values);
                actions.resetForm();
                }}
            >

                {(props) => (
                    <View style={styles.containers}>
                        <TextInput 
                            maxLength={30}
                            style={styles.input}
                            placeholder='Ad Soyad'
                            placeholderTextColor='#8999a6'
                            keyboardAppearance='dark'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}> { props.touched.title && props.errors.title } </Text>
                        <TextInput 
                            maxLength={50}
                            style={styles.input}
                            placeholder='Bugün Yapılan İşler'
                            placeholderTextColor='#8999a6'
                            keyboardAppearance='dark'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}> { props.touched.body && props.errors.body } </Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Çalışma Koşullarınızın Durumu (1-5)'
                            placeholderTextColor='#8999a6'
                            keyboardAppearance='dark'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}> { props.touched.rating && props.errors.rating } </Text>
                        <Button title='Raporu Teslim Et' color='#7950c1' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
            
        </View>
    
    )
}

const styles = StyleSheet.create({
    containers: {
      marginTop: 50,
    },
    input:{
        borderWidth: 1,
        borderColor: '#7150ad',
        padding: 10,
        fontSize: 18,
        color:'#ffffff',
        borderRadius: 20,
    }
  });
