import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContatoItem = (props) => {
    return (
        <TouchableOpacity onLongPress={() => props.onDelete(props.contato.key)}>
            <View style={estilos.itemNaLista}>
                <Text>Nome: {props.contato.nome}</Text>
                <Text>Telefone: {props.contato.telefone}</Text>
            </View>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    itemNaLista: {
        padding: 12,
        backgroundColor: '#CCC',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 8,
        borderRadius: 8
    }
});

export default ContatoItem;