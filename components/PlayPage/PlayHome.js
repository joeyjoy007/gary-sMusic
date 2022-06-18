import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'
import MusicIcon from 'react-native-vector-icons/Feather'
import Dots from 'react-native-vector-icons/MaterialCommunityIcons'
import Previous from 'react-native-vector-icons/Foundation'
import Next from 'react-native-vector-icons/Foundation'
import Play from 'react-native-vector-icons/FontAwesome'
import Pause from 'react-native-vector-icons/Fontisto'
import React, { useState } from 'react'

const PlayHome = () => {

    const circleHeight=Dimensions.get("window").height;
    const innerCircleWidth=Dimensions.get("window").width;

    const [play, setPlay] = useState(false)

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
       <TouchableOpacity onPress={()=>setPlay(!play)}>
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