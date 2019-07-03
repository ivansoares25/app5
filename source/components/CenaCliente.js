import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, Image, Text } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const cliente1 = require('../imagens/cliente1.png');
const cliente2 = require('../imagens/cliente2.png');
const detalheCliente = require('../imagens/detalhe_cliente.png');

export default class CenaCliente extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: <BarraNavegacao corDeFundo={navigation.getParam('corDeFundo', '#000')} />,
          headerStyle: { backgroundColor: navigation.getParam('corDeFundo', '#000'), height: 60, },
          headerTintColor: '#000', 
          headerTitleStyle: { fontWeight: 'bold', },
          };
      };

      constructor(props) {
          super(props);
          
          this.state = { corDeFundo: this.props.navigation.getParam('corDeFundo') };
      }

  render() {
    return (
    <View style={styles.cena}>
        <StatusBar backgroundColor={this.state.corDeFundo} />
        <View style={styles.detCliente}>
            <Image source={detalheCliente} />
            <Text style={[styles.txtNCliente, { color: this.state.corDeFundo }]}>Nossos Clientes
            </Text>
        </View>
        <View style={styles.vwCliente}>
            <Image source={cliente1} />
            <Text style={styles.txtCliente}>SYS Cliente 1</Text>
        </View>
        <View style={styles.vwCliente}>
            <Image source={cliente2} />
            <Text style={styles.txtCliente}>RSM Cliente 2</Text>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    cena: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    detCliente: {
        flexDirection: 'row',
        marginTop: 30,
    },
    txtNCliente: {
        fontSize: 32,
        textAlignVertical: 'center',
        marginLeft: 30,
    },
    vwCliente: {
        marginTop: 30,
    },
    txtCliente: {
        marginTop: 5,
        fontSize: 18,
        textAlignVertical: 'center',
        color: '#AAA',
        marginLeft: 30,
        fontWeight: 'bold',
    },

});
