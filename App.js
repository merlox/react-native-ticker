import React from 'react'
import { View, Picker, ActivityIndicator, Image } from 'react-native'
import * as Font from 'expo-font'
import Text from './src/components/Lato'
import styles from './src/style/home'

export default class App extends React.Component {
    state = {
        selectedCoin: 'BTC',
        fontLoaded: false,
    }

    constructor() {
        super()
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
            'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
            'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
            'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
            'Lato-Thin': require('./assets/fonts/Lato-Thin.ttf'),
        })

        this.setState({fontLoaded: true})
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                {this.state.fontLoaded ? (
                    <View>
                        <Text style={styles.mainTitle}>Crypto Ticker</Text>
                        <Image style={styles.backgroundShape} source={require('./assets/shape-start.png')}></Image>
                        <Picker
                            selectedValue={this.state.selectedCoin}
                            onValueChange={(itemValue, itemIndex) => {
                                this.setState({selectedCoin: itemValue})
                            }}
                            itemStyle={styles.coinPickerItem}
                            style={styles.coinPicker}
                        >
                            <Picker.Item label="BTC bitcoin" value="BTC" />
                            <Picker.Item label="ETH ethereum" value="ETH" />
                            <Picker.Item label="DOGE dogecoin" value="DOGE" />
                        </Picker>

                        <View style={styles.textsContainer}>
                            <View>
                                <Text style={styles.thinText}>Latest price in USD</Text>
                                <Text style={styles.fatText}>$ 9,283</Text>
                            </View>
                            <View>
                                <Text style={styles.thinText}>24h volume in USD</Text>
                                <Text style={styles.fatText}>$ 7,155,680,000</Text>
                            </View>
                            <View>
                                <Text style={styles.thinText}>24h change</Text>
                                <Text style={styles.fatText}>0.51</Text>
                            </View>
                            <View>
                                <Text style={styles.footerText}>Crypto ticker updates the price of your favorite
                                cryptocurrencies in real-time every 5 seconds</Text>
                            </View>
                        </View>
                    </View>
                ) : (
                    <ActivityIndicator size="large" />
                )}
            </View>
        )
    }
}
