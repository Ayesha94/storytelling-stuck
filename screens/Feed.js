import React, {Component} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {FlatList} from 'react-native-gesture-handler'
import StoryCard from "./StoryCard";
let customFonts={
    'Bubblegum-Sans':require('../assets/fonts/BubblegumSans-Regular.ttf')
}
let stories=require("../temp.json")
export default class Feed extends Component{
    constructor(props){
        super(props);
        this.state={
            fontsLoaded:false
        }
    }

    async _loadFontsAsync(){
        await Font.loadAsync(customFonts);
        this.setState({fontsLoaded:true});
    }

    componentDidMount(){
        this._loadFontsAsync();
    }

    renderItem=({item:story})=>{
        return <StoryCard story={story}/>
    }

    keyExtractor=(item, index)=>index.toString();

    render(){
        if(!this.state.fontsLoaded){
            return <AppLoading/>
        }
        else{
        return(
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                    <Image source={require("../assets/logo.png")} style={{width:60, height:60, resizeMode:"contain",marginLeft:10}}/>
                </View>
                <View style={styles.appTitleTextContainer}>
                <Text style={styles.appTitleText}>
                    Storytelling App
                </Text>
                </View>
            </View>
               <View style={styles.cardContainer}>
                   <FlatList
                       keyExtractor={this.keyExtractor}
                       data={stories}
                       renderItem={this.renderItem}
                   />
               </View> 
            </View>
        )
        }
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#15193c"
    },
    droidSafeArea:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
    appTitle:{
       flex:0.07,
       flexDirection:"row" ,
       flexWrap:"wrap",
       padding:5
    },
    appIcon:{
        flex:0.3
    },
    appTitleTextContainer:{
        justifyContent:"center",
        alignItems:"center"
    },
    appTitleText:{
        color:"white",
        fontSize:28,
        fontFamily:"Bubblegum-Sans",
        paddingLeft:20
    },
    cardContainer:{
        flex:0.85
    }
})