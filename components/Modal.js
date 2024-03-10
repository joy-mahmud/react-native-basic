
import { Button, Modal, Text, View } from "react-native"

function OpenModal({modalvisible,setModalVisible}) {
    
  return (
    <Modal visible={modalvisible} onRequestClose={()=>setModalVisible(false)} animationType="slide" presentationStyle="pageSheet"> 
        <View>
            <Text>this is modal content</Text>
            <Button onPress={()=>setModalVisible(false)} title="close"/>
        </View>
    </Modal>
  )
}

export default OpenModal