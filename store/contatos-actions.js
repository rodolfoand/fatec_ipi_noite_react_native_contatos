export const ADD_CONTATO = 'ADD_CONTATO';
export const RMV_CONTATO = 'RMV_CONTATO';

export const addContato = (nome, telefone) => {
    return {
        type: ADD_CONTATO, dadosContato: {
            nome: nome
            , telefone: telefone
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

