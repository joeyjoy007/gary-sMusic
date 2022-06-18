import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'
import MusicIcon from 'react-native-vector-icons/Feather'
import Dots from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'

const PlayHome = () => {

    const circleHeight=Dimensions.get("window").height;
    const innerCircleWidth=Dimensions.get("window").width;

  return (
    <View>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <Text>{<Icon name='angle-down'/>}</Text>
          <Text>{<MusicIcon name="music"/>}</Text>
          <Text>{<Dots name="dots-vertical"/>}</Text>
      </View>
      
      <View>
          <View style={{borderWidth:1,height:220,borderRadius:110,width:220,alignSelf:"center",marginTop:100}}>
          </View>
      </View>

      <View style={{display:"flex",marginTop:20}}>
        <Text style={{alignSelf:"center"}}>Play / Pause</Text>
      </View>

      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:50}}>
        <Text>Previous</Text>
        <Text>Pause / Play</Text>
        <Text>Next</Text>
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