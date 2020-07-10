import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import TiraFoto from './TiraFoto';


const ContatoInput = (props) => {

  const [nome, setNome] = useState(props.contato.nome);
  const [telefone, setTelefone] = useState(props.contato.telefone);

  const [imagemURI, setImagemURI] = useState(props.contato.imagemURI);
  const fotoTirada = imagemURI => {
    setImagemURI(imagemURI);
  }

  return (
    
    <View style={estilos.contatoView}>
      <TextInput
        placeholder="Nome..."
        style={estilos.contatoTextInput}
        onChangeText={(t) => setNome(t)}
        value={nome}
      />
      <TextInput
        placeholder="Telefone..."
        style={estilos.contatoTextInput}
        onChangeText={(t) => setTelefone(t)}
        value={telefone}
      />
      <TiraFoto 
        onFotoTirada={fotoTirada}
        style={estilos.foto}
        contato={props.contato}
      />
      <View style={estilos.botao}>
        <Button
          title="Salvar"
          onPress={() =>
            props.onSalvarContato(
              props.contato.key, nome, telefone, imagemURI)}
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contatoTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2
  },
  contatoView: {
    marginBottom: 8,
    alignItems: 'center'
  },
  botao: {
    width: '80%',
    marginTop: 8
  },
  botao: {
    width: '80%',
    marginTop: 8
  }
});

export default ContatoInput;