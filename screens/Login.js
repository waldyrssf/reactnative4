import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Input, Button, ThemeProvider } from "react-native-elements";

const tema = {
  Button:{
  buttonStyle: {
      backgroundColor:'red'
  },
  },
  };
  
  export default function LoginScreen({navigation}) {
    return (
      <View
        style={[
          styles.container,
          {
            flexDirection: "column",
          },
        ]}
      >
        <View style={{ flex: 3, alignItems: "center", paddingTop: 30 }}>
          <Avatar
            size="large"
            rounded
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/1946/1946429.png",
            }}
          />
        </View>
  
        <View style={{ flex: 5, paddingTop: 30 }}>
        <Text>  Login</Text>
          <Input/>
          <Text>  Senha</Text>
          <Input/>
        </View>
  
  
        <View style={{ flex: 2, paddingTop: 40}}>
          <Button title="Login" type="solid" onPress={()=>navigation.navigate('Listar')}/>
        </View>
  
        
        <View style={{ flex: 2, fontWeight: 'bold'}}>
            <ThemeProvider theme={tema}>
          <Button title="Cadastre-se" type="solid" onPress={()=>navigation.navigate('Cadastro')}/>
          </ThemeProvider>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f4ebf2',
    },
  });
  

  