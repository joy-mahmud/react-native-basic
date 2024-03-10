import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ backgroundColor: "aqua", flex: 1, paddingTop: 40 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>Hello world</Text>


      <ScrollView>
        <Image source={{ uri: "https://picsum.photos/seed/picsum/200/300" }} style={{ height: 400, width: "100%" }} />
        <Pressable onLongPress={()=>console.log("text long pressed ")}>
          <Text>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </Text>
        </Pressable>
        <ImageBackground source={{ uri: "https://picsum.photos/200" }} style={{ height: 300, width: "100%", marginTop: 20 }}><Text style={{ color: "white", fontSize: 20 }}>Here is the background</Text></ImageBackground>
        <Button onPress={() => console.log("button pressed")} title='Click here' color={'midnightblue'} style={{ borderRadius: 5, padding: 5 }} />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}


