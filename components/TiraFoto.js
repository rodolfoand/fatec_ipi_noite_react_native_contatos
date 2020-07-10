import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const TiraFoto = props => {

    const [imagemURI, setImagemURI] = useState(props.contato.imagemURI);

    const tirarFoto = async () => {
        const foto = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        });
        //console.log(foto);
        setImagemURI(foto.uri);
        //console.log(imagemURI);
        props.onFotoTirada(foto.uri);
    }

    return (
        <View style={{width:'80%'}}>
            <View style={estilos.principal}>
                {
                    !imagemURI ?
                        <Text>Nenhuma foto.</Text>
                        :
                        <View style={estilos.previewDaImagem}>
                            <Image
                                style={estilos.imagem}
                                source={{ uri: imagemURI }}
                            />
                        </View>
                }
            </View>
            <View style={estilos.botao}>
            <Button
                title="Escolher foto"
                onPress={tirarFoto}
            />
            </View>
        </View>
    )
};

const estilos = StyleSheet.create({
    principal: {
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15
    },
    previewDaImagem: {
        marginTop: 15,
        width: 200,
        height: 200,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#CCC',
        borderWidth: 1
    },
    imagem: {
        width: '100%',
        height: '100%'
    },
    botao: {
      marginTop: 8,
      alignItems: 'center'
    },
    texto: {
        width: '80%',
        alignSelf: 'center'
    }
});
export default TiraFoto;