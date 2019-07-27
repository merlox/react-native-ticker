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
        top: 60,
        textAlign: 'center',
        zIndex: 1,
    },
    boldText: {
        fontFamily: 'Lato-Bold',
    },
    backgroundShape: {
        width: '100%',
        height: 220,
        position: 'absolute',
        top: 0,
    },
    coinPickerItem: {
        borderRadius: 5,
        marginTop: 85,
        margin: 'auto',
        backgroundColor: '#a59e8c',
        height: 50,
        color: 'white',
        marginHorizontal: 70,
    },
    coinPicker: {
        zIndex: 2,
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
    thinText: {
        color: 'white',
        fontFamily: 'Lato-Thin',
        fontSize: 22,
        marginLeft: 50,
        marginBottom: 10,
    },
    fatText: {
        color: 'white',
        fontFamily: 'Lato-Bold',
        fontSize: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.6,
        marginBottom: 30,
        textAlign: 'center',
        position: 'relative',
    },
    footerText: {
        color: '#778795',
        textAlign: 'center',
        marginHorizontal: 50,
        fontFamily: 'Lato-Light',
        fontSize: 20,
    },
    smallArrow: {
        fontSize: 22,
    },
    greenText: {
        color: '#4fee57',
    },
    redText: {
        color: '#ee4f4f',
    },
    pickerTouchable: {
        zIndex: 30,
        position: 'absolute',
        width: '100%',
        height: '100%',
        marginTop: 85,
        height: 170,
        opacity: 0,
    },
})

export default styles
