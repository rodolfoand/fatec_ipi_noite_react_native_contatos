export const ADD_CONTATO = 'ADD_CONTATO';
export const RMV_CONTATO = 'RMV_CONTATO';

export const addContato = (key, nome, telefone, imagem) => {
    return {
        type: ADD_CONTATO, dadosContato: {
            key: key
            , nome: nome
            , telefone: telefone
            , imagem: imagem
          }
    }
}


export const rmvContato = (key) => {
    return {
        type: RMV_CONTATO, dadosContato: {
            key: key
          }
    }
}

