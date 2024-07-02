import { View, Text, FlatList } from 'react-native'
import React from 'react'
import pokemonList from '../data.json'

const Lists = () => {
    return (
        <View style={{marginVertical:20}}>
            <Text style={{fontSize:20,fontWeight:500,textAlign:'center'}}>Lists</Text>
            <FlatList
                data={pokemonList}
                renderItem={({ item }) => {
                    return (
                        <View style={{borderColor:'black',borderWidth:2,borderRadius:6,padding:5,marginBottom:5}} key={item.id}>
                            <Text>{item.name}</Text>
                            <Text>{item.type}</Text>
                        </View>
                    )

                }}
            ></FlatList>
        </View>
    )
}

export default Lists