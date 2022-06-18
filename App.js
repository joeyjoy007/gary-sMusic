import { Alert, Dimensions, StyleSheet,  Text,  TouchableOpacity,  View } from 'react-native'
import React, { useEffect } from 'react'
import PlayHome from './components/PlayPage/PlayHome'
import TrackPlayer from 'react-native-track-player'


const App = () => {
  const width = Dimensions.get("window").width
  const height = Dimensions.get("window").height


  // const setUpTrackPlayer = async()=>{
  //   try {
  //     await TrackPlayer.setupPlayer();
  //     await TrackPlayer.add(tracks)
  //   } catch (error) {
  //     Alert.alert(error)
  //   }
  // }

  // useEffect(() => {
  //   setUpTrackPlayer();

  //   return ()=>TrackPlayer.destroy()
  // }, [])
  
  
  return (
    <View style={{paddingHorizontal:20,paddingVertical:40,borderRadius:10,borderWidth:1,borderColor:"black"}}>
      <PlayHome/>

        {/* <TouchableOpacity onPress={()=>TrackPlayer.play()}>

      <View style={{borderWidth:1,borderColor:"black",height:40,borderRadius:10,width:50}}>
  <Text>Play</Text>
</View>
      </TouchableOpacity>


<TouchableOpacity onPress={()=>TrackPlayer.pause()}>
<View style={{borderWidth:1,borderColor:"black",height:40,borderRadius:10,width:50}}>
  <Text>Pause</Text>
</View>

</TouchableOpacity>

<TouchableOpacity onPress={()=>TrackPlayer.skipToPrevious()}> 
<View style={{borderWidth:1,borderColor:"black",height:40,borderRadius:10,width:50}}>
  <Text>Previous</Text>
</View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>TrackPlayer.skipToNext()}>
<View style={{borderWidth:1,borderColor:"black",height:40,borderRadius:10,width:50}}>
  <Text>Next</Text>
</View>
</TouchableOpacity> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})