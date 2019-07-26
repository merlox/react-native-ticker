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
            <View>
                {this.state.fontLoaded ? (
                    <View style={styles.mainContainer}>
                        <Text>Crypto Ticker Two</Text>
                        <Image style={{width: '100%', height: 200}} source={require('./assets/shape-start.png')}></Image>
                        <Picker
                            onValueChange={(itemValue, itemIndex) => {
                                this.setState({selectedCoin: itemValue}, () => {
                                    console.log(this.state)
                                })
                            }}
                        >
                            <Picker.Item label="BTC bitcoin" value="BTC" />
                            <Picker.Item label="ETH ethereum" value="ETH" />
                            <Picker.Item label="DOGE dogecoin" value="DOGE" />
                        </Picker>

                        <View>
                            <View>
                                <Text>Latest price in USD</Text>
                                <Text>$ 9,283</Text>
                            </View>
                            <View>
                                <Text>24h volume in USD</Text>
                                <Text>$ 7,155,680,000</Text>
                            </View>
                            <View>
                                <Text>24h change</Text>
                                <Text>0.51</Text>
                            </View>
                            <View>
                                <Text>Crypto ticker updates the price of your favorite
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
