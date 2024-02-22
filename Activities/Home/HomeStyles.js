import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    HomeContainer: {
        backgroundColor: "#D6DBDF",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    MainTitleContainers: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    MainContainers: {
        width: "100%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    MainTitle: {
        fontSize: 30,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
        marginTop: 5,
        marginBottom: 5
    },
    text: {
        marginTop: "10%",
        fontSize: 20,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
    },
    textBig: {
        marginTop: "10%",
        fontSize: 25,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
    },
    imageContainer: {
        marginTop: "10%",
        backgroundColor: "#2E4053",
        width: 100,
        height: 100,
        display: "flex",
        flexDirection: "column",
        borderRadius: 50,
        borderColor: "#2E4053",
        borderWidth: 2,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%"
    },
    googleButton: {
        marginTop: "10%",
        height: 70,
    },
    dataContainer: {
        backgroundColor: "#EAEDED",
        borderRadius: 15,
        marginTop: "10%",
        width: "90%",
        paddingTop: 15
    },
    dataText: {
        fontSize: 15,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
        marginBottom: 15,
        // backgroundColor: "green",
        marginLeft: "5%",
        marginRight: "5%"
    },
    buttonContainer: {
        // backgroundColor: "blue",
        marginTop: "10%",
        width: "70%",
        height: "10%",
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
    buttonSelected: {
        backgroundColor: "#2E4053",
        width: "100%",
        height: "125%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        borderRadius: 15
    },
    buttonText: {
        width: "100%",
        fontSize: 15,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
        textAlign: "center",
    },
    buttonTextSelected: {
        width: "100%",
        fontSize: 15,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#E5E8E8",
        textAlign: "center",
    }
})

export { styles };