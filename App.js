import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './src/styles'

export default class App extends React.Component {
    constructor() {super()}

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.mainTitle}>Crypto Ticker</Text>
            </View>
        )
    }
}
