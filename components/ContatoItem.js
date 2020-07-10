import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ContatoItem = (props) => {
    return (
        <TouchableOpacity 
            onLongPress={() => props.onDelete(props.contato.key)}
            onPress={props.onSelect}>
            
            <View style={estilos.itemNaLista}>
                <Image style={estilos.imagem} source={{ uri: props.imagem }} />
                <Text>Nome: {props.contato.nome}</Text>
                <Text>Telefone: {props.contato.telefone}</Text>                
            </View>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    itemNaLista: {
        padding: 12,
        backgroundColor: '#DCDCDC',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 8,
        borderRadius: 8,
        alignItems: 'center'
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#ccc',
        borderWidth: 1
    }
});

export default ContatoItem;