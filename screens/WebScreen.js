import React, { useRef, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Button, Image, DrawerLayoutAndroid, Linking, Text, TouchableOpacity, StyleSheet, View } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

const WebScreen = props => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

  const NavigateToDetails = props => {
    props.navigation.navigate('Home');
}
  

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <TouchableOpacity onPress={() => {
        Linking.openURL('https://www.w3schools.com/html/');
      }}>
         <View style={styles.button2}>
          <Text>HTML</Text>
         </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        Linking.openURL('https://www.w3schools.com/css/');
      }}>
         <View style={styles.button2}>
          <Text>CSS</Text>
         </View>
      </TouchableOpacity>

     <TouchableOpacity onPress={() => {
        Linking.openURL('https://www.w3schools.com/js/');
      }}>
         <View style={styles.button2}>
          <Text>JavaScript</Text>
         </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => {
        Linking.openURL('https://www.w3schools.com/php/');
      }}>
         <View style={styles.button2}>
          <Text>PHP</Text>
         </View>
      </TouchableOpacity>

      
      <Button
        title="Exit Tutorial"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <LinearGradient 
        style={styles.container}
        colors={["#ffffff","#A300BF"]}
        start={{x: 2, y:0.5}}
       >
      <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
         <Text style={styles.textSecond}>Web Development</Text>
      </View>
     
      <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
         <View style={styles.button}>
          <Text>Start Learning</Text>
         </View>
        </TouchableOpacity>

        <Button title="Exit" onPress={() => NavigateToDetails(props)}/>

        <Image source={{uri: 'https://theedvolution.com/wp-content/uploads/2020/10/best-coding-website-for-kids-500x250.png'}}
                               style={{width: 400,
                                       height: 200,
                                       marginTop:25,
                                       borderBottomLeftRadius:50,
                                       borderTopRightRadius:50}} />
        
      </View>
      </LinearGradient>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
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
    backgroundColor: '#94EB3D',
  },

  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginBottom: 10,
    width:170,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#13f0e5',
  },

  textSecond: {
    fontSize: 30,
    fontWeight: '300',
    color: '#fc5a03'
  },
});

export default WebScreen;