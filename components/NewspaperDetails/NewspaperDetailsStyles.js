import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    DetailsContainer: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
    },
    MainTitleContainers: {
        // backgroundColor: "red",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    MainTitle: {
        fontSize: 40,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#131517"
    },
    cardsContainer: {
        // backgroundColor: "blue",
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    DataText: {
        fontSize: 15,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#131517"
    },
})

export { styles };