import React from 'react'
import { Text, View } from 'react-native'

class Lato extends React.Component {
    render () {
        return (
            <Text {...this.props}>{this.props.children}</Text>
        )
    }
}

export default Lato
