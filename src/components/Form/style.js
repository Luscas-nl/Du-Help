import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#ffffff",
        alignItems: "center",
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },

    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },

    formInput: {
        width: "100%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        paddingLeft: 20,

    },

    formButton: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#ff0043",
        marginTop: 20,
        paddingTop: 14,
        paddingBottom: 14,
    },

    formTextButton: {
        fontSize: 20,
        color: "#ffffff",

    },
    
    formMessageError: {
        fontSize: 11,
        fontWeight: "bold",
        color: "red",
        paddingLeft: 20,
    },

})

export default styles