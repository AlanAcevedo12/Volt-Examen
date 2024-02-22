import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    NewspaperContainer: {
        backgroundColor: "#D6DBDF",
        width: "100%",
        height: "100%",
    },
    MainTitleContainers: {
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
    Loading: {
        fontSize: 30,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
    },
    LoadingContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    cardsContainer: {
        // backgroundColor: "blue",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    list: {
        width: "97%",
    }
})

export { styles };