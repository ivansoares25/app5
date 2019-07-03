import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, Image, Text } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheServicos = require('../imagens/detalhe_servico.png');

const corDeFundo = '#19c1d8';

export default class CenaServicos extends Component {
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
        <View style={styles.detServicos}>
            <Image source={detalheServicos} />
            <Text style={styles.txtNServicos}>Os Servicos</Text>
        </View>
        <View>
            <Text style={styles.txtServicos}>- Agenda Escolar</Text>
            <Text style={styles.txtServicos}>- Comunicação empresarial</Text>
            <Text style={styles.txtServicos}>- Desenvolvimento de aplicativos</Text>
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
    detServicos: {
        flexDirection: 'row',
        marginTop: 30,
    },
    txtNServicos: {
        fontSize: 32,
        textAlignVertical: 'center',
        color: corDeFundo,
        marginLeft: 30,
    },
    txtServicos: {
        marginTop: 5,
        fontSize: 18,
        textAlignVertical: 'center',
        color: '#AAA',
        marginLeft: 30,
        fontWeight: 'bold',
    },

});
