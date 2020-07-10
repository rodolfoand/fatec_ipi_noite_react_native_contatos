import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import NovoContatoTela from '../telas/NovoContatoTela';
import ListaContatosTela from '../telas/ListaContatosTela';
import DetalhesDoContatoTela from '../telas/DetalhesDoContatoTela';


const ContatoNavigator = createStackNavigator({
    ListaDeContatos: ListaContatosTela,
    NovoContato: NovoContatoTela,
    DetalheDoContato: DetalhesDoContatoTela
});

export default createAppContainer(ContatoNavigator);