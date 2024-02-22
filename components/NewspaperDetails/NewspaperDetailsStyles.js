import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    DetailsContainer: {
        backgroundColor: "#D6DBDF",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    MainTitleContainers: {
        // backgroundColor: "red",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    MainTitle: {
        fontSize: 30,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
        marginTop: 5,
        marginBottom: 5
    },
    cardsContainer: {
        // backgroundColor: "blue",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    infoContainer: {
        backgroundColor: "#EAEDED",
        borderRadius: 15,
        marginTop: "10%",
        width: "90%",
        paddingTop: 15
    },
    DataTitle: {
        fontSize: 18,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
        marginBottom: 15,
        // backgroundColor: "green",
        marginLeft: "5%",
        marginRight: "5%"
    },
    DataText: {
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
        width: "100%",
        height: "10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#E5E8E8",
        width: "70%",
        height: "125%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        borderRadius: 15
    },
    buttonSelected: {
        backgroundColor: "#2E4053",
        width: "70%",
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
    },
    Loading: {
        fontSize: 30,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
    },
    LoadingContainer: {
        backgroundColor: "#EAEDED",
        borderRadius: 15,
        marginTop: "10%",
        width: "90%",
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: "center",
        justifyContent: "center",
    },
})

export { styles };