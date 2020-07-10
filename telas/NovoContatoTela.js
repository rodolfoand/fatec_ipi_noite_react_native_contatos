import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, FlatList } from 'react-native';
import ContatoInput from '../components/ContatoInput';
import ListaContatosTela from './ListaContatosTela';
import ContatoItem from '../components/ContatoItem';
import { useDispatch } from 'react-redux';
import * as contatosActions from '../store/contatos-actions';


const NovoContatoTela = (props) => {

    const dispatch = useDispatch();
    const [contato, setContato] = useState({
        key: null
        , nome: ''
        , telefone: ''
        , imagemURI: ''
    });

    const salvarContato = (key, nome, telefone, imagem) => {

        dispatch(contatosActions.addContato(null, nome, telefone, imagem));
        props.navigation.goBack();

    }

    return (
        <View>
            <View>
                <ContatoInput
                    onSalvarContato={salvarContato}
                    contato={contato}
                />
            </View>
        </View>
    );
}
NovoContatoTela.navigationOptions = (dadosNav) => {
    return {
        headerTitle: "Novo contato"
    }
};

const estilos = StyleSheet.create({

});

export default NovoContatoTela;