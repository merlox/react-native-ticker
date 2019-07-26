import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainTitle: {
        color: 'white',
        fontFamily: 'Lato-Thin',
        fontSize: 50,
        position: 'relative',
        top: 70,
        textAlign: 'center',
        zIndex: 1,
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#4c5760',
        height: 500,
        textAlign: 'center',
    },
    backgroundShape: {
        width: '100%',
        height: 220,
        position: 'absolute',
        top: 0,
    },
    coinPicker: {
        color: 'white',
    }
})

export default styles
