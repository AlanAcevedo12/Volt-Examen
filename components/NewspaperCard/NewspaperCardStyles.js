import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "row",
        marginBottom: 5,
        backgroundColor: "#EAEDED",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },
    textContainer: {
        // backgroundColor: "red",
        width: "80%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    newspaperTitle: {
        fontSize: 15,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
        marginLeft: "5%"
    },
    newspaperLCCN: {
        fontSize: 10,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
        marginLeft: "5%"
    },
    buttonContainer: {
        // backgroundColor: "blue",
        width: "20%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "#E5E8E8",
        width: "100%",
        height: "125%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        borderRadius: 15
    },
    buttonText: {
        width:"100%",
        fontSize: 15,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#85929E",
        textAlign: "center",
    }
})

export { styles };