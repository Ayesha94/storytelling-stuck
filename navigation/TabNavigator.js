import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

import Feed from '../screens/Feed';
import CreateStory from '../screens/CreateStory';

//we are creating bottom tab navigator called Tab
const Tab=createMaterialBottomTabNavigator();

const BottomTabNavigator=()=> {
  return (
    //using Navigation container to wrap our screens
   
   <Tab.Navigator
      //with the help of attributes we define specifications
      labeled={false}
      barStyle={styles.bottomTabStyle}
      //in screen options we define icons for all routes:Feed and CreateStory
      screenOptions={({route})=>({
        tabBarIcon:({focused, color,size})=>{
          let iconName;
          if(route.name==="Feed"){
            iconName=focused
            ?'home'
            :'home-outline';
          }else if(route.name==='CreateStory'){
            iconName=focused
            ?'add-circle'
            :'add-circle-outline';
          }
          return <Ionicons name={iconName} color={color}  size={20}/>;

        },
      })}
      activeColor={"#ee8249"}
      inactiveColor={"gray"}
    >
     <Tab.Screen name="Feed" component={Feed}/>
     <Tab.Screen name="CreateStory" component={CreateStory}/>
   </Tab.Navigator>

   
  );
}
const styles=StyleSheet.create({
    bottomTabStyle:{
        backgroundColor:"#2f345d",
        height:'8%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        overflow:"hidden",
        position:"absolute"
    },
    icons:{
        width:RFValue(30),
        height:RFValue(30)
    }
})
export default BottomTabNavigator

