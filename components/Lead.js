import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView,
        StyleSheet,
        TouchableOpacity,
        Image,
        Linking, Text, View, Button} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const NavigateToDetails = props => {
  props.navigation.navigate('Mobile');
}

const NavToWeb = props => {
  props.navigation.navigate('Web');
}

const NavToStand = props => {
props.navigation.navigate('Stand');
}

const Lead = props => {
  return (
    <LinearGradient 
        style={styles.container}
        colors={["#ffffff","#5AEB3D"]}
        start={{x: 2, y:0.5}}
       >
      <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
        flexDirection: "column",
      //backgroundColor:"red"
    }]}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
         <Text style={styles.textSecond}>  Hello Developer..,</Text>
         <Text style={styles.textFirst}>  Select what you want to learn..</Text>
      </View>
      <View style={{ flex: 2,
                     backgroundColor: "white", 
                     alignItems:'center',
                     justifyContent: 'center',
                     borderTopLeftRadius:40,
                     borderTopRightRadius:40,
                     
                      }}>

      <TouchableOpacity onPress={() => NavigateToDetails(props)}>
        <View style={styles.button}>
          <Text>Mobile App Development</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => NavToWeb(props)}>
        <View style={styles.button}>
          <Text>Web Development</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => NavToStand(props)}>
        <View style={styles.button}>
          <Text>Standalone Software Development</Text>
        </View>
      </TouchableOpacity>
      </View>
     </View>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 10,
    width:400,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#94EB3D',
  },

  textFirst: {
    fontSize: 27,
    fontWeight: '300',
    color: 'red'
  },

  textSecond: {
    fontSize: 40,
    fontWeight: '300',
    color: '#823deb'
  },

});

export default Lead;