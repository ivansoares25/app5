import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, Image, Text } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imagens/detalhe_empresa.png');

const corDeFundo = '#ec7148';

export default class CenaEmpresa extends Component {
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
        <View style={styles.detEmpresa}>
            <Image source={detalheEmpresa} />
            <Text style={styles.txtNEmpresa}>A Empresa</Text>
        </View>
        <View>
            <Text style={styles.txtEmpresa}>Será um sonho possível</Text>
            <Text style={styles.txtEmpresa}>Com certeza e muito trabalho será!</Text>
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
    detEmpresa: {
        flexDirection: 'row',
        marginTop: 30,
    },
    txtNEmpresa: {
        fontSize: 32,
        textAlignVertical: 'center',
        color: corDeFundo,
        marginLeft: 30,
    },
    txtEmpresa: {
        marginTop: 5,
        fontSize: 18,
        textAlignVertical: 'center',
        color: '#AAA',
        marginLeft: 30,
        fontWeight: 'bold',
    },

});
