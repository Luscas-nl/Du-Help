import React from 'react'
import {View, Text, TouchableOpacity, Share} from 'react-native'
import styles from './style'

export default function ResultImc(props){
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC de hoje é: " +props.resultImc,
        })
    }

    return(
        <View style={{alignItems: 'center', paddingTop: 70}}>
            <View style={styles.boxShared}>
                {props.resultImc != null ?
                    <TouchableOpacity style={styles.shareButton} onPress={onShare}>
                        <Text style={styles.shareText}>Compartilhar</Text>
                    </TouchableOpacity>
                    :
                    <View/>
                }
            </View>
            <Text style={styles.message}>{props.messageResultImc}</Text>
            <Text style={styles.imc}>{props.resultImc}</Text>
        </View>
    );
}