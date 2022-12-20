import React, { useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import { Header, Button, Text } from "react-native-elements";
import FlashMessage, { showMessage } from "react-native-flash-message";
import axios from "axios";

export default function CadastroContatoScreen({ navigation }) {
  const [getNome, setNome] = useState();
  const [getEmail, setEmail] = useState();
  const [getTelefone, setTelefone] = useState();

  async function inserirDados() {
    await axios.post("http://professornilson.com/testeservico/clientes", {
        nome: getNome,
        email: getEmail,
        telefone: getTelefone,
      })
      .then(function (response) {
        showMessage({
          message: "Registro salvo",
          type: "success",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View style={{ alignItems: "center", backgroundColor: "#f4ebf2", flex: 1 }}>
      <Header
        centerComponent={{ text: "CONTATO", style: { color: "#fff" } }}
        leftComponent={
          <Button title="<" onPress={() => navigation.navigate("Listar")} />
        }
      />

      <View style={{ paddingTop: 80 }}>
        <Text>Nome</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "gray",
            borderWidth: 1,
          }}
          onChangeText={(text) => setNome(text)}
          value={getNome}
        />
        <Text style={{ paddingTop: 20 }}>Email</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "gray",
            borderWidth: 1,
          }}
          onChangeText={(text) => setEmail(text)}
          value={getEmail}
        />
        <Text style={{ paddingTop: 20 }}>Telefone</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "gray",
            borderWidth: 1,
          }}
          onChangeText={(text) => setTelefone(text)}
          value={getTelefone}
        />
      </View>

      <View style={{ paddingTop: 30, height: 70, width: 300 }}>
        <Button
          title="Salvar"
          type="solid"
          onPress={() => inserirDados()}
        ></Button>
        <FlashMessage position='top'/>
      </View>
    </View>
  );
}
