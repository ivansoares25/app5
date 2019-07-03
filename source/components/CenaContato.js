/* eslint-disable no-undef */
import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, Image, Text } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheContato = require('../imagens/detalhe_contato.png');

const corDeFundo = '#61bd8c';

export default class CenaCliente extends Component {
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
        <View style={styles.detContato}>
            <Image source={detalheContato} />
            <Text style={styles.txtNContato}>Contato</Text>
        </View>
        <View>
            <Text style={styles.txtContato}>(31) 99967-5020</Text>
            <Text style={styles.txtContato}>(31) 99693-5435</Text>
            <Text style={styles.txtContato}>e-mail: contato@certtec.com.br</Text>
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
    detContato: {
        flexDirection: 'row',
        marginTop: 30,
    },
    txtNContato: {
        fontSize: 32,
        textAlignVertical: 'center',
        color: corDeFundo,
        marginLeft: 30,
    },
    txtContato: {
        marginTop: 5,
        fontSize: 18,
        textAlignVertical: 'center',
        color: '#AAA',
        marginLeft: 30,
        fontWeight: 'bold',
    },

});
