import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create ({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: '#15202b'
    },
    titleText:{
        fontSize: 20,
        color: '#ffffff',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    rating: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
       
    },
    input: {
        borderWidth: 1,
        borderColor: '#3700B3',
        padding: 10,
        fontSize: 18,
        color:'#ffffff',
        borderRadius: 6,
    },
    errorText: {
        color:  '#018786',
        fontWeight: 'normal',
        marginTop: 6,
        marginBottom: 10,
        textAlign: 'center',
    },
    RadioForm: {
        marginTop: 100,
        textAlign: 'center',
    }
})

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}