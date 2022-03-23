import React, { Component } from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'


export default class Cronometro extends Component {

    state = {
        botao1: 'Bora!',
        botao2: 'Zerou!',
        cronometro: 0,
        timer: null,
        atualTempo: 0,
        registroAtual: 0
    }

    iniciar = () => {
        if (this.timer != null) {
            clearInterval(this.timer)
            this.timer = null
            this.setState({ botao1: "Bora!" })
        }
        else {
            this.setState({ botao1: "Pausa!" })
            this.setState({ botao2: "Salvar e Zerar!" })
            this.timer = setInterval(() => { this.setState({ cronometro: this.state.cronometro + 0.1 }) }, 100)
        }
    }

    zerar = () => {
        if (this.timer != null) {
            clearInterval(this.timer)
            this.timer = null
        }
        else {
            this.setState({ atualTempo: this.state.cronometro })
            this.setState({ registroAtual: this.state.registroAtual + 1 })
            this.setState({ cronometro: 0 })
        }
    }

    render() {
        return (
            <View style={estilo.centralizar}>
                <Image style={estilo.imagem} source={require('../img/crono.png')} />
                <Text style={estilo.timer}>{this.state.cronometro.toFixed(1)}s</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={estilo.botao} onPress={this.iniciar}>
                        <Text style={estilo.textoBotao}>{this.state.botao1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.botao} onPress={this.zerar}>
                        <Text style={estilo.textoBotao}>{this.state.botao2}</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilo.areaRegistros}>
                    <View style={estilo.registros}>
                        <Text style={estilo.textoRegistros}>Nº de Registro</Text>
                        <Text>{this.state.registroAtual}</Text>
                    </View>
                    <View style={estilo.registros}>
                        <Text style={estilo.textoRegistros}>Tempo</Text>
                        <Text>{this.state.atualTempo.toFixed(1)}s</Text>
                    </View>
                </View>

            </View>

        )
    }

}

const estilo = StyleSheet.create({
    centralizar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffb56b',
        flex: 1
    },

    timer: {
        fontSize: 70,
        margin: 20,
        color: 'black'
    },

    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4a4a4a',
        margin: 10,
        height: 35,
        flex: 1,
        borderRadius: 10,
    },

    textoBotao: {
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Impact',
        fontSize: 20,
        color: 'black'
    },

    areaRegistros: {
        flex: 1,
        flexDirection: 'row',
    },

    registros: {
        alignItems: 'center',
        backgroundColor: '#fa922a',
        height: 60,
        margin: 10,
        flex: 1,
        borderRadius: 10,
    },

    textoRegistros: {
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Impact',
        fontSize: 16,
        color: 'black'
    },

    imagem: {
        width: 350,
        height: 200
    }
})