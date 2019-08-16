import React from 'react'
import { View, ScrollView, Picker, ActivityIndicator, Image, Alert, TouchableHighlight } from 'react-native'
import * as Font from 'expo-font'
import Text from './src/components/Lato'
import styles from './src/style/home'

export default class App extends React.Component {
    state = {
        selectedCoin: 'BTC',
        fontLoaded: false,
        isPriceUp: true,
        animatePicker: false,
        selectedIndex: 0,
        jsonItems: [],
        pickerItems: [],
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
        this.getData()
        setInterval(() => {
            this.getData()
        }, 10e3)
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    async getData() {
        const request = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=ecb292f4-0e05-4717-815f-f2bc346aa7c7')
        const json = await request.json()
        let jsonItems = []
        const pickerItems = json.data.map((item, index) => {
            const jsonItem = {
                name: item.name,
                price: Math.round(item.quote.USD.price) > 0 ? this.numberWithCommas(item.quote.USD.price.toFixed(2)) : item.quote.USD.price.toFixed(5),
                marketCap: Math.round(item.quote.USD.market_cap) > 0 ? this.numberWithCommas(item.quote.USD.market_cap.toFixed(2)) : item.quote.USD.market_cap.toFixed(5),
                volume24: Math.round(item.quote.USD.volume_24h) > 0 ? this.numberWithCommas(item.quote.USD.volume_24h.toFixed(2)) : item.quote.USD.volume_24h.toFixed(5),
                percentage24: item.quote.USD.percent_change_24h.toFixed(2),
                isPercentageDown: item.quote.USD.percent_change_24h > 0 ? false : true,
            }
            jsonItems.push(jsonItem)
            return (<Picker.Item label={'▸ ' + item.name} value={item.name} key={item + index} />)
        })

        this.setState({jsonItems, pickerItems})
    }

    render() {

        return (
            <View style={styles.mainContainer}>
                {this.state.fontLoaded ? (
                    <View>
                        <Text style={styles.mainTitle}>Crypto Ticker</Text>
                        <Image style={styles.backgroundShape} source={require('./assets/shape-start.png')}></Image>

                        <View style={styles.innerContainer}>
                            <Picker
                                selectedValue={this.state.selectedCoin}
                                onValueChange={(itemValue, itemIndex) => {
                                    this.setState({selectedCoin: itemValue, selectedIndex: itemIndex})
                                }}
                                itemStyle={styles.coinPickerItem}
                                style={styles.coinPicker}
                            >
                                {this.state.pickerItems}
                            </Picker>

                            <ScrollView style={styles.textsContainer}>
                                <View>
                                    <Text style={styles.thinText}>Latest price in USD</Text>
                                    <Text style={styles.fatText}>{
                                        this.state.jsonItems.length > 0 ?
                                        '$ ' + this.state.jsonItems[this.state.selectedIndex].price : 'Loading...'}</Text>
                                </View>
                                <View>
                                    <Text style={styles.thinText}>Marketcap in USD</Text>
                                    <Text style={styles.fatText}>{
                                        this.state.jsonItems.length > 0 ?
                                        '$ ' + this.state.jsonItems[this.state.selectedIndex].marketCap : 'Loading...'}</Text>
                                </View>
                                <View>
                                    <Text style={styles.thinText}>Volume 24 hours in USD</Text>
                                    <Text style={styles.fatText}>{
                                        this.state.jsonItems.length > 0 ?
                                        '$ ' + this.state.jsonItems[this.state.selectedIndex].volume24 : 'Loading...'}</Text>
                                </View>
                                <View>
                                    <Text style={styles.thinText}>Percentage 24h change</Text>
                                    <Text style={
                                        this.state.jsonItems.length > 0 ?
                                        (this.state.jsonItems[this.state.selectedIndex].isPercentageDown ? [styles.fatText, styles.redText] : [styles.fatText, styles.greenText]) : styles.fatText
                                    }>
                                    {
                                        this.state.jsonItems.length > 0 ?
                                        this.state.jsonItems[this.state.selectedIndex].percentage24 + '%' : 'Loading...'
                                    }
                                    </Text>
                                </View>

                                <View>
                                    <Text style={styles.footerText}>Crypto ticker updates the price of your favorite
                                    crypto currencies in real time every 10 seconds. App created by merunas.io.</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                ) : (
                    <ActivityIndicator size="large" />
                )}
            </View>
        )
    }
}
