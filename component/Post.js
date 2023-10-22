import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const Post = (props) => {

  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <Image
         style={styles.tinyLogo}
         source={{
          uri: props.photoURL,
           }}      
      />

      <View>   
        <TouchableOpacity>
           <Text style={styles.text1}>{props.name}</Text>
         <Text style={styles.text2}>{props.username}
         </Text>
        </TouchableOpacity>
      </View>
     </View> 

     <View style={styles.container3}>
        <View>
          <Text style={styles.text3}>
            {props.children}
          </Text>
        </View>
     </View>

     <View style={styles.container2}>
      <Text style={styles.text4}>11.20 a.m | </Text>
      <Text style={styles.text4}>21 october 2023 | </Text>
     </View>

    <View style={styles.button}>
    <TouchableOpacity style={styles.button}>
        <AntDesign name="like2" size={20} color="black" />
         <Text>7.9k</Text>
     </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
         <EvilIcons name="comment" size={24} color="black" />
         <Text>50</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button} onPress={props.goToLogin}>
          <AntDesign name="retweet" size={20} color="black" />
        <Text>56.7k</Text>
      </TouchableOpacity>
     <TouchableOpacity style={styles.button}>
       <Entypo name="share-alternative" size={15} color="black" />
       <Text>999</Text>
     </TouchableOpacity>
    </View>
   


    </View>
    
  )
}
//window + v (tengok copy paste history)
//shift + Alt + F ()
const styles = StyleSheet.create({
    
    container1: {
     height : 240,
     width : 400,
     borderWidth : 2,//wajib
     //borderColor: "AAAAAA",
     borderRadius:35,
     padding:10,
     justifyContent: 0,//X-axis
     //alignItems: 'center',//y-axis
    margin:10,
   
    },

    tinyLogo: {
        width : 45,
        height : 45,
        borderRadius:32,       
    },
    container2: {
      display:'flex',
      flexDirection:'row',
    },

    container3: {
      height : 120,
      width : 370,
      borderWidth : 2,//wajib
      borderColor: 'white',
      borderRadius:30,
      //padding:10,
      //justifyContent: 0,//X-axis
      //alignItems: 'center',//y-axis
      
    },

    text1:{
      fontWeight:'bold',
      marginLeft:5,
    },
    
    text2:{
      fontWeight:'thin',
      marginTop:2,
      marginLeft:3,
      
    },

    text3:{
      textAlign:'justify',
      marginTop:5,
    },

    text4:{
      marginBottom:0,
    },

    button:{
      justifyContent:'space-evenly',
      marginTop:10,
      flexDirection:'row',
  
    }
})
export default Post