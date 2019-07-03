import { createStackNavigator, createAppContainer } 
    from 'react-navigation';

import CenaPrincipal from './CenaPrincipal';
import CenaCliente from './CenaCliente';
import CenaContato from './CenaContato';
import CenaEmpresa from './CenaEmpresa';
import CenaServicos from './CenaServicos';

const RootStack = createStackNavigator(
  {
    Principal: CenaPrincipal,
    Clientes: CenaCliente,
    Contato: CenaContato,
    Empresa: CenaEmpresa,
    Servicos: CenaServicos,
  },
  {
    initialRouteName: 'Principal',
  }
);

const Rotas = createAppContainer(RootStack);

export default Rotas;
