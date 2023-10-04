import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const NavigateToDetails = props => {
    props.navigation.navigate('Login');
}

const Register = props => {
    return (
      <LinearGradient 
        style={styles.container}
        colors={["#ffffff","#BF2B00"]}
        start={{x: 2, y:0.5}}
       >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style={{ alignItems: 'flex-start'}}>User Name</Text>
        <TextInput style={{ backgroundColor: '#f1f3f6',
                            height: 44,
                            width: 200,
                            borderRadius: 8,
                            marginBottom:10,
                            borderWidth: 2,
                            borderColor: '#16C9BD',}}/>

        <Text style={{ alignItems: 'flex-start'}}>Create Password</Text>
        <TextInput style={{ backgroundColor: '#f1f3f6',
                            height: 44,
                            width: 200,
                            borderRadius: 8,
                            marginBottom:10,
                            borderWidth: 2,
                            borderColor: '#16C9BD',}}/>

        <Text style={{ alignItems: 'flex-start'}}>Confirm Password</Text>
        <TextInput style={{ backgroundColor: '#f1f3f6',
                            height: 44,
                            width: 200,
                            borderRadius: 8,
                            marginBottom:10,
                            borderWidth: 2,
                            borderColor: '#16C9BD',}}/>                    

        <Button title="Register" onPress={() => NavigateToDetails(props)}/>
        <Text>already have an account?</Text>
        <Button title="LOGIN" onPress={() => NavigateToDetails(props)}/>
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

export default Register;