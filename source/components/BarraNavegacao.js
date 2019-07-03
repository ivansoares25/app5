import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class BarraNavegacao extends Component {

  render() {
    return (
      <View style={[styles.barraTitulo, { backgroundColor: this.props.corDeFundo }]}>
        <Text style={styles.txtTitulo}>CERTTEC</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    barraTitulo: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#CCC',
        padding: 10,
        height: 60,
        justifyContent: 'center',
    },
    txtTitulo: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});
