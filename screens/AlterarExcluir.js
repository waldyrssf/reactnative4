import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import axios from "axios";
import { Button, Header, ThemeProvider } from "react-native-elements";
import FlashMessage, { showMessage } from "react-native-flash-message";

const tema = {
    Button:{
    buttonStyle: {
        backgroundColor:'red'
    },
    },
    };

export default function AlterarExcluirScreen({ route, navigation }) {
  const [getNome, setNome] = useState();
  const [getEmail, setEmail] = useState();
  const [getTelefone, setTelefone] = useState();
  const [getId, setId] = useState();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (route.params) {
      const { nome } = route.params;
      const { email } = route.params;
      const { telefone } = route.params;
      const { id } = route.params;

      setNome(nome);
      setEmail(email);
      setTelefone(telefone);
      setId(id);
    }
  }, []);

  function alterarDados() {
    axios
      .put("http://professornilson.com/testeservico/clientes/" + getId, {
        nome: getNome,
        email: getEmail,
        telefone: getTelefone,
      })
      .then(function (response) {
        showMessage({
          message: "Registro alterado",
          type: "success",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function excluirDados() {
    axios
      .delete("http://professornilson.com/testeservico/clientes/" + getId)
      .then(function (response) {
        showMessage({
          message: "Registro excluído",
          type: "danger",
        });

        setNome(null);
        setEmail(null);
        setTelefone(null);
        setId(null);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <View style={{ alignItems: "center", backgroundColor: "#f4ebf2", flex: 1 }}>
      <Header
        leftComponent={
          <Button title="<" onPress={() => navigation.navigate("Listar")} />
        }
        centerComponent={{ text: "CONTATO", style: { color: "#fff" } }}
      />

      <Text style={{ paddingTop: 80 }}>Digite seu Nome</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setNome(text)}
        value={getNome}
      />

      <Text>Digite seu Email</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setEmail(text)}
        value={getEmail}
      />

      <Text>Digite seu Telefone</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setTelefone(text)}
        value={getTelefone}
      />

      <View style={{ paddingTop: 30, height: 70, width: 300 }}>
        <Button title="Alterar" onPress={() => alterarDados()}></Button>
      </View>

      <View style={{ paddingTop: 10, height: 70, width: 300 }}>
        <ThemeProvider theme={tema}>
        <Button title="Excluir" onPress={() => excluirDados()}></Button>
        </ThemeProvider>
      </View>

      <FlashMessage position="top" />
    </View>
  );
}
