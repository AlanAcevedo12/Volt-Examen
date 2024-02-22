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
    titleContainer: {
        width: "20%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        marginLeft: "5%"
    },
    cryptoTitle: {
        fontSize: 20,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
        marginLeft: "20%"
    },
    textContainer: {
        // backgroundColor: "red",
        width: "50%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    infoText: {
        fontSize: 15,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
        marginLeft: "5%"
    },
    symbolContainer: {
        width: "30%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        marginRight: "5%"
    },
})

export { styles };