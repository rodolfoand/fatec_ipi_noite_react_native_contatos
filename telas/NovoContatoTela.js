import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, FlatList } from 'react-native';
import ContatoInput from '../components/ContatoInput';
import ListaContatosTela from './ListaContatosTela';
import ContatoItem from '../components/ContatoItem';
import { useDispatch } from 'react-redux';
import * as contatosActions from '../store/contatos-actions';


const NovoContatoTela = (props) => {

    const dispatch = useDispatch();


    const adicionarContato = (nome, telefone) => {
        
        dispatch(contatosActions.addContato(nome, telefone));
        props.navigation.goBack();
        
    }

    return (
        <View>
            <View>
                <ContatoInput
                    onAdicionarContato={adicionarContato}
                />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({

});

export default NovoContatoTela;