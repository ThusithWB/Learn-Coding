import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const NavigateToDetails = props => {
    props.navigation.navigate('Lead');
}

const Login = props => {
    return (
      <LinearGradient 
        style={styles.container}
        colors={["#ffffff","#BF2B00"]}
        start={{x: 2, y:0.5}}
       >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <Text style={{ alignItems: 'flex-start'}}>Enter Username</Text>
        <TextInput style={{ backgroundColor: '#f1f3f6',
                            height: 44,
                            width: 200,
                            borderRadius: 8,
                            marginBottom:10,
                            borderWidth: 2,
                            borderColor: '#16C9BD',}}/>
          
    <Text style={{ alignItems: 'flex-start'}}>Enter Password</Text>
       <TextInput style={{ backgroundColor: '#f1f3f6',
                            height: 44,
                            width: 200,
                            borderRadius: 8,
                            marginBottom:10,
                            borderWidth: 2,
                            borderColor: '#16C9BD',}}/>

        <Button title="Login" onPress={() => NavigateToDetails(props)}/>
      </View>
      </LinearGradient>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16
    }
  });

export default Login;
