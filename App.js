import { Alert, Dimensions, Image, StyleSheet, PermissionsAndroid,Platform, Text,  TouchableOpacity,  View } from 'react-native'
import React, { useEffect } from 'react'
import PlayHome from './components/PlayPage/PlayHome'
import TrackPlayer from 'react-native-track-player'
import RNFetchBlob from 'rn-fetch-blob'


const App = () => {
  const width = Dimensions.get("window").width
  const height = Dimensions.get("window").height

  const {fs,config} = RNFetchBlob;

  const checkPermission = async()=>{
    try {
      if(Platform.OS ==="ios"){
        downloadImage()
      }
      else{
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{
              title:"App Permission Request",
              message:"App need to access storage to download file"
            }
          )
          if(granted === PermissionsAndroid.RESULTS.GRANTED){
            console.log("Storage Permission Granted")
            downloadImage()
          }
        } catch (error) {
          Alert.alert("Storage permission not granted")
        }
      }
    } catch (error) {
      
      Alert.alert("Storage permission not granted 2")
    }
  }

  const downloadImage = ()=>{
    const date = new Date()
    const ImageUrl = ImagePath
    let ext = getExtension(ImageUrl)
    console.log("1" , ext)
    ext = '.'+ext[0]
    console.log("2" , ext)
    const {config,fs} = RNFetchBlob;

    let downloads = fs.dirs.DownloadDir;
    console.log("DOWNLOADs",downloads)
    let options = {
      fileCache:true,
      addAndroidDownloads:{
        useDownloadManager:true,
        notification:true,
        path: downloads + '/ReactNativeImage_' +Math.floor(date.getTime()+date.getSeconds() /2)+ext,
        description:"Image"
      }
    }
    console.log("4")

    config(options).fetch('GET',ImageUrl).then((res)=>{
      JSON.stringify(res),
      alert("Image Downloaded Successfully")
    })
  }
  
  const getExtension = (fileName)=>{
    return /[.]/.exec(fileName) ? /[^.]+$/.exec(fileName) : undefined
  }

  

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
  
  const ImagePath = "https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
  
  return (
    <View style={{paddingHorizontal:20,paddingVertical:40,borderRadius:10,borderWidth:1,borderColor:"black"}}>
      {/* <PlayHome/> */}
      <Image style={{width:"100%",height:"70%"}} source={{uri:ImagePath}}/>
      <TouchableOpacity onPress={()=>checkPermission()} style={{display:"flex",alignItems:"center",paddingVertical:15,borderWidth:1,marginTop:20,borderRadius:5,borderColor:"orange",backgroundColor:"orange"}}>
        <Text>Download Image</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})