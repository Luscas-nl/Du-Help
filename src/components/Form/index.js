import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Vibration, } from 'react-native'
import ResultImc from "./ResultImc"
import styles from "./style"

export default function Form() {
    const [height, setHeight]= useState(null)
    const [weight, setWeight]= useState(null)
    const [messageImc, setMessageImc]= useState(null)
    const [imc, setImc]= useState(null)
    const [textButton, setTextButton]= useState("Calcular IMC")
    const [errorMessage, setErrorMessage] = useState(null)
    function ImcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function VerificationNull(){
        if(imc==null){
            setErrorMessage("campo obrigatorio*")
            Vibration.vibrate()
        }
    }

    function Validation(){
        if(weight != null && height != null){
            ImcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            return
        }
        else{
            setImc(null)
            setTextButton(textButton)
            setMessageImc("Preencha o peso e a altura!")
            VerificationNull()
        }
        
        
        
    }

    return ( 
        <View style= {styles.formContext}>
            <View style= {styles.form}>
                <Text style= {styles.formLabel}>Altura</Text>
                <Text style= {styles.formMessageError}>{errorMessage}</Text>
                <TextInput
                    style= {styles.formInput}
                    placeholder= "Ex. 1.75"
                    KeyboardType= "numeric"
                    onChangeText= {setHeight}
                    value= {height}
                />
                <Text style= {styles.formLabel}>Peso</Text>
                <Text style= {styles.formMessageError}>{errorMessage}</Text>
                <TextInput
                    style= {styles.formInput}
                    placeholder= "Ex. 64.257"
                    KeyboardType= "numeric"
                    onChangeText= {setWeight}
                    value= {weight}
                />
                <TouchableOpacity style= {styles.formButton} onPress={() => Validation()}>
                    <Text style= {styles.formTextButton}>{textButton}</Text>
                </TouchableOpacity> 
            
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}