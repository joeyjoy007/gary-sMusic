import { Alert, Dimensions, StyleSheet,  Text,  TouchableOpacity,  View } from 'react-native'
import React, { useEffect } from 'react'
import PlayHome from './components/PlayPage/PlayHome'
import TrackPlayer from 'react-native-track-player'


const App = () => {
  const width = Dimensions.get("window").width
  const height = Dimensions.get("window").height

  const tracks = [
    {
      id:1,
      url:require('./components/tracks/sound1.mp3'),
      title:"Bass Boost Beat"
    },
    {
      id:2,
      url:require('./components/tracks/sound1.mp3'),
      title:"Bass Boost Beat 2"
    }
  ]

  const setUpTrackPlayer = async()=>{
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(tracks)
    } catch (error) {
      Alert.alert(error)
    }
  }

  useEffect(() => {
    setUpTrackPlayer();

    return ()=>TrackPlayer.destroy()
  }, [])
  
  
  return (
    <View style={{paddingHorizontal:20,paddingVertical:40,borderRadius:10,borderWidth:1,borderColor:"black"}}>
      <PlayHome/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})