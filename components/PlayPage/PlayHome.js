import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Dots, Icon, MusicIcon, Next, Pause, Play, Previous} from '../../components/assets/icons/icons'
import TrackPlayer from 'react-native-track-player'

import React, { useEffect, useState } from 'react'

const PlayHome = () => {

    const circleHeight=Dimensions.get("window").height;
    const innerCircleWidth=Dimensions.get("window").width;

    const [play, setPlay] = useState(false)

    const track = [
      {
        id:1,
        url:require('../assets/tracks/sound1.mp3'),
        title:"Bass Boost Beat"
      },
      {
        id:2,
        url:require('../assets/tracks/sound1.mp3'),
        title:"Bass Boost Beat 2"
      }
    ]

    const setUpTrackPlayer = async()=>{
      try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add(track)
      } catch (error) {
       
      }
    }

    useEffect(() => {
    setUpTrackPlayer();

    return ()=>TrackPlayer.destroy()
    }, [])

    const plays = ()=>{
      try {
        setPlay(!play)

        if(play){
          TrackPlayer.addEventListener("remote-pause",TrackPlayer.pause())
        }
        else {
          TrackPlayer.addEventListener("remote-play",TrackPlayer.play())
        }
      } catch (error) {
        
      }
    }
    

  return (
    <View>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <TouchableOpacity>
        <Text>{<Icon name='angle-down' size={20}/> }</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <Text>{<MusicIcon name="music" size={35}/>}</Text>
        </TouchableOpacity>
         
         <TouchableOpacity>
         <Text>{<Dots name="dots-vertical" size={25}/>}</Text>
         </TouchableOpacity>
      </View>
      
      <View>
          <View style={{borderWidth:1,height:220,borderRadius:110,width:220,alignSelf:"center",marginTop:100}}>
          </View>
      </View>

      <View style={{display:"flex",marginTop:20}}>
        {<Text style={{alignSelf:"center"}}>{play?("Playing Song..."):("Paused !!")}</Text>}
      </View>

      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:50}}>
        <TouchableOpacity>
        <Text>{<Previous name="previous" size={30}/>}</Text>
        </TouchableOpacity>
       <TouchableOpacity onPress={()=>plays()}>
       {play ? 
       (<Text>{<Pause name="pause" size={30}/>}</Text>) : <Text>{<Play name="play" size={30}/>}</Text>}
       </TouchableOpacity>

        <TouchableOpacity>
        <Text>{<Next name='next' size={30}/>}</Text>
        </TouchableOpacity>
      </View>

      <View>
      <View style={{borderWidth:1,borderColor:"black",marginTop:150,height:70,borderRadius:10,alignContent:"center"}}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
          <View style={{borderWidth:1,borderColor:"black",height:50,width:50,borderRadius:25}}></View>
          <View style={{borderWidth:1,borderColor:"black",height:50,width:50,borderRadius:25}}></View>
          <View style={{borderWidth:1,borderColor:"black",height:50,width:50,borderRadius:25}}></View>
        </View>
      </View>
    </View>
    </View>
  )
}

export default PlayHome

const styles = StyleSheet.create({})