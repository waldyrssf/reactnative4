import React from "react";
import { View, TextInput } from "react-native";
import { Header, Input, Button, Text, Avatar } from "react-native-elements";

export default function CadastroScreen({ navigation }) {
  return (
    <View style={{ alignItems: "center", backgroundColor: "#f4ebf2", flex: 1 }}>
      <Header
        centerComponent={{ text: "USUÁRIO", style: { color: "#fff" } }}
        leftComponent={
          <Button title="<" onPress={() => navigation.navigate("Login")} />
        }
      />

      <View style={{ paddingTop: 80 }}>
        <Text> Email</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "gray",
            borderWidth: 1,
          }}
        />
        <Text style={{ paddingTop: 20 }}> Senha</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "gray",
            borderWidth: 1,
          }}
        />
      </View>

      <View style={{ paddingTop: 30, height: 70, width: 300 }}>
        <Button title="Salvar" type="solid" />
      </View>
    </View>
  );
}
