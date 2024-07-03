import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [posts,setPosts]=useState([])
    const fetchPosts= async (limit)=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        const data = await response.json()
        setPosts(data)
    }
    useEffect(()=>{
        fetchPosts(10)
        console.log(posts.length)
    },[])
  return (
    <View>
      <FlatList
      scrollEnabled={false}
        data={posts}
        ListEmptyComponent={<Text>No post found</Text>}
        ListHeaderComponent={<Text style={{textAlign:'center',fontSize:24,fontWeight:'bold'}}>Posts</Text>}
        ItemSeparatorComponent={<View style={{height:5}}></View>}
        renderItem={({item})=>{
            return(
                <View style={styles.postContainer} key={item.id}>
                    <Text styles={{fontWeight:500,fontSize:20}}>{item.title}</Text>
                    <Text  styles={{fontWeight:500,fontSize:20}}>{item.body}</Text>
                </View>
            )
        }}
      ></FlatList>
    </View>
  )
}

export default FetchData

const styles = StyleSheet.create({
    postContainer:{
        padding:5,
        borderWidth: 2,
         borderColor: 'black',
         borderRadius:5
    }
})