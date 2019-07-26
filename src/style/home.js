import {StyleSheet, Dimensions} from 'react-native'
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#4c5760',
        height: 500,
    },
    mainTitle: {
        color: 'white',
        fontFamily: 'Lato-Thin',
        fontSize: 50,
        position: 'relative',
        top: 70,
        textAlign: 'center',
        zIndex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.9,
    },
    backgroundShape: {
        width: '100%',
        height: 220,
        position: 'absolute',
        top: 0,
    },
    coinPickerItem: {
        borderRadius: 5,
        position: 'relative',
        left: '30%',
        marginTop: 90,
        margin: 'auto',
        backgroundColor: '#a59e8c',
        height: 50,
        width: 150,
        color: 'white',
    },
    coinPicker: {
        zIndex: 999,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.6,
        elevation: 14,
    },
    textsContainer: {
        marginTop: 50,
        textAlign: 'center',
        width: '100%',
        color: 'white',
    },
})

export default styles
