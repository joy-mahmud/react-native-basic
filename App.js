import { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import OpenModal from './components/Modal';
import { ActivityIndicator, Alert, Button, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalvisible, setModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello world</Text>
      {/* <ActivityIndicator size={'large'} color={'midnightblue'}/> */}


      <ScrollView>
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
      </ScrollView>
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />
      <OpenModal modalvisible={modalvisible} setModalVisible={setModalVisible}></OpenModal>
      <Button title="Alert button" onPress={() => Alert.alert("Invalid data", "dob missing", [{ text: "cancel", onPress: () => console.log("cancel Pressed") }, { text: 'Ok', onPress: () => console.log("ok pressed") }])} style={{ borderRadius: 5 }} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { backgroundColor: "plum", flex: 1, paddingTop: 40, paddingHorizontal: 5 },
  header: { textAlign: 'center', fontSize: 25, fontWeight: "bold", marginVertical: 5 },
  box: { height: 150, width: 150, margin: 5 },
  boxbgGreen: { backgroundColor: "green" },
  boxbgRed: { backgroundColor: "red" },

})