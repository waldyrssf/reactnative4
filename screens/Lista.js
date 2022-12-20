import React, { useState, useEffect } from "react";
import { View } from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import { ListItem, Avatar, Button, Header } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";

export default function ListaScreen({navigation }) {
    const [list, setList] = useState([]);
    const refresh = useIsFocused();
  
    useEffect(() => {
      function consultarDados() {
        axios
          .get("http://professornilson.com/testeservico/clientes")
          .then(function (response) {
            setList(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      consultarDados();
    }, [refresh]);
  
    return (
      <View>
        <Header
          centerComponent={{ text: "LISTA DE CONTATOS", style: { color: "#fff" } }}
          rightComponent={<Button title='+' onPress={()=>navigation.navigate('CadastroContato')}></Button>}
        />
        <ScrollView>
          {list.map((linha, indice) => (
            <ListItem key={indice} bottomDivider onPress={()=>navigation.navigate('AlterarExcluir', 
            {
              nome: linha.nome,
              telefone: linha.telefone,
              cpf: linha.cpf,
              id: linha.id
            }
            )}>
              <Avatar
                source={{
                  uri: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png",
                }}
              />
              <ListItem.Content>
                <ListItem.Title>{linha.nome}</ListItem.Title>
                <ListItem.Subtitle>{linha.telefone}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
      </View>
    );
  }
  
