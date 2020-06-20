import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';

export default function App() {
  
  const [contatos, setContatos] = useState([]);
  const [contadorContatos, setContadorContatos] = useState(0);

  const adicionarContato = (nome, telefone) => {
    setContatos((contatos) => {
      setContadorContatos(contadorContatos + 1);
      return [
        {
          key: contadorContatos.toString()
          , nome: nome
          , telefone: telefone
        },
        ...contatos];
    });
    console.log('Nome: ' + nome);
    console.log('Telefone: ' + telefone);
  }

  const excluirContato = (key) => {
    setContatos(() => contatos.filter(contato => {return contato.key != key})
    );
  }

  const apagarContatos = () => {
    setContatos([]);
  }

  return (
    <View style={styles.telaPricipalView}>
      <ContatoInput
        onAdicionarContato={adicionarContato}
        onApagarTudo={apagarContatos}
      />
      
      <View>
        <FlatList
          data={contatos}
          renderItem={
            contato => (
              <ContatoItem
                contato={contato.item}
                onDelete={excluirContato}
              />
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  telaPricipalView: {
    padding: 50
  }
});
