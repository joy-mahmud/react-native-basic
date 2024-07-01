import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Box = ({ children, style }) => {
    return (
        <View style={[styles.box,style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

export default Box
const styles = StyleSheet.create({
    box: {
        padding: 20,

    },
    text: {
        textAlign: 'center',
        fontWeight:'bold',
        
    }
})