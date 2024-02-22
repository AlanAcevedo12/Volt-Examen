import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    DogContainer: {
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
    imageContainer: {
        marginTop: "10%",
        backgroundColor: "#2E4053",
        width: "95%",
        height: "50%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 15,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    buttonContainer: {
        // backgroundColor: "blue",
        marginTop: "10%",
        width: "70%",
        height: "5%",
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
    },
    Loading: {
        fontSize: 30,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#D6DBDF",
    },
    LoadingContainer: {
        marginTop: "10%",
        backgroundColor: "#2E4053",
        width: "95%",
        height: "50%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 15,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
    },
})

export { styles };