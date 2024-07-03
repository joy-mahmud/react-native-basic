import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import pokemonList from '../data.json'

const Lists = () => {
    return (
       
            
            <FlatList
            scrollEnabled={false}
                data={pokemonList}
                renderItem={({ item }) => {
                    return (
                        <View style={{borderColor:'black',borderWidth:2,borderRadius:6,padding:5}} key={item.id}>
                            <Text>{item.name}</Text>
                            <Text>{item.type}</Text>
                        </View>
                    )

                }
               
            }
            keyExtractor={(item)=>item.id.toString()}
            ItemSeparatorComponent={<View style={{height:5}}></View>}
            ListEmptyComponent={<Text style={{textAlign:'center'}}>No items found</Text>}
            ListHeaderComponent={<Text style={{fontSize:20,fontWeight:500,textAlign:'center'}}>Pokemon Lists</Text>}
            ListFooterComponent={<Text style={{fontSize:20,fontWeight:500,textAlign:'center'}}>End of Lists</Text>}
            ></FlatList>
        
    )
}

export default Lists