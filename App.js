import { ScrollView, Text, Image } from "react-native";

export default function App() {
  return (<ScrollView style={{backgroundColor: "plum", padding: 60}}>
    <Text style={{fontSize: 80}}>I'm a dev, lol</Text>
    <Image source={{ uri: "https://picsum.photos/200"}} style={{width:200, height:200}}/>
    <Text style={{fontSize: 80}}>I'm a dev, lol</Text>
    <Image source={{ uri: "https://picsum.photos/200"}} style={{width:200, height:200}}/>
    <Text style={{fontSize: 80}}>I'm a dev, lol</Text>
    <Image source={{ uri: "https://picsum.photos/200"}} style={{width:200, height:200}}/>
    <Text style={{fontSize: 80}}>I'm a dev, lol</Text>
    <Image source={{ uri: "https://picsum.photos/200"}} style={{width:200, height:200}}/>

  </ScrollView>)
}