import React from 'react'
import { Text } from 'react-native'

class Lato extends React.Component {
    render () {
            console.log('hiiiiii'+this.props.children)
        return (
            <Text>{this.props.children}</Text>
        )
    }
}

export default Lato
