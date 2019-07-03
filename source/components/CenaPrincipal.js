import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, Image, TouchableHighlight } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../imagens/logo.png');
const menuCliente = require('../imagens/menu_cliente.png');
const menuContato = require('../imagens/menu_contato.png');
const menuEmpresa = require('../imagens/menu_empresa.png');
const menuServico = require('../imagens/menu_servico.png');

const corDeFundo = '#CCC';
const corDeFundoClientes = '#b9c941';
const corDeFundoEmpresa = '#ec7148';
const corDeFundoServicos = '#19c1d8';
const corDeFundoContato = '#61bd8c';

export default class CenaPrincipal extends Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <BarraNavegacao corDeFundo={corDeFundo} />,
        headerStyle: { backgroundColor: corDeFundo, height: 60, },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold', },
        };

  render() {
    return (
    <View style={styles.cena}>
        <StatusBar backgroundColor={corDeFundo} />
        <View style={styles.vwTitulo}>
           <Image source={logo} />
        </View>
        <View style={styles.vwMenu}>
            <TouchableHighlight 
                underlayColor={corDeFundoClientes} 
                activeOpacity={0.3} 
                onPress={() => 
                    this.props.navigation.navigate('Clientes', 
                    { corDeFundo: corDeFundoClientes, })}
            >
                <Image style={styles.imgMenu} source={menuCliente} />
            </TouchableHighlight>
            <TouchableHighlight 
                underlayColor={corDeFundoContato} 
                activeOpacity={0.3} 
                onPress={() => this.props.navigation.navigate('Contato')}
            >
                <Image style={styles.imgMenu} source={menuContato} />
            </TouchableHighlight>
        </View>
        <View style={styles.vwMenu}>
            <TouchableHighlight 
                underlayColor={corDeFundoEmpresa} 
                activeOpacity={0.3} 
                onPress={() => this.props.navigation.navigate('Empresa')}
            >
                <Image style={styles.imgMenu} source={menuEmpresa} />
            </TouchableHighlight>          
            <TouchableHighlight       
                underlayColor={corDeFundoServicos} 
                activeOpacity={0.3} 
                onPress={() => this.props.navigation.navigate('Servicos')}
            >    
                <Image style={styles.imgMenu} source={menuServico} />
            </TouchableHighlight>          
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
    statusBar: {
        backgroundColor: corDeFundo,
    },
    vwTitulo: {
        marginTop: 30,
        alignItems: 'center',
    },
    vwMenu: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    imgMenu: {
        margin: 15,
    }
});
