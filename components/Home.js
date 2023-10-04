import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View, Button, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';

const NavigateToDetails = props => {
    props.navigation.navigate('Register');
}

const Home = props => {
    return (
      
       <LinearGradient 
        style={styles.container}
        colors={["#ffffff","#0DBF00"]}
        start={{x: 2, y:0.5}}
       >
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.textFirst}>Learn Coding App</Text>
          <Image source={{uri: 'https://theedvolution.com/wp-content/uploads/2020/10/best-coding-website-for-kids-500x250.png'}}
                               style={{width: 400,
                                       height: 200,
                                       marginTop:25,
                                       borderBottomLeftRadius:50,
                                       borderTopRightRadius:50}} />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => NavigateToDetails(props)}>
         <View style={styles.button}>
          <Text>Get Started...!</Text>
         </View>
        </TouchableOpacity>
        </View>
      </LinearGradient>  
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    textFirst: {
      fontSize: 30,
      fontWeight: '500',
    },

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      marginTop: 10,
      marginBottom: 20,
      width:200,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#20e8e1',
    },
  })

export default Home;
