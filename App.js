import { useState } from "react"

import OpenModal from './components/Modal';
import { ActivityIndicator, useWindowDimensions, Alert, Button, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import Box from "./components/box";
import Lists from "./components/Lists";
import FetchData from "./components/FetchData";

export default function App() {
  const [modalvisible, setModalVisible] = useState(false)
  const windowHeight = useWindowDimensions().height
  const windowWidth = useWindowDimensions().width
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      
      {/* <StatusBar backgroundColor="lightgreen" barStyle="dark-content" /> */}
      <View style={[styles.container,{paddingTop:StatusBar.currentHeight}]}>

        {/* <ActivityIndicator size={'large'} color={'midnightblue'}/> */}


        <ScrollView nestedScrollEnabled={true}>
          <Text style={styles.header}>Hello world</Text>
          <Image source={{ uri: "https://picsum.photos/seed/picsum/200/300" }} style={{ height: 400, width: "100%" }} />
          <Pressable onLongPress={() => console.log("text long pressed ")}>
            <Text>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </Text>
          </Pressable>
          <ImageBackground source={{ uri: "https://picsum.photos/200" }} style={{ height: 300, width: "100%", marginTop: 20 }}><Text style={{ color: "white", fontSize: 20 }}>Here is the background</Text></ImageBackground>
          <Button onPress={() => console.log("button pressed")} title='Click here' color={'midnightblue'} style={{ borderRadius: 5, padding: 5 }} />
          <Button onPress={() => setModalVisible(true)} title='Open modal' />
          <Text style={styles.header}>Combine css property section</Text>
          <View style={{}}>
            <View style={[styles.box, styles.boxbgGreen]}></View>
            <View style={[styles.box, styles.boxbgRed]}></View>
          </View>
          <View style={styles.flexBoxes}>
            <Box style={{ backgroundColor: "#8e9b00", flex: 1 }}><Text style={{ color: 'white' }}>Box 1</Text></Box>
            <Box style={{ backgroundColor: "#b65d1f", flex: 2 }}>box 2</Box>
            <Box style={{ backgroundColor: "#1c4c56" }}>box 3</Box>
          </View>
          <View style={[styles.welcomeBox, { height: windowWidth > 400 ? 200 : 300, width: windowWidth > 400 ? '90%' : '80%' }]}>
            <Text style={{ fontSize: windowWidth > 400 ? 40 : 20 }}>Welcome text</Text>
          </View>
          <Lists></Lists>
          <FetchData></FetchData>
        </ScrollView>
        


        <OpenModal modalvisible={modalvisible} setModalVisible={setModalVisible}></OpenModal>

        <Button title="Alert button" onPress={() => Alert.alert("Invalid data", "dob missing", [{ text: "cancel", onPress: () => console.log("cancel Pressed") }, { text: 'Ok', onPress: () => console.log("ok pressed") }])} style={{ borderRadius: 5 }} />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: { backgroundColor: "plum", flex: 1, paddingVertical: 20, paddingHorizontal: 5 },
  header: { textAlign: 'center', fontSize: 25, fontWeight: "bold" },
  box: { height: 150, width: 150, margin: 5 },
  boxbgGreen: { backgroundColor: "green" },
  boxbgRed: { backgroundColor: "red" },
  flexBoxes: { height: 400, flex: 1, flexDirection: 'row', borderWidth: 2, borderColor: 'black' },
  welcomeBox: { justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }

})