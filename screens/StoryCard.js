import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons';

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea}/>
          <View style={styles.cardContainer}>
            <View style={styles.storyImage}>
              <Image source={require("../assets/story_image_1.png")}
                      style={{
                        resizeMode:'contain', 
                        width:Dimensions.get('window').width-60, 
                        height:250, 
                        borderRadius:10
                        }}>
              </Image>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.storyTitleText}>
                {this.props.story.title}
              </Text>
              <Text style={styles.storyAuthorText}>
                {this.props.story.author}
              </Text>
              <Text style={styles.descriptionText}>
                {this.props.story.description}
              </Text>
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea:{
    marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
  },
  cardContainer:{
   margin:RFValue(13),
    backgroundColor:"#2f345d",
    borderRadius:20,
  },
  titleContainer:{
    paddingLeft:RFValue(20),
    justifyContent:"center"
  },
  storyTitleText:{
    fontFamily:"Bubblegum-Sans",
    fontSize:25,
    color:"white"
  },
  storyAuthorText:{
    fontFamily:"Bubblegum-Sans",
    fontSize:25,
    color:"white"
  },
  descriptionContainer:{
    marginTop:5
  },
  descriptionText:{
    fontFamily:"Bubblegum-Sans",
    fontSize:13,
    color:"white"
  },
  actionContainer:{
    marginTop:10,
    justifyContent:"center",
    alignItems:"center"
  },
  likeButton:{
    backgroundColor:"#eb3948",
    borderRadius:30,
    width:160,
    height:40,
    flexDirection:"row"
  },
  likeText:{
    color:"white",
    fontFamily:"Bubblegum-Sans",
    fontSize:RFValue(25),
    marginLeft:RFValue(5),
  }
  
});