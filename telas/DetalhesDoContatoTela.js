import React from 'react';
import { View } from 'react-native';
import ContatoInput from '../components/ContatoInput';
import { useDispatch } from 'react-redux';
import * as contatosActions from '../store/contatos-actions';

const DetalhesDoContatoTela = (props) => {

    const dispatch = useDispatch();


    const salvarContato = (key, nome, telefone, imagem) => {

        dispatch(contatosActions.addContato(key, nome, telefone, imagem));
        props.navigation.goBack();

    }

    return (
        <ContatoInput 
        onSalvarContato={salvarContato}
        contato={props.navigation.getParam('contato')}
        />
    );
}

DetalhesDoContatoTela.navigationOptions = (dadosNav) => {
    return {
        headerTitle: "Editar contato"
    }
};

export default DetalhesDoContatoTela;